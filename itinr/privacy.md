# Privacy Policy

**Itinr** · Last updated: 2026-10-04

This privacy policy explains what information Itinr handles, where it goes,
and what choices you have. Itinr is published by **Jasmine Studios**.

If anything below is unclear, please contact us at [support@jasminestudios.net](mailto:support@jasminestudios.net).

---

## TL;DR

* Itinr is **free**. There are no accounts, no sign-ins and no in-app purchases.
* Your trips live **on your device** and, if you use iCloud, in **your own iCloud account**. We can't read them.
* **AI is optional.** It runs with Apple Intelligence on your iPhone, or with your own API key sent straight to the AI company you choose. You can turn AI off completely in **Settings → AI**; the app keeps working on your device.
* Our servers only see trip details when you use one of two optional features: a **web share link** or **Edit with AI** (connecting Claude or ChatGPT). Both are described below.
* The app contains **no** analytics, advertising or tracking SDK. We do not sell or share your data.

---

## 1. Trip data you create

Trips, events, notes, photos, documents, expenses and to-dos you add are stored:

* **On your device**, in the app's private storage.
* **In your iCloud Drive** (container `iCloud.net.jasminestudios.Itinr`) if iCloud
  sync is on (**Settings → Data & Storage**). This is your private iCloud
  storage — Jasmine Studios cannot read it.
* **In your iCloud (CloudKit)** for trips you share with other people through
  iCloud. The trip and its attachments are shared only with the people you
  invite, through Apple's iCloud sharing.

---

## 2. AI features (optional)

Some features can use AI: reading booking emails and documents, planning
days, suggesting to-dos, reading menus and receipts, naming dishes in food
photos, and answering questions about a place. When you use one, Itinr sends
**only the content that feature needs** to the AI you selected in
**Settings → AI → AI Models**. Depending on the feature this can include
document text or images, event titles, places and dates, traveller names,
booking references, menu or receipt text, and expense amounts. Your device's
precise location is never included (for directions, only an area name may be).

| AI option | Where your data goes |
|---|---|
| **Apple Intelligence — on-device** | Stays on your iPhone. |
| **Apple Intelligence — Private Cloud Compute** (supported iPhones, iOS 27) | Processed on Apple's Private Cloud Compute servers. Apple states that this data is used only to fulfil the request, is not stored, and is not accessible to Apple or to us. |
| **Your own API key** — Claude (Anthropic), Gemini (Google), OpenAI, DeepSeek, OpenRouter, Cloudflare Workers AI | Sent **directly from your device** to that company. Their privacy policy applies. Your key is kept in the iOS Keychain on your device and never sent to us. |

* **Turn AI off:** Settings → AI → **Use AI**. With AI off, nothing is sent to
  any AI service; features that can work without AI use built-in rules on your
  device, and AI-only features are shown as unavailable.
* Itinr does **not** operate its own AI service in this version (see
  "Earlier versions" below).

