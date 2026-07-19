# API Specification

## General rules

Every mutation must include:

- Zod validation;
- authenticated user resolution where required;
- permission and ownership checks;
- typed domain errors;
- audit logging for sensitive administration;
- rate limiting where abuse is possible.

## Core endpoints or equivalent Server Actions

```text
GET    /api/search
GET    /api/compositions
POST   /api/compositions
GET    /api/compositions/:slug
PATCH  /api/compositions/:id
POST   /api/compositions/:id/publish
POST   /api/compositions/:id/versions
POST   /api/compositions/:id/duplicate

GET    /api/characters
GET    /api/characters/:slug
GET    /api/items
GET    /api/items/:slug
GET    /api/relics
GET    /api/relics/:slug
GET    /api/patches
GET    /api/patches/:slug

POST   /api/comments
POST   /api/votes
POST   /api/favorites
POST   /api/reports

GET    /api/profile/compositions
GET    /api/profile/collection
GET    /api/profile/notifications
GET    /api/profile/analytics

GET    /api/admin/reports
POST   /api/admin/imports
```

## Search

Global search spans:

- compositions;
- characters;
- items;
- relics;
- specializations;
- buffs and debuffs;
- patches;
- creators.

Search responses must include entity type, title, slug, image and concise metadata.
