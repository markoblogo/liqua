# Liqua Landing

Minimalist, monochrome landing page for **Liqua** built with Next.js App Router, TypeScript, and Tailwind CSS.

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

No custom server or special Vercel config is required.

## Asset and Link Placeholders

Edit `lib/constants.ts`:

- `YOUTUBE_VIDEO_ID`
- `GOOGLE_SLIDES_EMBED_URL`
- `PDF_URL`
- `CONTACT_EMAIL`
- `HERO_IMAGES`

## Key Assets

- Logo: `public/liqua-logo.png`
- Optional white logo: `public/liqua-logo-white.png`
- Deck PDF: `public/deck/liqua-pitch-deck.pdf`
- Hero images: `public/hero/`
