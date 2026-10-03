/**
 * GA4 Data API 로 jasminestudios.net 트래픽 리포트를 뽑고, Search Console 검색어 리포트를 덧붙인다.
 * 사용: npx tsx scripts/ga-report.mts [--days 28] [--gsc]
 *   --gsc : GA 를 건너뛰고 Search Console 만.
 *
 * 서비스 계정 js-analytics@jasmine-studios.iam.gserviceaccount.com 이 GA4 속성(뷰어)과
 * Search Console(제한됨)에 추가돼 있다. 키는 저장소 밖 ~/.config/ga/blogs-sa.json (GA_KEY_FILE 로 바꿀 수 있음).
 */
import { createSign } from "node:crypto";
import { readFileSync } from "node:fs";

process.env.GA_KEY_FILE ??= `${process.env.HOME}/.config/ga/blogs-sa.json`;

const args = process.argv.slice(2);
const target = args.find((a) => !a.startsWith("--") && !/^\d+$/.test(a)) ?? "all";
const daysIdx = args.indexOf("--days");
const days = daysIdx >= 0 ? Number(args[daysIdx + 1]) : 28;
const gscOnly = args.includes("--gsc");

const hosts: Record<string, string> = { js: "jasminestudios.net" };
const sites: Record<string, string | undefined> = {
  js: "280204753",
};

async function getAccessToken(): Promise<string> {
  const keyFile = process.env.GA_KEY_FILE;
  if (!keyFile) throw new Error("GA_KEY_FILE 이 없습니다.");
  const key = JSON.parse(readFileSync(keyFile, "utf8"));
  const now = Math.floor(Date.now() / 1000);
  const enc = (o: object) => Buffer.from(JSON.stringify(o)).toString("base64url");
  const unsigned = `${enc({ alg: "RS256", typ: "JWT" })}.${enc({
    iss: key.client_email,
    scope: "https://www.googleapis.com/auth/analytics.readonly https://www.googleapis.com/auth/webmasters.readonly",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  })}`;
  const sig = createSign("RSA-SHA256").update(unsigned).sign(key.private_key, "base64url");
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: `${unsigned}.${sig}`,
    }),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`토큰 발급 실패: ${JSON.stringify(json)}`);
  return json.access_token;
}

type Row = Record<string, string>;

async function runReport(token: string, property: string, body: object): Promise<Row[]> {
  const res = await fetch(`https://analyticsdata.googleapis.com/v1beta/properties/${property}:runReport`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`runReport 실패 (${property}): ${JSON.stringify(json.error ?? json)}`);
  const dims: string[] = (json.dimensionHeaders ?? []).map((h: any) => h.name);
  const mets: string[] = (json.metricHeaders ?? []).map((h: any) => h.name);
  return (json.rows ?? []).map((r: any) => {
    const row: Row = {};
    dims.forEach((d, i) => (row[d] = r.dimensionValues[i].value));
    mets.forEach((m, i) => (row[m] = r.metricValues[i].value));
    return row;
  });
}

function fmt(v: string | undefined): string {
  if (v === undefined) return "-";
  if (!/^-?\d+(\.\d+)?$/.test(v)) return v.replace(/\|/g, "\\|").slice(0, 80);
  const n = Number(v);
  return Number.isInteger(n) ? String(n) : n.toFixed(2);
}

function table(title: string, rows: Row[]) {
  console.log(`\n### ${title}\n`);
  if (!rows.length) return console.log("(데이터 없음)");
  const cols = [...new Set(rows.flatMap((r) => Object.keys(r)))];
  console.log(`| ${cols.join(" | ")} |`);
  console.log(`| ${cols.map(() => "---").join(" | ")} |`);
  for (const r of rows) console.log(`| ${cols.map((c) => fmt(r[c])).join(" | ")} |`);
}

const range = { startDate: `${days}daysAgo`, endDate: "yesterday" };
const prevRange = { startDate: `${days * 2}daysAgo`, endDate: `${days + 1}daysAgo` };
const byViews = [{ metric: { metricName: "screenPageViews" }, desc: true }];
const bySessions = [{ metric: { metricName: "sessions" }, desc: true }];
const m = (...names: string[]) => names.map((name) => ({ name }));
const d = (...names: string[]) => names.map((name) => ({ name }));

