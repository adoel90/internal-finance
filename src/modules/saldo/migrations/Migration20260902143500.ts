import { Migration } from "@mikro-orm/migrations"

export class Migration20260902143500 extends Migration {
  override async up(): Promise<void> {
    this.addSql(
      `alter table if exists "saldo_allrekening" alter column "no_rek" type text using "no_rek"::text;`
    )
  }

  override async down(): Promise<void> {
    this.addSql(
      `alter table if exists "saldo_allrekening" alter column "no_rek" type integer using "no_rek"::integer;`
    )
  }
}
  