# Trailmark

Trailmark is a static guide to six published hiking routes in the Swiss National Park. It combines a contemporary printed field guide with a restrained topographic-map aesthetic.

> **Check current conditions:** Verify route status, weather, transport and park rules with the Swiss National Park before setting out.

## Features

- Map-led home page with a featured trail, recommendations and responsible-hiking notice
- Responsive trail explorer with name/location search, difficulty and distance filters
- URL-backed filter and mobile-view state
- Custom Leaflet markers with synchronized card/marker selection
- Accessible mobile Map/List segmented control
- Reusable detail page for all six park trails, with links to official route information
- Planning, about and useful not-found pages
- Keyboard navigation, visible focus states and reduced-motion support
- Direct-route support for Vercel through an SPA rewrite

## Technology

- Vite
- React and TypeScript
- React Router
- Leaflet and React Leaflet
- Custom CSS properties and responsive CSS
- OpenStreetMap tiles
- Playwright browser tests

No backend, database, authentication, API key or live data service is used.

## Getting started

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally `http://localhost:5173`.

## Verification commands

```bash
npm run lint
npm run typecheck
npm run build
npm run test:e2e
```

The Playwright configuration uses the local Google Chrome executable on Windows. On another platform, remove or update `launchOptions.executablePath` in `playwright.config.ts`, or install a Playwright browser with `npx playwright install chromium`.

## Project structure

```text
src/
├── components/   Shared navigation, filters, cards and notices
├── data/         Typed trail catalogue and official source links
├── map/          Leaflet map and custom marker components
├── pages/        Route-level page components
├── styles/       Design tokens and responsive layout system
├── types/        Shared TypeScript types
├── App.tsx       Browser routes
└── main.tsx      Application entry point
tests/            Playwright end-to-end coverage
```

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/trails` | Explore trails |
| `/trails/:slug` | Reusable trail detail |
| `/plan` | Planning prompts |
| `/about` | Project information |
| `*` | Not found |

## Design direction

**Surveyor’s Field Ledger** uses warm paper, spruce, lichen, stone and blaze-orange tokens. Newsreader gives editorial headings a field-guide voice while DM Sans keeps controls and trail data practical. Ruled dividers, broad map fields and subtle contour treatments replace dashboard-style cards. The angled map sheet with its trail-marker system is the primary visual signature.

## Deployment

Build the static site with:

```bash
npm run build
```

The output is written to `dist/`. For a Vercel preview:

```bash
npx vercel
```

`vercel.json` and `public/_redirects` provide SPA fallbacks for Vercel and Netlify, so directly opening or refreshing a URL such as `/trails/margunet` works correctly.

## Data and map attribution

Route facts are based on information published by the [Swiss National Park](https://nationalpark.ch/en/visit/trails-routes/) and were checked on 15 October 2026. Each trail detail page links to the corresponding official route. Conditions can change, so the site intentionally does not cache open or closed status.

Map markers identify trailheads and do not represent route geometry. Use official topographic mapping and current local advice for navigation.

Map data and tiles: [© OpenStreetMap contributors](https://www.openstreetmap.org/copyright).