AI company policies:
[Anthropic](https://www.anthropic.com/legal/privacy) ·
[Google Gemini API](https://ai.google.dev/gemini-api/terms) ·
[OpenAI](https://openai.com/policies/privacy-policy) ·
[DeepSeek](https://chat.deepseek.com/downloads/DeepSeek%20Privacy%20Policy.html) ·
[OpenRouter](https://openrouter.ai/privacy) ·
[Cloudflare](https://www.cloudflare.com/privacypolicy/) ·
[Apple Private Cloud Compute](https://security.apple.com/blog/private-cloud-compute/)

---

## 3. Features that use Jasmine Studios servers

These are the only features where trip details reach servers we run. Both
start only when you turn them on.

### Web share link
When you create a web link for a trip, Itinr publishes a **read-only web page
of the itinerary** so anyone with the link can view it in a browser.

* **What's included:** the trip's events, dates, times and places.
  **Not included:** booking references, seat numbers, passenger names, phone
  numbers, photos, documents, expenses and maps.
* **Where it's stored:** in the public database of Itinr's iCloud (CloudKit)
  container, under a long random link ID. Our web server
  (`itinr.jasminestudios.net`) reads it from there to show the page and keeps
  no copy. Pages are marked so search engines don't index them.
* **Anyone with the link can view it.** It updates automatically when you edit
  the trip.
* **Removal:** the page is deleted when you stop sharing the link or delete the
  trip. There is no automatic expiry.

### Edit with AI (Claude / ChatGPT connector)
When you start an "Edit with AI" session, Itinr uploads a copy of the trip to a
**temporary session** on our server so the AI app you use (for example Claude
or ChatGPT) can read it and send back changes.

* **What's uploaded:** trip title, destination and dates, traveller names,
  events (titles, details and places), document names, notes and links,
  expenses (amounts, currencies and notes) and to-dos. Attachment files are
  **not** uploaded — only their names.
* **Access:** the session is reachable only with its random session ID, which
  Itinr copies to your clipboard for you to paste into your AI app.
* **Retention:** the session is deleted automatically **1 hour** after it's
  created, or **24 hours** after the AI app applies changes.
* If your AI app uploads files to the connector to build an `.itinr` trip file,
  those files are stored on our server so you can download the result;
  download links expire after **24 hours**. You can ask us to delete them at
  any time.
* The AI app you connect is a separate service with its own privacy policy.

### Server logs
Our servers run on **Cloudflare**. To keep them working and prevent abuse,
they keep request counters keyed by IP address, and Cloudflare keeps standard
request logs (such as IP address, time and request path) for a limited time.
We don't use them to identify you.

---

## 4. Content Itinr downloads

To show trip photos, restaurant menus, place suggestions and story music,
Itinr downloads public files from our content server (`img.jasminestudios.net`).
These requests contain **no identifiers** — only which city, country or file is
needed — and are subject to the standard server logs described above.

---

## 5. Other services Itinr contacts

Itinr talks to these services directly, only to provide the feature you're
using:

* **Apple Maps** — place search, directions, and nearby places when you check in.
* **Wikipedia / Wikidata** — information about a place (by its name).
* **Open-Meteo** — weather for an event's location and date (not your device's location).
* **open.er-api.com** — currency exchange rates (no personal data).
* **Web pages and Google Maps links you paste** — fetched to read their contents.
* **Instagram** — when you share a story, the video is handed to the Instagram app on your device.
* **Apple Translation** — menu translation runs on your device.

---

## 6. Permissions

* **Camera and Photos** — only to attach photos and videos you choose, and to
  save stories you create to your library. Itinr never scans your library in
  the background.
* **Location** (while using the app) — to find nearby places when you check in
  and to give directions. Your location is not sent to Jasmine Studios.
* **Calendar** — to keep a dedicated "Itinr Trips" calendar up to date if you
  turn on calendar sync. Itinr only reads back that calendar.
* **Notifications** — reminders and alerts are created on your device. Apple's
  push service is used only for silent iCloud sync updates.

---

## 7. Diagnostics and website analytics

The Itinr **app** includes no third-party analytics, crash-reporting,
advertising or attribution SDK. If you choose to share analytics with app
developers in iOS Settings, Apple may share anonymized crash reports with us.

Our **website** (jasminestudios.net/itinr) uses **Google Analytics** for basic,
aggregate visit statistics. This applies to the website only, not the app —
see [Google's privacy policy](https://policies.google.com/privacy).

---

## 8. Earlier versions

Versions of Itinr before **1.7** offered an included Itinr cloud AI and in-app
purchases. If you still use an earlier version, those features worked as
follows: AI requests passed through Cloudflare Workers we operate without
storing your content; usage was metered with a pseudonymous, per-install
identifier (created with Apple's App Attest, or tied to your App Store
purchase), and a per-request usage log (time, feature, token counts, model) was
kept for **30 days**. Updating to 1.7 or later stops this entirely.

---

## What we don't do

* No accounts, sign-ups or sign-ins.
* No collection of your name, email, phone number or contacts.
* No tracking across other apps or websites, and no advertising.
* No selling, renting or sharing of your data.

---

## Children's privacy

Itinr is rated 4+ and does not knowingly collect personal information from
anyone, including children.

---

## Your choices

* **Turn AI off** — Settings → AI → Use AI.
* **Stop a web share link** — turn off the link in the trip's share options, or delete the trip.
* **Delete a trip** — long-press it on the home screen and choose Delete. This
  removes it from your device and iCloud, deletes its attachments and removes
  its web share link.
* **Stop iCloud sync** — Settings → Data & Storage, or turn off iCloud Drive
  for Itinr in iOS Settings.
* **Remove the app** — deleting Itinr removes on-device data. Data in your
  iCloud stays until you remove it in iOS Settings → Apple ID → iCloud →
  Manage Storage.
* **Ask us** — email us to ask about or delete anything held on our servers.

---

## Changes to this policy

If we make material changes, we will update the "Last updated" date above and,
when significant, mention it in the app's release notes.

---

## Contact

Jasmine Studios
Email: [support@jasminestudios.net](mailto:support@jasminestudios.net)
