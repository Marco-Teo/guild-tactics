# Guild Tactics — Project Rules

## Purpose

Guild Tactics is a mobile-first community platform for the autobattler GuildRun. It provides composition guides, a visual builder, item assignment, patch tracking, community publishing, profiles, collection tracking, tier lists and internal meta analytics.

## Non-negotiable rules

- TypeScript strict mode is mandatory.
- Do not use `any` unless documented and unavoidable.
- Validate all external and user input with Zod.
- Enforce authentication, authorization and ownership on the server.
- Never rely only on client-side validation.
- Prefer small, reusable components and domain-focused modules.
- Avoid duplicated business logic.
- Keep database access outside presentation components.
- Every schema change requires migration, seed updates and tests.
- Every new API or Server Action requires input validation, authorization, typed errors and tests.
- Use soft delete for user-generated content where moderation or recovery matters.
- Mobile-first and keyboard-accessible behavior are mandatory.
- Drag and drop must always have a tap/click alternative.
- Do not present placeholder or community data as official GuildRun data.
- Do not scrape third-party sites without permission.
- Game images must support lifecycle states: PLACEHOLDER, TEMPORARY, PERMISSION_PENDING, APPROVED, OFFICIAL_API.
- Store source and verification metadata for imported game data.
- Preserve historical versions of compositions, items, characters and relics.
- Do not expose secrets or private identifiers to the client.
- No milestone is complete until lint, type-check, tests and production build pass.

## Naming

- Product name: Guild Tactics.
- Repository and package names: `guild-tactics`.
- Database tables and code identifiers use English.
- User-facing copy must be localization-ready.
