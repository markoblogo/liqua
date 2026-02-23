# Liqua Landing

Premium monochrome landing page for **Liqua** built with Next.js App Router, TypeScript, and Tailwind CSS.

## Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Frontend-only contact form (no backend, no DB)

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production Commands

```bash
npm run lint
npm run build
npm start
```

## Vercel Deployment (GitHub Integration)

1. Push this repository to GitHub.
2. In Vercel, click **Add New Project**.
3. Import `markoblogo/liqua`.
4. Keep default settings:
   - Framework preset: **Next.js**
   - Build command: `npm run build`
   - Install command: `npm install`
   - Output: auto-detected
5. Deploy.

No custom server or extra Vercel config is required.

## Configurable Constants

Edit `lib/constants.ts`:

- `YOUTUBE_VIDEO_ID`
- `GOOGLE_SLIDES_EMBED_URL`
- `PDF_URL`
- `CONTACT_EMAIL`
- `HERO_IMAGES`

## Theme and ASCII Controls

- Two controls in header:
  - circular `moon/sun` toggle for **light/dark**
  - `ASCII/Default` toggle for style mode
- In ASCII mode, light/dark tone is preserved and switchable.
- State is persisted in `localStorage` under `liqua_display_mode`.
- Root attributes:
  - `data-theme="light|dark"`
  - `data-style="default|ascii"`

## Assets

- Final logos (used in UI):
  - `public/logo/liqua-black.svg`
  - `public/logo/liqua-white.svg`
- Deck PDF:
  - `public/deck/liqua-pitch-deck.pdf`
- Hero slideshow images:
  - `public/hero/Lhero1.svg`
  - `public/hero/Lhero2.svg`
  - `public/hero/Lhero3.svg`
  - `public/hero/Lhero4.svg`
  - `public/hero/Lhero5.svg`
  - `public/hero/Lhero6.svg`
