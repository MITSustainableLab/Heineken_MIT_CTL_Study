# MIT CTL × Heineken Research Reports

A React web application presenting findings from a two-phase consumer research collaboration between MIT's Center for Transportation & Logistics and Heineken, examining non-alcoholic beer brand equity and consumer choice behavior in the US market.

## Studies

**Study I — Sustainable Sips (November 2025)**
Controlled study (n = 412) using one-to-one brand comparisons to establish baseline mother-brand preference and demographic predictors of choice behavior.

**Study II — Sober Spirits (April 2026)**
Competitive e-commerce simulation (n = 614) placing participants in a realistic online store stocked with six real NA beer brands. Three experimental variants tested real-world pricing, price-equalized conditions, and out-of-stock scenarios.

## Tech Stack

- **React 18** with TypeScript
- **Vite** — dev server and build tool
- **Tailwind CSS** — styling
- **Recharts** — data visualizations

## Getting Started

Requires [Node.js](https://nodejs.org/) (v18+).

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The dev server runs at `http://localhost:5173` by default.

## Project Structure

```
src/
├── pages/
│   ├── ReportPage.tsx           # Study I report
│   ├── MethodologyPage.tsx      # Study I methodology
│   ├── Phase2ReportPage.tsx     # Study II report
│   └── Phase2MethodologyPage.tsx
├── components/
│   ├── layout/                  # AppShell, Header, Table of Contents
│   ├── ui/                      # Card, Section, Callout, ImageLightbox, etc.
│   ├── charts/                  # Recharts wrappers
│   ├── content/                 # Narrative blocks, timelines, bullet lists
│   ├── explorers/               # Results explorer, regression section
│   └── sentiment/               # Sentiment analysis components
├── data/                        # All study data as JSON / TypeScript modules
└── App.tsx                      # Top-level routing between pages
public/
└── images/                      # All figures and study screenshots
```

## Self-Contained

The application has no external API calls, no environment variables, and no database connections. All data is bundled in `src/data/`. Copying the folder to any machine and running `npm install && npm run dev` is sufficient to run it.
