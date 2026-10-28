# Inquiry Form

The commission inquiry form is the studio's only contact channel (D-016). This
document is the source of truth for its contents, so the field definition does
not live only inside a third-party dashboard.

- **Host:** Tally — <https://tally.so/r/zEEvka>
- **Where the URL lives:** `src/config/site.ts` → `site.tallyUrl`
- **Where it renders:** `/commission`, in an `iframe` (`/r/` → `/embed/`)
- **Fallback:** a direct link under the form for anyone whose browser blocks frames

Because the page embeds the live form, **edits in Tally appear on the site
immediately** — no rebuild, no deploy. Only changing the form's URL requires a
code change.

## Fields

Derived from PROJECT_SPEC.md §5.3.

| # | Question | Type | Required | Notes |
|---|---|---|---|---|
| 1 | Your names | Short answer | yes | hint: `e.g. Arif & Kirana` |
| 2 | Email or WhatsApp | Short answer | yes | either channel is acceptable |
| 3 | Wedding date, or an estimate | Short answer | yes | text, not a date picker — "not sure yet" is common |
| 4 | Preferred colour nuance | Multiple choice | yes | Blue · Pink · Both · Not sure yet |
| 5 | Preferred style | Multiple choice | yes | Floral · Minimal · Storybook · Not sure yet |
| 6 | Your story | Long answer | yes | the question that actually matters |
| 7 | Inspiration links | Short answer | **no** | optional; abandoned inquiries start here |

**Status (2026-10-29):** questions 1–7 exist in Tally; the option lists for 4
and 5 are still to be filled in. The embed needs no change when they are added.

### Deliberately dropped from §5.3

- Instagram handle
- Venue city

Both add friction at the moment of inquiry for little value. Add them later if
the first few submissions show they are needed.

## Rules

- **Never add** RSVP fields, guest counts, payment, or file upload. See §2.2.
- Do not enable Tally's payment or calculator blocks.
- Keep question 7 optional. Required optional-fields are the fastest way to lose
  an inquiry.
- Whatever an inquiry contains, `/privacy` must describe it.

## After a submission

Tally emails the account owner. Reply from that same mailbox so the couple sees
a human address, not a no-reply.

## Related

- D-015 — Tally as the inquiry backend
- D-016 — the form is the contact channel; no public email or phone at launch
- `/privacy` — what is collected and how to have it removed
## Embed details

- The iframe is fixed at **1100px** tall. Tally's form does not report its own
  height without their `dynamicHeight` script, which we deliberately do not load.
- **Re-check the height after adding the option lists to questions 4 and 5** —
  four options per question adds roughly 300px. If the Submit button gets cut
  off, raise the `h-[1100px]` utility in `src/pages/commission.astro`.
- Tally's own button colour comes from its theme, not from our tokens. Set the
  form accent to Deep Cerulean `#2F5D8A` in Tally → Design so the Submit button
  matches the site.
