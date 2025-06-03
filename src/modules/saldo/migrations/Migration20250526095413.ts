import { Migration } from '@mikro-orm/migrations';

export class Migration20250526095413 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "saldo_available" ("id" text not null, "amount" integer not null, "currency_code" text check ("currency_code" in ('Rp', '\$')) null, "created_note_at" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "saldo_available_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_available_deleted_at" ON "saldo_available" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "saldo_available" cascade;`);
  }

}
