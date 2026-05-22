---
layout: default
title: OpenAI API Key
---

# How to get your OpenAI API key

OpenAI provides GPT-4o and other models. Itinr uses it to extract events from your travel documents.

## Pricing (as of 2026)

OpenAI gives **$5 free credit** to verified new accounts.

| Model        | Input $/1M | Output $/1M |
| ------------ | ---------- | ----------- |
| GPT-4o mini  | $0.15      | $0.60       |
| GPT-4o       | $2.50      | $10.00      |
| GPT-4 Turbo  | $10.00     | $30.00      |

For Itinr, **GPT-4o mini** is more than enough — extracting an itinerary costs under a cent.

## Steps

1. Go to <https://platform.openai.com> and sign up (or log in).
2. Verify your phone number — required.
3. Add a payment method (you can set spending limits to $5–10/month for safety):
   - <https://platform.openai.com/settings/organization/billing/overview>
4. Open the **API Keys** page: <https://platform.openai.com/api-keys>
5. Click **Create new secret key**.
6. Give it a name (e.g. `Itinr`) and choose the project (default is fine).
7. **Copy the key immediately** — starts with `sk-...` and is only shown once.
8. In Itinr → Settings → AI Models → **OpenAI** → paste into the API Key field.
9. Tap **Test Connection** to verify.

## Notes

- **Region**: OpenAI does not officially support Hong Kong, mainland China, etc. If you're in a blocked region, use the **Free Default Model** option instead.
- Set a **monthly usage limit** in the billing page to prevent surprise charges.
- Your key is stored only on your device (in iOS Keychain).