async function report(token: string, name: string, property: string) {
  console.log(`\n## ${name} (property ${property}, 최근 ${days}일 vs 직전 ${days}일)`);

  const overviewMetrics = m("activeUsers", "newUsers", "sessions", "screenPageViews", "engagementRate", "averageSessionDuration");
  const [cur] = await runReport(token, property, { dateRanges: [range], metrics: overviewMetrics });
  const [prev] = await runReport(token, property, { dateRanges: [prevRange], metrics: overviewMetrics });
  table("개요", [
    { period: "최근", ...(cur ?? {}) },
    { period: "직전", ...(prev ?? {}) },
  ]);

  table("일별 추이", await runReport(token, property, {
    dateRanges: [range],
    dimensions: d("date"),
    metrics: m("activeUsers", "sessions", "screenPageViews"),
    orderBys: [{ dimension: { dimensionName: "date" } }],
  }));

  table("유입 채널", await runReport(token, property, {
    dateRanges: [range],
    dimensions: d("sessionDefaultChannelGroup"),
    metrics: m("sessions", "activeUsers", "engagementRate", "averageSessionDuration"),
    orderBys: bySessions,
  }));

  table("소스/매체 상위 20", await runReport(token, property, {
    dateRanges: [range],
    dimensions: d("sessionSourceMedium"),
    metrics: m("sessions", "engagementRate"),
    orderBys: bySessions,
    limit: 20,
  }));

  table("페이지 상위 30", await runReport(token, property, {
    dateRanges: [range],
    dimensions: d("pagePath", "pageTitle"),
    metrics: m("screenPageViews", "activeUsers", "userEngagementDuration"),
    orderBys: byViews,
    limit: 30,
  }));

  table("랜딩 페이지 상위 20 (자연 검색)", await runReport(token, property, {
    dateRanges: [range],
    dimensions: d("landingPage"),
    metrics: m("sessions", "engagementRate"),
    dimensionFilter: {
      filter: { fieldName: "sessionDefaultChannelGroup", stringFilter: { value: "Organic Search" } },
    },
    orderBys: bySessions,
    limit: 20,
  }));

  table("국가 상위 10", await runReport(token, property, {
    dateRanges: [range],
    dimensions: d("country"),
    metrics: m("sessions", "activeUsers"),
    orderBys: bySessions,
    limit: 10,
  }));

  table("기기", await runReport(token, property, {
    dateRanges: [range],
    dimensions: d("deviceCategory"),
    metrics: m("sessions", "engagementRate"),
    orderBys: bySessions,
  }));
}

async function gscSiteUrl(token: string, host: string): Promise<string | null> {
  const res = await fetch("https://searchconsole.googleapis.com/webmasters/v3/sites", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const json = await res.json();
  if (!res.ok) throw new Error(`GSC sites 조회 실패: ${json.error?.message ?? JSON.stringify(json)}`);
  const urls: string[] = (json.siteEntry ?? []).map((e: any) => e.siteUrl);
  return urls.find((u) => u === `sc-domain:${host}`) ?? urls.find((u) => u.includes(`//${host}`)) ?? null;
}

async function gscQuery(token: string, siteUrl: string, body: object): Promise<Row[]> {
  const res = await fetch(
    `https://searchconsole.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`,
    { method: "POST", headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" }, body: JSON.stringify(body) },
  );
  const json = await res.json();
  if (!res.ok) throw new Error(`GSC query 실패: ${json.error?.message ?? JSON.stringify(json)}`);
  const dims: string[] = (body as any).dimensions;
  return (json.rows ?? []).map((r: any) => {
    const row: Row = {};
    dims.forEach((d, i) => (row[d] = d === "page" ? r.keys[i].replace(/^https?:\/\/[^/]+/, "") : r.keys[i]));
    row.clicks = String(r.clicks);
    row.impressions = String(r.impressions);
    row.ctr = String(r.ctr);
    row.position = String(r.position);
    return row;
  });
}

async function searchReport(token: string, name: string, host: string) {
  console.log(`\n## ${name} — Google 검색 (Search Console, 최근 ${days}일)`);
  let siteUrl: string | null;
  try {
    siteUrl = await gscSiteUrl(token, host);
  } catch (e) {
    return console.log(`\n(건너뜀: ${(e as Error).message})`);
  }
  if (!siteUrl) return console.log("\n(건너뜀: 서비스 계정이 이 사이트의 Search Console 사용자로 추가돼 있지 않음)");

  const iso = (n: number) => new Date(Date.now() - n * 86400000).toISOString().slice(0, 10);
  const base = { startDate: iso(days), endDate: iso(1) };

  const byImpressions = (rows: Row[], n: number) =>
    rows.sort((a, b) => Number(b.impressions) - Number(a.impressions)).slice(0, n);
  table("검색어 상위 30 (노출순)", byImpressions(await gscQuery(token, siteUrl, { ...base, dimensions: ["query"], rowLimit: 1000 }), 30));
  table("페이지 상위 20 (노출순)", byImpressions(await gscQuery(token, siteUrl, { ...base, dimensions: ["page"], rowLimit: 1000 }), 20));

  // 노출은 되는데 클릭이 없는 검색어 — 제목·설명을 손보면 가장 빨리 늘릴 수 있는 곳
  const pairs = await gscQuery(token, siteUrl, { ...base, dimensions: ["query", "page"], rowLimit: 500 });
  table(
    "기회: 노출 5회 이상·CTR 3% 미만·평균 순위 4~30위",
    pairs
      .filter((r) => Number(r.impressions) >= 5 && Number(r.ctr) < 0.03 && Number(r.position) >= 4 && Number(r.position) <= 30)
      .sort((a, b) => Number(b.impressions) - Number(a.impressions))
      .slice(0, 20),
  );
}

const targets = target === "all" ? Object.keys(sites) : [target];
const token = await getAccessToken();
for (const t of targets) {
  const property = sites[t];
  if (!property) throw new Error(`.env 에 GA_PROPERTY_${t.toUpperCase()} 가 없습니다.`);
  const name = "Jasmine Studios";
  if (!gscOnly) await report(token, name, property);
  await searchReport(token, name, hosts[t]);
}
