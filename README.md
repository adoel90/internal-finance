# Internal Finance App (STT NURUL FIKRI)


## Running with Docker (Database, Redis, Backend-app all in)
- docker run build (Make sure file .env is not empty)
- docker compose up
- docker compose ps



## Running Local (Backend)
Before running npm run dev for this Medusa.js v2 backend project, follow these checklist steps:
  ──────
  #### 1. Install Dependencies

  If you haven't installed node_modules yet:

    npm install --force (type --force optionaly)

  (Note: Ensure Node.js version is >=20 as defined in package.json:60)
  ──────
  #### 2. Configure Environment Variables (.env)

  Create a .env file in the root folder based on .env.template.

    cp .env.template .env

  Ensure your .env file has valid values for PostgreSQL and Redis:

  • DATABASE_URL: Update the connection string to match your local PostgreSQL credentials (e.g.,
  postgres://username:password@localhost:5432/financev1).
  • DB_NAME: Set your target database name (e.g., financev1).
  • REDIS_URL: redis://localhost:6379 (Ensure Redis is running if tested under production mode).
  • Secrets: Provide JWT, Cookie, and API key secrets if applicable.
  ──────
  #### 3. Make Sure PostgreSQL & Redis are Running

  • PostgreSQL: Ensure the database specified in DATABASE_URL is created in PostgreSQL.
  • Redis: Required if you run in production or use Redis event-bus/cache features.
  ──────
  #### 4. Run Database Migrations & Seed Data

  If setting up a fresh database, run migrations and seeding before launching dev mode:

    # Run database migrations
    npx medusa db:migrate

    # Seed database (if applicable)
    npm run seed
  ──────
  #### 5. Start Development Server

  Once the environment and database are ready:

    npm run dev


## Create Admin-credential for the first time 
  You have two options to get admin credentials to log in:
  ──────
  #### Option 1: Create a New Admin User via Medusa CLI (Recommended & Fastest)

  Run the Medusa CLI user creation command directly in your project folder:

    npx medusa user --email amalianabila@gmail.com --password DONOTBEANG

  (You can replace admin@example.com and supersecret with your desired email and password).

  Once created, you can immediately log in at http://localhost:9000/app using:

  • Email: admin@example.com
  • Password: supersecret
  ──────
  #### Option 2: Run via Docker Container (If running in Docker)

  If your Medusa server is running inside a Docker container (nf_finance_medusa):

    docker exec -it nf_finance_medusa npx medusa user --email admin@example.com --password supersecret