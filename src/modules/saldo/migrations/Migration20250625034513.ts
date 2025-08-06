import { Migration } from '@mikro-orm/migrations';

export class Migration20250625034513 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "saldo_allbank" ("id" text not null, "nama_bank" text not null, "no_rek" integer not null, "atas_nama" text not null, "keterangan" text null, "allowed_see" boolean null, "currency_code" text check ("currency_code" in ('Rp', '\$')) null, "amount_saldo" integer not null, "updated_saldo_at" timestamptz not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "saldo_allbank_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_allbank_deleted_at" ON "saldo_allbank" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "saldo_allrekening" ("id" text not null, "nama_bank" text not null, "no_rek" integer not null, "atas_nama" text not null, "keterangan" text null, "allowed_see" boolean null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "saldo_allrekening_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_allrekening_deleted_at" ON "saldo_allrekening" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "saldo_available" ("id" text not null, "amount" integer not null, "currency_code" text check ("currency_code" in ('Rp', '\$')) null, "created_note_at" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "saldo_available_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_available_deleted_at" ON "saldo_available" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "saldo_history" ("id" text not null, "currency_code" text check ("currency_code" in ('Rp', '\$')) null, "amount_saldo_id" text not null, "amount" integer not null, "updated_saldo_at" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "saldo_history_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_amount_saldo_id" ON "saldo_history" (amount_saldo_id) WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_deleted_at" ON "saldo_history" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "saldo_tersedia" ("id" text not null, "nama_bank" text not null, "no_rek" integer not null, "atas_nama" text not null, "keterangan" text null, "allowed_see" boolean null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "saldo_tersedia_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_tersedia_deleted_at" ON "saldo_tersedia" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "saldo_history_tersedia" ("id" text not null, "currency_code" text check ("currency_code" in ('Rp', '\$')) null, "amount_saldo_id" text not null, "amount" integer not null, "updated_saldo_at" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "saldo_history_tersedia_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_tersedia_amount_saldo_id" ON "saldo_history_tersedia" (amount_saldo_id) WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_tersedia_deleted_at" ON "saldo_history_tersedia" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`alter table if exists "saldo_history" add constraint "saldo_history_amount_saldo_id_foreign" foreign key ("amount_saldo_id") references "saldo_allrekening" ("id") on update cascade on delete cascade;`);

    this.addSql(`alter table if exists "saldo_history_tersedia" add constraint "saldo_history_tersedia_amount_saldo_id_foreign" foreign key ("amount_saldo_id") references "saldo_tersedia" ("id") on update cascade on delete cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "saldo_history" drop constraint if exists "saldo_history_amount_saldo_id_foreign";`);

    this.addSql(`alter table if exists "saldo_history_tersedia" drop constraint if exists "saldo_history_tersedia_amount_saldo_id_foreign";`);

    this.addSql(`drop table if exists "saldo_allbank" cascade;`);

    this.addSql(`drop table if exists "saldo_allrekening" cascade;`);

    this.addSql(`drop table if exists "saldo_available" cascade;`);

    this.addSql(`drop table if exists "saldo_history" cascade;`);

    this.addSql(`drop table if exists "saldo_tersedia" cascade;`);

    this.addSql(`drop table if exists "saldo_history_tersedia" cascade;`);
  }

}
