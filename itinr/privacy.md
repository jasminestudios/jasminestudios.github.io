# Privacy Policy

**Itinr** · Last updated: 2026-05-25

This privacy policy explains what information Itinr collects, how it is used,
and what choices you have. Itinr is published by **Jasmine Studios**.

If anything below is unclear, please contact us at [support@jasminestudios.net](mailto:support@jasminestudios.net).

---

## TL;DR

* Itinr does **not** have an analytics or tracking SDK.
* Your trip data lives **on your device** and (if you enable iCloud sync) in **your own iCloud account**. We never see it.
* AI document extraction sends the **document text** to the AI provider you select. You choose which one — including a fully on-device option that sends nothing.
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

### 2. AI document extraction (optional, user-initiated)
When you tap **Extract Events with AI** on a document, Itinr sends the
**text and/or image content of that document** to the AI provider currently
selected in **AI Settings**. The available providers are:

| Provider | Where the data goes | Who controls it |
|---|---|---|
| **On-Device** (Apple Intelligence) | Stays on your device | Apple's on-device model — nothing leaves the device |
| **Free Demo (Shared)** | Cloudflare Worker we operate | Forwards to the underlying free-tier model; no logs are retained |
| **Claude / Gemini / OpenAI / DeepSeek** | The respective AI vendor's API | The vendor's privacy policy applies — see links below |

When the **Free Demo** provider is used, requests pass through a Cloudflare
Worker hosted by Jasmine Studios. The Worker forwards the request to a
free-tier upstream model and returns the response. It does **not** retain
the document content or your IP address. We do retain anonymous aggregate
counters (number of requests per day) to enforce the shared quota; these
counters cannot be tied back to you or to any document you sent.

When you use your own API key for **Claude, Gemini, OpenAI, or DeepSeek**,
the request goes directly from your device to that vendor. Your API key is
stored in iOS Keychain on your device and never sent to Jasmine Studios.

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
Itinr does not include any third-party analytics, tracking, or crash
reporting SDK. If you opt in to share crash reports with Apple in iOS
Settings, Apple may share anonymized crash logs with us — that channel is
controlled entirely by Apple and contains no personal data.

---

## What we do not do

* We do not have user accounts, sign-ups, or sign-ins.
* We do not collect your name, email, phone number, or contacts.
* We do not track you across other apps or websites.
* We do not sell, rent, or share your data.
* We do not show advertising.
* We do not use third-party analytics, attribution, or A/B-testing SDKs.

---

## Children's privacy

Itinr is rated 4+ and does not knowingly collect personal information from
anyone, including children.

---

## Your choices

* **Delete a trip** — Tap and hold a trip on the home screen, then Delete.
  This removes it from the device and from your iCloud container.
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
