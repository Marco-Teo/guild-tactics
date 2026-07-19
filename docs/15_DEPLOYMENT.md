# Deployment

## Local development

Docker Compose should provide:

- application;
- PostgreSQL;
- optional Redis;
- optional local S3-compatible storage.

## Repository requirements

- `.env.example`
- deterministic installation
- migration commands
- seed command
- lint, type-check, test and build scripts
- CI workflow
- deployment documentation
- backup and restore notes

## Production

Prefer:

- managed PostgreSQL;
- S3-compatible asset storage;
- CDN image delivery;
- error monitoring;
- scheduled backups;
- environment-specific secrets;
- migration runbook.

Do not deploy placeholder game assets as approved official assets.
