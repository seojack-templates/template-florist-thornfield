# AGENTS.md — template-florist-thornfield

> A standalone SEOJack marketing-site template for a fictional Edinburgh florist (seasonal arrangements and event flowers). Part of the NEO-1 workspace (see root ../../../AGENTS.md).

## What it is
A lean, self-contained Next.js 16 website template — one of the SEOJack `template-*` demo sites. It renders a single-page florist landing site (hero, collections, events, story, testimonials, enquiry, FAQ, local areas) from typed content in `app/data.ts`. It is deployed to its own Vercel project/domain, indexed for organic discovery, and embedded as an iframe in the seojack.net `/demo/[id]` viewer. It also serves as a "builder seed" that other tooling can clone.

## Stack
- Next.js 16 (App Router) + React 19, TypeScript 5.7
- Scoped CSS via a single CSS string literal in `app/styles.ts` — no Tailwind, Convex, or Clerk
- `lucide-react` for icons
- Node types via `@types/node` 22; Vercel as deploy target

## Structure
- `app/layout.tsx` — SEO metadata, canonical, OG/Twitter, JSON-LD, theme color
- `app/page.tsx` — renders `<DemoBody />`
- `app/DemoBody.tsx` — `'use client'`; font link + scoped CSS inject + sections
- `app/styles.ts` — one scoped CSS literal (selectors prefixed `.florist-thornfield-demo`)
- `app/data.ts` — typed, realistic site content
- `app/primitives.tsx` — shared motion primitives (Reveal, Headline, Magnetic, Marquee)
- `app/sections/*` — page sections (Hero, Collections, Events, Story, Testimonials, Enquiry, Faq, etc.)
- `app/SeojackCredit.tsx` — footer credit / inbound link (stripped when used as a builder seed)
- `app/sitemap.ts`, `app/robots.ts` — indexable for organic discovery

## Commands
Package manager: npm (has `package-lock.json`).
- Install: `npm install`
- Dev: `npm run dev` (http://localhost:3000)
- Build: `npm run build`
- Start (prod): `npm run start`
- Lint: `npm run lint`
No test script is defined.

## Conventions & notes
- Live URL: https://florist-thornfield.templates.seojack.website
- Registry id: `tpl_florist_thornfield`; showcased at https://seojack.net/templates/tpl_florist_thornfield
- All CSS selectors are prefixed `.florist-thornfield-demo` to keep styles scoped to this template.
- Do NOT set `X-Frame-Options: DENY` or `frame-ancestors 'none'` (see `next.config.ts`) — this template is embedded in an iframe on the seojack.net demo viewer.
- `next.config.ts` allows remote images only from `cdn.seojack.website`.
- The `SeojackCredit` footer link is intentionally stripped when this repo is used as a builder seed.
- Each template has its own GitHub repo + Vercel project; see `docs/templates-github-org.md` for the org setup.

## Provenance
Clone of https://github.com/seojack-templates/template-florist-thornfield.git. Default branch `main`.
