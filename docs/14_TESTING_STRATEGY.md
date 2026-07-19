# Testing Strategy

## Tools

- Vitest
- Testing Library
- Playwright
- database integration tests

## Required scenarios

1. Anonymous user opens the builder.
2. Anonymous user attempts to save.
3. Registered user saves a draft.
4. Incomplete composition cannot publish.
5. Complete composition publishes.
6. Item is assigned through drag and drop.
7. Item is assigned through mobile tap flow.
8. Refresh preserves saved draft.
9. User cannot modify another user's composition.
10. New patch changes an item.
11. Affected composition becomes NEEDS_UPDATE.
12. Author creates a new patch version.
13. Duplicate votes are prevented.
14. Moderator processes a report.
15. Historical composition displays historical item data.

## Completion gate

A milestone is not complete until:

- lint passes;
- type-check passes;
- relevant unit and integration tests pass;
- relevant Playwright tests pass;
- production build passes.
