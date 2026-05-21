# DotEcon Online — Platform

> Education and tools that empower any developer to build production-grade software with excellence — using AI as a force multiplier, not a shortcut.

## Tech stack

| Layer | Choice | Rationale |
|---|---|---|
| Framework | Next.js 15 (App Router) + TypeScript | Industry standard, SSR+SSG, models the patterns we teach |
| Database | PostgreSQL on Neon + Prisma | Serverless Postgres, no infra to manage, type-safe ORM |
| Auth | Clerk | Auth-as-a-service; magic link + OAuth; migrate to NextAuth if cost becomes a concern |
| Hosting | Vercel | Native Next.js, preview deployments on every PR |
| CI | GitHub Actions | Quality gates (lint, type-check, test) owned independently of Vercel |
| Styling | Tailwind CSS + shadcn/ui | Fast iteration, no lock-in |
| Repo | Monorepo (pnpm workspaces) | Shared types and configs, single CI pipeline |

## Repo layout

```
dotecon-platform/
├── apps/
│   └── web/                    # Next.js application
│       ├── src/
│       │   ├── app/            # App Router pages and layouts
│       │   ├── components/     # App-specific React components
│       │   ├── lib/            # Utility functions
│       │   └── middleware.ts   # Clerk auth middleware
│       └── .env.example        # Required environment variables
├── packages/
│   ├── db/                     # Prisma schema + singleton client
│   │   └── prisma/schema.prisma
│   ├── ui/                     # Shared React component library
│   └── config/                 # Shared ESLint, TypeScript, Tailwind configs
└── .github/
    └── workflows/
        ├── ci.yml              # Lint + type-check + test + build on every push/PR
        └── deploy.yml          # Deploy to Vercel on push to main
```

## Local setup (under 15 minutes)

### Prerequisites

- [Node.js](https://nodejs.org) ≥ 20
- [pnpm](https://pnpm.io) ≥ 10 — `npm install -g pnpm`
- [Git](https://git-scm.com)

### 1. Clone and install

```bash
git clone https://github.com/raphdom/dotecon-platform.git
cd dotecon-platform
pnpm install
```

### 2. Set up environment variables

```bash
cp apps/web/.env.example apps/web/.env.local
```

Fill in the values:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | [Clerk Dashboard](https://dashboard.clerk.com) → your app → API keys |
| `CLERK_SECRET_KEY` | Same location |
| `DATABASE_URL` | [Neon Console](https://console.neon.tech) → your project → Connection string (pooled) |
| `DIRECT_URL` | Same project → Connection string (direct) |

### 3. Set up the database

```bash
pnpm db:generate     # Generate Prisma client
pnpm db:push         # Push schema to Neon (dev only; use db:migrate for prod)
```

### 4. Run the app

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## CI/CD

| Trigger | What runs |
|---|---|
| Push or PR to `main` | `ci.yml` — lint, type-check, tests, build |
| Push to `main` | `deploy.yml` — deploy to Vercel production |
| PR opened/updated | Vercel creates a preview deployment automatically |

### Required GitHub secrets

| Secret | Purpose |
|---|---|
| `VERCEL_TOKEN` | Vercel deploy token — get from Vercel account settings |

### Required Vercel environment variables

Add these in the Vercel project settings under "Environment Variables":

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `CLERK_SECRET_KEY`
- `DATABASE_URL`
- `DIRECT_URL`

---

## Development commands

```bash
pnpm dev           # Run the web app in development mode
pnpm build         # Build all apps
pnpm lint          # Lint all packages
pnpm type-check    # TypeScript type-check all packages
pnpm test          # Run all tests
pnpm db:studio     # Open Prisma Studio (visual DB browser)
pnpm db:migrate    # Create and apply a new migration
```

## Adding UI components (shadcn/ui)

```bash
cd apps/web
npx shadcn@latest add button
```

Copy the generated component into `packages/ui/src/` if it should be shared across apps.
