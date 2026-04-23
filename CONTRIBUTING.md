# Contributing

## Development workflow

1. Create a short-lived branch.
2. Implement changes with tests.
3. Run local checks before opening PR:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Pull request checklist

- Keep PR scope focused.
- Add or update tests for behavior changes.
- Update docs (`README`, `docs/architecture.md`) when needed.
