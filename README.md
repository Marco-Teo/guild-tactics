# Guild Tactics

Guild Tactics is a mobile-first community companion for GuildRun. The repository currently implements **Milestone 1 — Foundations**: a Next.js application shell, reusable UI primitives, PostgreSQL with Prisma, local containers and the test/build toolchain.

All game-related demo content is explicitly labelled `PLACEHOLDER` and is not official GuildRun data.

## Binding specification

Read `PROJECT_RULES.md`, every file in `.codex`, and every file in `docs` before changing the application. Those documents are authoritative.

## Current data policy

Until an official GuildRun API or explicit asset permission exists:

- use manual, CSV or JSON imports;
- keep source and verification metadata;
- use clearly marked placeholders;
- do not claim community data is official.

## Requirements

- Node.js 20.9 or newer;
- npm 10 or newer;
- Docker Desktop (recommended for local PostgreSQL).

## Local setup

```bash
npm ci
cp .env.example .env
docker compose up -d db
npm run db:migrate:deploy
npm run db:seed
npm run dev
```

On PowerShell, replace `cp` with `Copy-Item`. The application is available at `http://localhost:3000`.

To run both the application and PostgreSQL in containers:

```bash
docker compose up --build
```

The app service waits for the database health check and applies committed migrations before starting Next.js.

## Quality commands

```bash
npm run lint
npm run type-check
npm test
npm run test:e2e
npm run build
npm run format:check
```

Install Playwright browsers once with `npx playwright install chromium`.

## Database workflow

- `npm run db:generate` regenerates Prisma Client.
- `npm run db:migrate` creates and applies a development migration.
- `npm run db:migrate:deploy` applies committed migrations in CI/production.
- `npm run db:seed` inserts idempotent, clearly labelled placeholder data.

Every schema change must include a migration, seed review and tests. Production deployments should use managed PostgreSQL, run `db:migrate:deploy` before application rollout and maintain scheduled, tested backups. Restore procedures depend on the selected provider and must be tested outside production.

## Environment variables

| Variable              | Purpose                                                           | Visibility   |
| --------------------- | ----------------------------------------------------------------- | ------------ |
| `DATABASE_URL`        | PostgreSQL connection string used by server-side tooling and code | Server only  |
| `NEXT_PUBLIC_APP_URL` | Public canonical application origin                               | Browser-safe |

Never commit `.env` files or production secrets. `.env.example` contains development-only values.

## Milestone 1 scope

Included: responsive application layout, accessible UI primitives, placeholder policy notice, environment validation, Prisma migration/seed, Docker Compose, linting, formatting, strict type-checking, unit/component tests and a homepage E2E test.

Authentication, official/editorial game data, composition browsing and the interactive builder intentionally begin in later milestones.
