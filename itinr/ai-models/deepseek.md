---
layout: default
title: DeepSeek API Key
---

# How to get your DeepSeek API key

DeepSeek is a Chinese AI lab providing **strong models at extremely low prices**.
A great choice if you're in a region where OpenAI/Anthropic/Gemini are blocked.

## Pricing (as of 2026)

| Model              | Input $/1M | Output $/1M |
| ------------------ | ---------- | ----------- |
| DeepSeek V3.1      | $0.27      | $1.10       |
| DeepSeek R1        | $0.55      | $2.19       |

A $5 top-up gives you roughly **18 million tokens** — thousands of itinerary extractions.

## Steps

1. Go to <https://platform.deepseek.com> and sign up.
   - Email signup works in most regions including Hong Kong and mainland China.
2. Open the **API Keys** page: <https://platform.deepseek.com/api_keys>
3. Click **Create API Key**, name it (e.g. `Itinr`).
4. **Copy the key** — starts with `sk-...`.
5. Top up a small amount (minimum $1–2) under **Billing** if you want to use the API.
6. In Itinr → Settings → AI Models → **DeepSeek** → paste into the API Key field.
7. Tap **Test Connection** to verify.

## Notes

- **Region**: DeepSeek works in **Hong Kong, mainland China, and most other countries**. No VPN needed.
- For Itinr, **DeepSeek V3** is the right pick — strong at structured extraction, very cheap.
- The R1 (reasoning) model is slower and more expensive — use only if V3 misses details.
- Your key is stored only on your device (in iOS Keychain).
