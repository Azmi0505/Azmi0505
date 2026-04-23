# Architecture Notes

## Current baseline

- Runtime: Node.js + Express
- Language: TypeScript (strict mode)
- Validation: ESLint + TypeScript typecheck + Vitest
- CI: GitHub Actions matrix for Node 20 and 22

## Layers

- `src/app.ts`: app composition and route registration
- `src/server.ts`: process/bootstrap entrypoint
- `tests/`: endpoint and module-level tests

## Next recommended additions

- Centralized config loader (env parsing and validation)
- Error handling middleware and request logging
- Route versioning and module boundaries (`src/modules/*`)
