I have the module’s existing migration history. I’m adding a new migration with a later timestamp so Medusa runs it after the
  current saldo migrations.

• Added src\modules\saldo\migrations\Migration20260902142239.ts (+15 -0)
     1 +import { Migration } from "@mikro-orm/migrations"
     2 +
     3 +export class Migration20260902142239 extends Migration {
     4 +  override async up(): Promise<void> {
     5 +    this.addSql(
     6 +      `alter table if exists "saldo_allbank" alter column "no_rek" type text using "no_rek"::text;`
     7 +    )
     8 +  }
     9 +
    10 +  override async down(): Promise<void> {
    11 +    this.addSql(
    12 +      `alter table if exists "saldo_allbank" alter column "no_rek" type integer using "no_rek"::integer;`
    13 +    )
    14 +  }
    15 +}




    import { Migration } from "@mikro-orm/migrations"

export class Migration20260902142239 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table if exists "saldo_allbank" alter column "no_rek" type text using "no_rek"::text;`
    )
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table if exists "saldo_allbank" alter column "no_rek" type integer using "no_rek"::integer;`
    )
  }
}


───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────

• Created the migration at /C:/Users/Windows/Documents/NOTES POSTA/stt-nurulfikri/nf-internal-finance-be/src/modules/saldo/
  migrations/Migration20260902142239.ts.

  It changes:

  - saldo_allbank.no_rek from integer to text in up()
  - text back to integer in down()

  Run it with:

  npx medusa db:migrate --execute-safe-links

  Or, if you’re using the backend-only Docker compose file:

  docker compose -f docker-compose-only-be.yml exec medusa npx medusa db:migrate --execute-safe-links

  One caution:

  - If the table already has values that are not numeric, the down() migration will fail when converting back to integer.
  - If your DB is still empty, this migration is safe.

  If you want, I can also add a matching migration for saldo_allrekening.no_rek if that column should change too.