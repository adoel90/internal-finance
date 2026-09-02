 I’m adjusting the flow for an app container that connects to external Postgres and Redis. The key point is that the Dockerfile
  usually does not “point” to those services; the runtime environment does.

• Use the container for the backend only, and point it to external services through environment variables.

  The Dockerfile itself does not need changes for Postgres or Redis. Set those in .env or in your docker run / Compose env.

  ## Docker-only setup with external Postgres and Redis

  1. Set your .env to external hosts

  DATABASE_URL=postgres://USER:PASSWORD@YOUR_POSTGRES_HOST:5432/YOUR_DB
  REDIS_URL=redis://YOUR_REDIS_HOST:6379

  If the database/Redis are on your Windows host and the app runs inside Docker, use host.docker.internal instead of localhost.

  2. Build the backend image

  docker build -t nf-finance-be .

  3. Run the backend container

  docker run -d --name nf_finance_medusa \
    --env-file .env \
    -p 9000:9000 \
    nf-finance-be

  4. Run migrations inside the container

  docker exec -it nf_finance_medusa npx medusa db:migrate --execute-safe-links

  5. Seed data if needed

  docker exec -it nf_finance_medusa npm run seed

  6. Create the first admin user if needed

  docker exec -it nf_finance_medusa npx medusa user --email admin@example.com --password supersecret

  ## If you still want Compose

  You can use Compose for only the app container and remove the postgres and redis services, or keep them only for local
  development. For external services, the important part is that DATABASE_URL and REDIS_URL do not use postgres or redis as
  container names.

  ## Important note

  - localhost inside a container means the container itself, not your host machine.
  - For host-installed Postgres/Redis on Windows, host.docker.internal is usually the correct hostname from inside Docker.

  If you want, I can draft a minimal docker-compose.yml for the app-only container that connects to external Postgres and Redis.