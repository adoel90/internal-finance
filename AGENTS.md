# Repository Guidelines

## Project Structure & Module Organization
This is a Medusa v2 backend. Primary source code lives in `src/`:
- `src/api/` for HTTP routes and middleware
- `src/modules/` for domain modules, services, models, migrations, and tests
- `src/workflows/` for business workflows and workflow steps
- `src/subscribers/` for event handlers
- `src/admin/` for custom admin UI code
- `src/scripts/` for seed and utility scripts

Supporting files live at the repo root: `medusa-config.ts`, `jest.config.js`, `tsconfig.json`, and `docker-compose.yml`. Integration tests live in `integration-tests/`, and static fixtures or reference data live in `static-data/`.

## Build, Test, and Development Commands
- `npm run dev`: start the Medusa development server.
- `npm run build`: compile the backend for production.
- `npm start`: run the built server.
- `npm run seed`: seed the database with `src/scripts/seed.ts`.
- `npm run dev:email`: run the email preview/dev server for `src/modules/resend/emails`.
- `npm run test:unit`: run unit tests.
- `npm run test:integration:http`: run HTTP integration tests in `integration-tests/http/`.
- `npm run test:integration:modules`: run module integration tests.

## Coding Style & Naming Conventions
Follow the existing TypeScript/Medusa style in adjacent files. Use descriptive folder names, kebab-case for route and module directories, and keep file names aligned with their feature, such as `create-digital-product/index.ts` or `handle-order-placed.ts`. Match the local formatting of the file you are editing; most code in this repo uses 2-space indentation and compact Medusa-style imports.

## Testing Guidelines
Jest is configured in `jest.config.js` with SWC transforms. Name tests by scope:
- `integration-tests/http/*.spec.ts` for HTTP integration coverage
- `src/modules/*/__tests__/**/*.unit.spec.ts` for unit tests
- `src/modules/*/__tests__/**/*.[jt]s` for module integration tests

Keep tests close to the behavior they verify and prefer explicit fixtures over implicit setup.

## Commit & Pull Request Guidelines
Recent commits use short, prefixed messages such as `fix:`, `feat:`, `chore:`, and `build:`. Keep commits in that style and make them focused. Pull requests should summarize the change, note any database or migration impact, and include screenshots or request examples when API or admin UI behavior changes.

## Configuration Notes
Copy `.env.template` to `.env` before running locally. This project expects PostgreSQL and, for some flows, Redis. Avoid committing secrets or generated build output under `.medusa/`.
