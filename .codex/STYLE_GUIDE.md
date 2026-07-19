# Style Guide

## TypeScript

- strict mode;
- explicit domain types;
- discriminated unions for stateful results;
- no unchecked casts;
- no `any`.

## React

- Server Components by default;
- isolate interactive client islands;
- keep business logic out of JSX;
- reusable components over page-specific duplication.

## Naming

- English identifiers.
- PascalCase components.
- camelCase functions and variables.
- kebab-case route slugs.
- clear domain names over abbreviations.

## Errors

- typed domain errors;
- user-safe messages;
- log technical context server-side;
- never leak secrets or database details.

## UI

- mobile-first;
- accessible primitives;
- visible focus;
- loading, empty and error states;
- no hover-only critical action.
