# Joshua.Dev Portfolio

A premium, animated personal portfolio and lead-generation site for Abakah Joshua Blessed, a full-stack/backend/AI developer, showcasing his skills, projects, services, and pricing, with contact and website-order forms that submit to the shared API server.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — run the portfolio site (Vite dev server)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000), which backs the contact/order forms
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Portfolio frontend: React + Vite, **Chakra UI v3** (not Tailwind/shadcn) for all styling/components, Framer Motion for animation, react-hook-form + zod for forms, wouter for routing
- API: Express 5
- DB: PostgreSQL + Drizzle ORM (not used by the portfolio's forms — see Gotchas)
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/portfolio` — the portfolio site (all sections in `src/components/sections/*`, Chakra theme in `src/theme.ts`, providers in `src/components/Provider.tsx`, toast setup in `src/components/ui/toaster.tsx`)
- `artifacts/api-server/src/routes/leads.ts` — the `POST /api/contact` and `POST /api/order` stub routes the portfolio's forms call
- `artifacts/mockup-sandbox` — canvas/mockup sandbox artifact, unrelated to this product

## Architecture decisions

- Chosen Chakra UI v3 (`createSystem`/`defaultConfig`, not `extendTheme`) over the scaffold's default Tailwind/shadcn setup, per explicit user preference.
- Chakra v3 has no `useToast` hook — toasts go through a `createToaster()` instance (`toaster.create({...})`) rendered via a `<Toaster />` component mounted once in `App.tsx`. The old shadcn `use-toast.ts`/`toast.tsx` files are unused leftovers from the scaffold.
- The contact and website-order forms are real forms with client-side validation, but there is no CRM/email logic behind them yet — see Gotchas.

## Product

- Single-page portfolio covering hero, about, skills, experience, 5 featured projects, live-websites showcase, open-source stats, backend-services offerings, services, "why choose me", testimonials, process, pricing, FAQ, blog placeholder, contact, and a "Let's Build Your Dream Website" order form, plus footer/socials, dark-mode-default theme toggle, and a custom 404 page.

## User preferences

- Use Chakra UI (not Tailwind/shadcn) for styling in the portfolio artifact.
- The site owner has their own backend/notification pipeline; the site should only call clearly documented API routes rather than the agent building full backend logic (email sending, CRM, etc.) for the forms.

## Gotchas

- `POST /api/contact` and `POST /api/order` (in `artifacts/api-server/src/routes/leads.ts`) currently only validate input, log it, and return `201` — they do **not** send email or persist anywhere. Wire in real notification/storage logic there before relying on the forms in production.
- When using `react-icons`, verify an icon name actually exists in the installed `react-icons` version before importing it (several `Si*` names referenced in early drafts, e.g. `SiAmazon`/`SiCss3`/`SiJava`/`SiOpenai`/`SiVisualstudiocode`, don't exist in this version — use `FaAws`/`FaCss3Alt`/`FaJava`/`RiOpenaiLine`/`VscVscode` instead).

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
