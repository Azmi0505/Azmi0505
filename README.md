# Azmi0505 TypeScript Service Starter

Production-oriented Node.js + TypeScript starter with Express health endpoint, tests, linting, typechecking, and CI.

## Prerequisites

- Node.js 20+

## Setup

```bash
npm install
```

## Commands

```bash
npm run dev        # start dev server with watch mode
npm run lint       # run ESLint
npm run typecheck  # run TypeScript checker
npm test           # run Vitest suite
npm run build      # compile TypeScript to dist/
npm start          # run compiled server
```

## API

### `GET /health`

Returns:

```json
{ "status": "ok" }
```

## Structure

- `src/app.ts` Express app and routes
- `src/server.ts` runtime server entrypoint
- `tests/` integration/unit tests
- `.github/workflows/ci.yml` CI checks
- `docs/architecture.md` architecture notes
