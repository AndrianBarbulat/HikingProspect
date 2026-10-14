# Trailmark

Trailmark is a complete static frontend demonstration for exploring six fictional hiking trails on an interactive map. It combines a contemporary printed field guide with a restrained topographic-map aesthetic.

> **Demonstration only:** Trail locations and details are illustrative and must not be used for navigation or safety decisions.

## Features

- Map-led home page with a featured trail, recommendations and responsible-hiking notice
- Responsive trail explorer with name/location search, difficulty and distance filters
- URL-backed filter and mobile-view state
- Custom Leaflet markers with synchronized card/marker selection
- Accessible mobile Map/List segmented control
- Reusable detail page for all six sample trails
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
├── data/         Typed fictional trail catalogue
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

`vercel.json` rewrites all application routes to `index.html`, so directly opening a URL such as `/trails/fernwood-loop` works correctly.

## Data and map attribution

Every trail name, coordinate, location, description and access note in this repository is fictional demonstration data. The points are illustrative and do not represent route lines.

Map data and tiles: [© OpenStreetMap contributors](https://www.openstreetmap.org/copyright).
