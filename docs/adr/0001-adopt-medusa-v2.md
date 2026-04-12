# ADR 0001: Adopt Medusa.js v2 as the Core Framework

**Date:** 2026-04-12
**Status:** Accepted

## Context
The "Internal Finance App" requires a highly flexible, extensible, and scalable backend to manage complex business logic. The system needs to handle digital product catalogs, granular role-based user access (members, staff, managers), complex financial transactions (cashflow, saldo/balance), and custom payment integrations (like direct Midtrans).

We require a framework that provides strong foundational features (such as user management and order processing) but can be heavily customized to support our internal, non-traditional e-commerce use cases.

## Decision
We will adopt **Medusa.js v2** (https://docs.medusajs.com/) as the core foundational framework for the backend application. 

Based on the version 2 documentation, Medusa offers a framework uniquely designed for deep customization and extensibility. Key architectural concepts we will leverage include:

*   **Custom Modules:** We will encapsulate specific business logic within custom Medusa modules (e.g., `digital-product`, `cashflow`, `saldo`, `role`).
*   **Data Models:** We will utilize Medusa v2's ability to seamlessly add and link custom data models to extend the core data structure to fit our financial and role management needs using Mikro-ORM.
*   **Workflows:** We will use the Medusa Workflows engine to reliably automate multi-step business processes and complex system integrations.
*   **API Routes:** Custom functionality will be exposed via custom API routes within the framework.
*   **Event Subscriptions:** We will leverage Medusa's event-driven architecture to integrate subsystems (e.g., handling subscriptions or domain registrations asynchronously).

## Consequences

**Positive:**
*   **Accelerated Development:** We avoid building a complex system from scratch by utilizing Medusa's solid foundation (routing, database integration, authentication, events).
*   **High Extensibility:** The v2 architecture ensures that the framework will not become a bottleneck as our custom logic grows.
*   **Maintainability:** The modular structure enforces a clean separation of concerns, making the codebase easier to maintain.

**Negative:**
*   **Learning Curve:** The engineering team must understand Medusa v2 specific architectural patterns, notably its custom Workflows, API route structures, and Module system.
*   **ORM Coupling:** We are adopting the framework's standard ORM (Mikro-ORM), which all custom data models must adhere to.
