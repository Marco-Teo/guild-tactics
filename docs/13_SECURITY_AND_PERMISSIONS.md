# Security and Permissions

## Required controls

- secure sessions;
- strong password hashing when credentials are used;
- optional email verification;
- server-side RBAC;
- ownership checks;
- CSRF protection where relevant;
- Zod validation;
- HTML sanitization;
- upload MIME and size validation;
- rate limiting;
- soft delete;
- audit logging;
- spam prevention;
- secure secret handling.

## Ownership

Users can modify only their own compositions and profile data unless an explicit moderator or admin permission applies.

## Import safety

- JSON and CSV only;
- strict schema validation;
- no executable content;
- reject unknown dangerous fields;
- size and record limits;
- admin audit trail.

## Privacy

- collection data private by default;
- creator analytics should avoid unnecessary personal data;
- cookie preferences and privacy pages are required.
