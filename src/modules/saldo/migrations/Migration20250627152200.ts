import { Migration } from '@mikro-orm/migrations';

export class Migration20250627152200 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "saldo_history_tersedia" drop constraint if exists "saldo_history_tersedia_amount_saldo_id_foreign";`);

    this.addSql(`drop index if exists "IDX_saldo_history_tersedia_amount_saldo_id";`);

    this.addSql(`alter table if exists "saldo_history_tersedia" rename column "amount_saldo_id" to "amount_saldo_history_tersedia_id";`);
    this.addSql(`alter table if exists "saldo_history_tersedia" add constraint "saldo_history_tersedia_amount_saldo_history_tersedia_id_foreign" foreign key ("amount_saldo_history_tersedia_id") references "saldo_tersedia" ("id") on update cascade on delete cascade;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_tersedia_amount_saldo_history_tersedia_id" ON "saldo_history_tersedia" (amount_saldo_history_tersedia_id) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "saldo_history_tersedia" drop constraint if exists "saldo_history_tersedia_amount_saldo_history_tersedia_id_foreign";`);

    this.addSql(`drop index if exists "IDX_saldo_history_tersedia_amount_saldo_history_tersedia_id";`);

    this.addSql(`alter table if exists "saldo_history_tersedia" rename column "amount_saldo_history_tersedia_id" to "amount_saldo_id";`);
    this.addSql(`alter table if exists "saldo_history_tersedia" add constraint "saldo_history_tersedia_amount_saldo_id_foreign" foreign key ("amount_saldo_id") references "saldo_tersedia" ("id") on update cascade on delete cascade;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_tersedia_amount_saldo_id" ON "saldo_history_tersedia" (amount_saldo_id) WHERE deleted_at IS NULL;`);
  }

}
