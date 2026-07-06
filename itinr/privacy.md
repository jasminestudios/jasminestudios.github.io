# Privacy Policy

**Itinr** · Last updated: 2026-07-06

This privacy policy explains what information Itinr collects, how it is used,
and what choices you have. Itinr is published by **Jasmine Studios**.

If anything below is unclear, please contact us at [support@jasminestudios.net](mailto:support@jasminestudios.net).

---

## TL;DR

* The Itinr **app** contains **no** analytics or tracking SDK. (Our marketing website uses basic Google Analytics — see "Website analytics" below.)
* Your trip data lives **on your device** and (if you enable iCloud sync) in **your own iCloud account**. We never see it.
* AI features send the relevant **trip or document content** to the AI provider you select — this can include place and passenger names, booking references, and expense amounts. You choose the provider, including a fully on-device option that sends nothing.
* We have no user accounts, but the shared cloud-AI option uses a **device-tied pseudonymous identifier** to enforce fair-use quotas. It contains no name or email.
* We do not sell, share, or resell anything.

---

## What information Itinr handles

### 1. Trip data you create
Trip names, dates, events, attached documents, photos, and notes you add to
your trips are stored:

* **Locally** in the app's private container on your device.
* **In your iCloud Documents** (in the `iCloud.net.jasminestudios.Itinr`
  container) if iCloud Drive is enabled on your device. This is a private,
  per-user container — Jasmine Studios cannot read it.

You can turn iCloud sync off at any time in Settings → AI Settings (or by
disabling iCloud Drive for Itinr in iOS Settings → Apple ID → iCloud →
iCloud Drive → Apps Using iCloud Drive).

### 2. AI features (optional, user-initiated)
Several features are powered by AI: extracting events from a document,
building an itinerary, suggesting menu items, and generating your trip
recap story. When you use one, Itinr sends the **content that feature
needs** to the AI provider currently selected in **AI Settings**.

**What is sent** depends on the feature, and can include:

* the **text and/or image content** of a document you extract;
* **event titles, places, dates, and traveller names** from the trip;
* **expense amounts and categories** (for spending-related requests);
* menu or receipt text you scan.

Booking references, seat numbers, and similar identifiers contained in a
document you extract may be included in that request (that is how the app
reads them back). **On-device processing (below) keeps all of this on your
phone.** Location coordinates are **not** included in AI requests.

The available providers are:

| Provider | Where the data goes | Who controls it |
|---|---|---|
| **On-Device** (Apple Intelligence) | Stays on your device | Apple's on-device / Private Cloud Compute model — nothing leaves Apple's on-device path |
| **Included cloud AI (Itinr)** | Cloudflare Workers we operate | Forwards to an upstream model and returns the response; see retention below |
| **Claude / Gemini / OpenAI / DeepSeek** | The respective AI vendor's API | The vendor's privacy policy applies — see links below |

**Included cloud AI — what we retain.** Requests pass through Cloudflare
Workers hosted by Jasmine Studios. We do **not** store the request content
(your document/trip text) or the model's response. To enforce fair-use
quotas and prevent abuse, we keep **usage metering** tied to a pseudonymous
per-install identifier (created on your device via Apple's App Attest, or a
random token — no name, email, or Apple ID). This includes a rolling log of
each request's time, endpoint, token counts, and model, which is **deleted
after 30 days**, plus longer-lived daily/entitlement totals. For paid users
this identifier is derived from your App Store transaction. In short: we
cannot see *what* you sent, but usage is attributable to your install/purchase
— it is **not** fully anonymous. Your IP address is not stored by our code.

When you use your own API key for **Claude, Gemini, OpenAI, or DeepSeek**,
the request goes directly from your device to that vendor. Your API key is
stored in the iOS **Keychain** on your device and never sent to Jasmine Studios.

Third-party AI vendor policies:

* Anthropic (Claude): https://www.anthropic.com/legal/privacy
* Google (Gemini): https://ai.google.dev/gemini-api/terms
* OpenAI: https://openai.com/policies/privacy-policy
* DeepSeek: https://chat.deepseek.com/downloads/DeepSeek%20Privacy%20Policy.html

### 3. Camera and Photo Library
Itinr asks for camera and photo library permission **only** so you can attach
photos to your trip events. Photos you attach are stored locally (and in
your iCloud container if sync is on). Itinr does not access your photo
library in the background and does not upload any photo to Jasmine Studios.

### 4. Diagnostics
The Itinr **app** does not include any third-party analytics, tracking, or
crash reporting SDK. If you opt in to share crash reports with Apple in iOS
Settings, Apple may share anonymized crash logs with us — that channel is
controlled entirely by Apple and contains no personal data.

### 5. Website analytics
Our marketing website (**jasminestudios.net/itinr**) uses **Google
Analytics** to measure basic, aggregate visit statistics (page views,
approximate region, referrer). This applies to the website only — **not**
to the app — and is subject to
[Google's privacy policy](https://policies.google.com/privacy). You can
block it with any content blocker or by opting out of analytics cookies.

---

## What we do not do

* We do not have user accounts, sign-ups, or sign-ins.
* We do not collect your name, email, phone number, or contacts.
* We do not track you across other apps or websites.
* We do not sell, rent, or share your data.
* We do not show advertising.
* We do not use any third-party analytics, attribution, or A/B-testing SDK **in the app** (our website uses basic Google Analytics — see §5).

---

## Children's privacy

Itinr is rated 4+ and does not knowingly collect personal information from
anyone, including children.

---

## Your choices

* **Delete a trip** — Tap and hold a trip on the home screen, then Delete.
  This removes it from your device and your iCloud container, deletes its
  attachments, and revokes any live-share link you created for it.
* **Stop using AI features** — Don't tap Extract; the app continues to work
  manually. Or pick the **On-Device** provider so nothing leaves your phone.
* **Stop using iCloud sync** — Turn off iCloud Drive for Itinr in
  iOS Settings → Apple ID → iCloud → iCloud Drive → Apps Using iCloud Drive.
* **Remove the app** — Long-press the icon → Delete App. This removes the
  on-device data. iCloud-stored data remains in your account until you
  remove it via iOS Settings → Apple ID → iCloud → Manage Storage.

---

## Changes to this policy

If we make material changes, we will update the "Last updated" date at the
top and, when significant, surface a note inside the app on next launch.

---

## Contact

Jasmine Studios
Email: support@jasminestudios.net
</content>
