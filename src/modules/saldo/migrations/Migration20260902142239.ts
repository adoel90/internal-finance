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
