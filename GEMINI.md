# Project Overview

This is the backend for an Internal Finance App, built using the Medusa.js e-commerce framework. It appears to be heavily customized to handle digital products and has a role-based user system.

**Core Technologies:**

*   **Framework:** Medusa.js
*   **Language:** TypeScript
*   **Database:** PostgreSQL (using Mikro-orm)
*   **Runtime:** Node.js

**Architecture:**

The application is structured as a series of custom Medusa.js modules. Key modules include:

*   `digital-product`: Manages digital products, their media, and orders.
*   `member`, `role`, `user`, `staff`, `manager`: A comprehensive user management system with different roles.
*   `saldo`, `cashflow`: Modules for handling financial aspects.
*   `blog`: A module for blog functionality.
*   `payment-direct-midtrans`: A custom payment provider for Midtrans.

# Building and Running

**Development:**

To run the application in development mode, use the following command:

```bash
npm run dev
```

**Building:**

To build the application for production, use the following command:

```bash
npm run build
```

**Starting:**

To start the application in production, use the following command:

```bash
npm run start
```

**Testing:**

The project includes scripts for running different types of tests:

*   **Integration (HTTP):** `npm run test:integration:http`
*   **Integration (Modules):** `npm run test:integration:modules`
*   **Unit:** `npm run test:unit`

# Development Conventions

*   The project follows the standard Medusa.js project structure.
*   Business logic is encapsulated within custom Medusa.js modules.
*   The project uses Mikro-orm for database object-relational mapping.
*   Environment variables are used for configuration (see `.env.template`).
