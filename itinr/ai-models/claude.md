---
layout: default
title: Claude API Key
---

# How to get your Claude (Anthropic) API key

The Claude API is provided by **Anthropic**. Itinr uses it to extract events from your travel documents.

## Pricing (as of 2026)

Anthropic gives **$5 free credit** to new accounts — enough for hundreds of itinerary extractions.
After that, you pay per token (very small per request).

| Model            | Input $/1M tokens | Output $/1M tokens |
| ---------------- | ----------------- | ------------------ |
| Claude Haiku 4.5 | $1.00             | $5.00              |
| Claude Sonnet 4.6| $3.00             | $15.00             |
| Claude Opus 4.7  | $5.00             | $25.00             |

For Itinr, **Haiku 4.5** is plenty — one PDF extraction costs roughly $0.001.

## Steps

1. Go to <https://console.anthropic.com> and sign up (or log in).
2. Verify your phone number — required for API access.
3. Click your profile (top-right) → **API Keys**.
   - Direct link: <https://console.anthropic.com/settings/keys>
4. Click **Create Key**.
5. Give it a name (e.g. `Itinr`) and choose permissions (default is fine).
6. **Copy the key immediately** — it starts with `sk-ant-...` and is only shown once.
7. In Itinr → Settings → AI Models → **Claude** → paste the key into the API Key field.
8. Tap **Test Connection** to verify.

## Notes

- **Region**: Anthropic does not officially support Hong Kong. If you're in HK without a VPN, the API may be blocked. Use the **Free Default Model** option instead.
- You can add **billing limits** in the Anthropic console to cap your monthly spend.
- Your key is stored only on your device (in iOS Keychain).
