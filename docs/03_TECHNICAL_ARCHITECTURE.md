# Technical Architecture

## Preferred stack

- Next.js App Router
- React
- TypeScript strict
- Tailwind CSS
- shadcn/ui or Radix primitives
- PostgreSQL
- Prisma ORM
- Auth.js
- Zod
- React Hook Form
- dnd-kit
- TipTap
- S3-compatible media storage
- Redis optional for cache and rate limiting
- Playwright, Vitest and Testing Library

## Architecture principles

- Server Components by default.
- Client Components only for interactive interfaces.
- Domain modules for compositions, game data, patches, community and accounts.
- Repository/service boundaries for non-trivial business logic.
- Shared Zod contracts for forms, imports and API inputs.
- Internal database remains the canonical application source.
- External data enters through adapters and normalization jobs.

## Suggested structure

```text
src/
  app/
  components/
  features/
    auth/
    compositions/
    builder/
    characters/
    items/
    relics/
    patches/
    community/
    collection/
    meta/
    admin/
  server/
    auth/
    db/
    services/
    repositories/
    permissions/
    jobs/
  lib/
  schemas/
  styles/
prisma/
tests/
public/
docs/
```

## Data flow

External source or manual import
→ validation
→ normalization
→ internal database
→ application services
→ pages and internal APIs
