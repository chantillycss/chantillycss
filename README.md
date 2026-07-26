# Chantilly

**Beautiful by default. Usable by design.**

A lightweight CSS framework where UX best practices are encoded by default:
computed AA/AAA contrast (tested in CI, not promised), 44px tap targets,
forgiving validation, native dark mode. **0KB of JavaScript. No build step. MIT.**

> Other frameworks ship styled components.
> Chantilly ships correct ones — every state, every rule, already encoded.

## Quick start

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/chantilly/dist/chantilly.min.css">
```

```bash
npm install chantilly
```

Write semantic HTML — it is already correct. Linked labels, guaranteed contrast,
44px targets, dark mode: no classes required.

## Project structure

```
chantillycss/
├── src/                   ← THE FRAMEWORK (the only thing published to npm)
│   ├── tokens.css         ← single source of truth: colors, type, spacing
│   ├── core.css           ← reset + classless base + layout primitives
│   ├── chantilly.css      ← entry point assembling the bundle
│   └── modules/           ← forms, navigation, feedback, tables, commerce
├── dist/                  ← generated minified files (npm run build:css)
├── site/                  ← WEBSITE + DOCS + BLOG (Eleventy, styled by Chantilly itself)
│   ├── index.njk          ← home
│   ├── docs/              ← documentation (sidebar left / content right)
│   ├── blog/              ← UX laws & accessibility guidelines, in plain words
│   ├── _includes/layouts  ← base / docs / post templates
│   ├── _data/             ← docs navigation, site metadata
│   └── assets/            ← framework CSS (copy) + site-specific styles/JS
├── scripts/
│   └── check-contrast.mjs ← contrast is tested, not promised
└── eleventy.config.js
```

## Commands

```bash
npm install           # once
npm run dev           # local site → http://localhost:8080
npm run build         # minified CSS + static site
npm run test:contrast # verifies every shipped WCAG contrast ratio
npm run size          # bundle weight, min+gzip, in bytes
```

## Non-negotiable principles

1. A component ships only when **all of its states** exist.
2. Every encoded rule is **annotated with its "why"** in the source.
3. Contrast ratios are **computed in CI** — a release physically cannot ship
   if any shipped color combination regresses below its WCAG threshold.
4. The website is styled **by Chantilly itself** — total dogfooding.

## Component definition of done

No CSS is written before the component's UX checklist is complete: identity,
every UI state, encoded UX rules with sources (WCAG 2.2, NN/g, Baymard, GOV.UK),
semantic HTML attributes, accessibility, responsive edge cases, and a weight
budget. The checklist is both the spec and the first draft of the docs page.

[📖 Documentation](https://chantillycss.com)  .  [📦 npm](https://www.npmjs.com/package/chantilly)  .  [📰 Blog — les lois UX en clair](https://chantillycss.com/blog/)

## License

MIT © Nadia Djellali (https://github.com/NadiaWho)