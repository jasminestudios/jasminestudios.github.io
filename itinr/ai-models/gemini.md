---
layout: default
title: Gemini API Key
---

# How to get your Google Gemini API key

Gemini is Google's LLM. It has the **most generous free tier** of any major LLM provider.

## Pricing

**Free tier** (default for new accounts):
- `gemini-2.5-flash`: 1,500 requests/day, 1M context — perfect for Itinr
- `gemini-2.5-pro`: 50 requests/day

Paid tier kicks in only if you explicitly enable billing.

## Steps

1. Go to **Google AI Studio**: <https://aistudio.google.com/apikey>
2. Sign in with your Google account.
3. Click **Create API Key**.
4. Select an existing Google Cloud project, or let it create a new one.
5. **Copy the key** — starts with `AIza...`.
6. In Itinr → Settings → AI Models → **Gemini** → paste the key into the API Key field.
7. Tap **Test Connection** to verify.

## Notes

- **Region restriction**: Google AI Studio is **not officially available in Hong Kong, mainland China, and a few other countries**. If gaining the key requires a different region, use a VPN once to register (no VPN needed for subsequent API calls if you also route through the Itinr proxy).
- The free tier shares quota with Google AI Studio web usage — heavy interactive use can eat into your API quota.
- For Itinr, **gemini-2.5-flash** is the right pick — fast, generous quota, strong at structured extraction.
- Your key is stored only on your device (in iOS Keychain).
