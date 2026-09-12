# Estates Trust : demo site

Pitch demo built by [Manuel Technologies](https://manueltechnologies.com) for Estates Trust.

**Stack:** Next.js 16 (App Router) · React 19 · Tailwind v4 · Motion · Lucide.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes are static)
```

## Where things live

- `src/data/properties.ts` : listings (placeholder data; swap for the client's real inventory or a CMS)
- `src/data/content.ts` : stats, testimonials, team, process steps, regions, FAQs
- `src/lib/utils.ts` : phone / WhatsApp numbers used everywhere
- `src/lib/currency.tsx` : GHS/USD/GBP/EUR toggle + indicative rates
- `src/lib/image-loader.ts` : Unsplash CDN loader for placeholder imagery; remove once real photos are in `/public`

## Pages

`/` · `/properties` (filters) · `/properties/[slug]` · `/sell` (multi-step) · `/invest` (ROI estimator) · `/about` · `/contact`

All forms hand off to WhatsApp with a pre-filled message. Wire to email/CRM in Phase 2.
