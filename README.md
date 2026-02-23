# Liqua Landing

Investor/partner-facing landing for **Liqua** (liquidity + execution layer for physical commodity trading).

Built with Next.js App Router, TypeScript, Tailwind CSS, and a server-side Request Access form via Resend.

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS
- Resend (API route email delivery)

## Run Locally

```bash
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Build & Quality

```bash
npm run lint
npm run build
npm start
```

## Environment Variables

Copy `.env.example` to `.env.local` and fill values:

- `RESEND_API_KEY` (required for form delivery)
- `CONTACT_TO_EMAIL` (optional; default is `a.biletskiy@gmail.com`)

## Request Access Flow

- Frontend form submits to `POST /api/request-access`
- Route handler: `app/api/request-access/route.ts`
- Email provider: Resend
- Subject: `Liqua — Request Access`
- Includes: name, company, email, role, message, timestamp, source
- Spam guard: honeypot field + submit timing validation

## Config You Can Edit

In `lib/constants.ts`:

- `YOUTUBE_VIDEO_ID`
- `GOOGLE_SLIDES_EMBED_URL`
- `PDF_URL`
- `HERO_IMAGES`
- Partner strip links (`PARTNERS`)
- Footer credit links (`ABVX_URL`, `ASCII_THEME_URL`)

## Theme Modes

Header has 2 controls:

- Theme: `light/dark` (moon/sun button)
- Style: `ASCII/Default`

State is persisted in `localStorage` under `liqua_display_mode`.

Root attributes:

- `data-theme="light|dark"`
- `data-style="default|ascii"`

## Key Routes

- `/` landing page
- `/privacy`
- `/terms`
- `/api/request-access`

## Assets

- Logos: `public/logo/liqua-black.svg`, `public/logo/liqua-white.svg`
- Deck PDF: `public/deck/liqua-pitch-deck.pdf`
- Hero visuals: `public/hero/Lhero1.svg` ... `public/hero/Lhero6.svg`

## Deploy to Vercel

1. Push to GitHub (`markoblogo/liqua`).
2. Import repo in Vercel.
3. Keep default Next.js settings.
4. Set env vars in Vercel Project Settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL` (optional)
5. Deploy.
