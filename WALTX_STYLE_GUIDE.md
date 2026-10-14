# WaltX visual and interaction guide

This direction adapts the energy of [Amnesia Ibiza's site](https://www.amnesia.es/) to WaltX's four UAE guides. The reference was inspected on desktop and mobile on 14 October 2026. Its visible system uses a black field, acid-yellow type, a hot-pink header and menu, tightly condensed uppercase display text, moving word bands, angular media and oversized navigation. WaltX uses those patterns with its own logo, portfolio imagery, brand wordmarks and copy.

## Colour

| Role | Token | Use |
| --- | --- | --- |
| Canvas | `#050505` | Hero, portfolio, footer |
| Signal yellow | `#f3fc0a` | Giant type, moving bands, alternate portfolio panels |
| Signal pink | `#fe0850` | Navigation, alternate panels, emphasis |
| Soft white | `#f7f5f0` | Small text on black |

These colours carry meaning through contrast and repetition. Keep body copy black on yellow or pink; use soft white on black. The portfolio's brand marks retain their supplied colours.

## Type and composition

- **Display:** locally hosted Bebas Neue, an open-source condensed face. Use uppercase, oversized lines and tight leading. The reference uses proprietary GT America and OT Neue Montreal; WaltX does not copy those font files.
- **Body:** Arial/Helvetica for plain, readable descriptions and legal text.
- **Layout:** full-width colour fields and large image panels. Use minimal boxes and borders. Each section should feel like one poster, with the four websites still easy to distinguish.
- **Images:** use WaltX's existing portfolio images and supplied brand sheet. Do not use Amnesia photos, videos, graphics or logos.

## Motion

| Pattern | WaltX implementation |
| --- | --- |
| Opening reveal | Existing WaltX logo curtain opens into the page. |
| Repeating type | Two horizontal bands loop continuously. Hero backdrop drifts slowly. |
| Angular media | A triangle cycles through all four portfolio images; numbered controls allow manual selection. |
| Hover feedback | Portfolio images enlarge slightly and regain colour; navigation inverts its colours. |
| Entrance text | Text rises gently as it enters the viewport. |

Motion should direct attention, not block content. The hero controls remain usable during animation. `prefers-reduced-motion: reduce` stops the curtain, loops, carousel and nonessential transitions.

## Navigation and interaction

Desktop uses a pink horizontal header with three direct links. Mobile uses a full-height pink menu with oversized yellow labels on black strips. The menu opens from a labelled button, closes with the same button or Escape, and returns keyboard focus to the button after Escape. Portfolio images, titles and visit links open the corresponding external site in a new tab.

Keep the WaltX company details, direct email and legal links visible. Future pages should follow these tokens and patterns without adding club-specific visual symbols or claims.
