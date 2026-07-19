# Patch System

## Patch pages

Each patch includes:

- version;
- title;
- date;
- summary;
- source;
- structured changes;
- affected characters, items, relics and specializations;
- expected meta impact;
- affected compositions.

## Change types

- BUFF
- NERF
- REWORK
- BUGFIX
- ADDED
- REMOVED
- TEXT_CHANGE
- UNKNOWN

## Impact workflow

1. Admin publishes a structured patch.
2. System identifies compositions using changed entities.
3. Affected current compositions become NEEDS_UPDATE.
4. Authors receive notifications.
5. Public pages show a patch-impact warning.
6. Authors create a new composition version.
7. Old versions remain accessible.

## External data

Initial approach:

- manual data entry;
- CSV/JSON import;
- Steam announcement detection where allowed;
- admin review before publication.

Future official APIs must synchronize into the internal database rather than directly powering the frontend.
