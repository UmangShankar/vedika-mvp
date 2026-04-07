# Vedika (MVP scaffold)

This repository contains the initial scaffold for **Vedika**, a content-first Sanatan Dharma research platform.

## Stack
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- Sanity schema definitions (content model)

## Local setup
1. Install Node.js 20+ and npm 10+.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
4. Run lint:
   ```bash
   npm run lint
   ```
5. Build for production:
   ```bash
   npm run build
   ```

## Environment variables
Create `.env.local` as needed for runtime integrations:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `OPENAI_API_KEY`

> Keep `.env.local` out of version control.

## Sanity schema location
Schema definitions are located at:
- `sanity/schemaTypes/index.ts`
- `sanity/schemaTypes/documents/*`
- `sanity/schemaTypes/objects/*`

Import `schemaTypes` from `sanity/schemaTypes/index.ts` in your Sanity Studio config.

## Handoff checklist (for GitHub)
Ensure these are present in the repo before pushing:
- `app/`
- `components/`
- `lib/`
- `sanity/`
- `package.json`
- `next.config.mjs`
- `tsconfig.json`
- `tailwind.config.ts`
- `postcss.config.js`
- `.eslintrc.json`
- `.gitignore`
- `next-env.d.ts`
- `README.md`
