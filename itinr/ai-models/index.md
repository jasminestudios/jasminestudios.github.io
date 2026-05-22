---
layout: default
title: API Key Guides
---

# Itinr — API Key Guides

Itinr can call several LLM providers to extract events from your travel documents.
The **Free Default Model** option requires no setup — for unlimited use, you can plug in your own API key from any of these providers:

- [Claude (Anthropic)](claude.html) — premium quality, $5 free credit
- [Gemini (Google)](gemini.html) — most generous free tier (1,500 req/day)
- [OpenAI (GPT-4o)](openai.html) — well-known, $5 free credit
- [DeepSeek](deepseek.html) — extremely cheap, works in Hong Kong and mainland China

## Which one should I choose?

| Your situation                        | Recommendation                        |
| ------------------------------------- | ------------------------------------- |
| Just want it to work, no setup        | **Free Default Model** (built-in)     |
| In Hong Kong / mainland China         | **DeepSeek**                          |
| Want a free tier with high quota      | **Gemini** (if your region supports)  |
| Want best quality, willing to pay     | **Claude Sonnet/Opus**                |
| Already using OpenAI for other things | **OpenAI GPT-4o mini**                |

## How your keys are stored

- Keys are saved in the **iOS Keychain** — encrypted, device-only.
- Itinr never sends your key to any server other than the provider you chose.
- You can delete a key any time by clearing the field in Settings.
