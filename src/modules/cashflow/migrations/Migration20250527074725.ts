import { Migration } from '@mikro-orm/migrations';

export class Migration20250527074725 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "penerimaan" ("id" text not null, "payment_method" text not null, "amount" integer not null, "currency_code" text check ("currency_code" in ('Rp', '\$')) null, "description" text null, "created_note_at" timestamptz not null, "amount_of_inflow_for" text check ("amount_of_inflow_for" in ('STT (Mahasiswa berbayar)', 'STT (Hibah beastudi)', 'STT (Mahasiswa baru)', 'NF Academy', 'OTHER (STT)', 'OTHER (NF Academy)')) null, "keterangan_tambahan" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "penerimaan_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_penerimaan_deleted_at" ON "penerimaan" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "pengeluaran" ("id" text not null, "payment_method" text not null, "amount" integer not null, "currency_code" text check ("currency_code" in ('Rp', '\$')) null, "description" text null, "created_note_at" timestamptz not null, "amount_of_outflow_for" text check ("amount_of_outflow_for" in ('STT (Penggajian & THR)', 'NF Academy (Penggajian & THR)', 'STT (Operasional)', 'NF Academy (Operasional)', 'STT (Pengembalian)', 'NF Academy (Pengembalian)', 'OTHER (STT)', 'OTHER (NF Academy)')) null, "keterangan_tambahan" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "pengeluaran_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_pengeluaran_deleted_at" ON "pengeluaran" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "pengeluaran_proyeksi_cashcall" ("id" text not null, "created_note_at" timestamptz not null, "amount_of_inflow_for" text check ("amount_of_inflow_for" in ('STT (Mahasiswa berbayar)', 'STT (Hibah beastudi)', 'STT (Mahasiswa baru)', 'NF Academy', 'OTHER (STT)', 'OTHER (NF Academy)')) null, "amount" integer not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "pengeluaran_proyeksi_cashcall_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_pengeluaran_proyeksi_cashcall_deleted_at" ON "pengeluaran_proyeksi_cashcall" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "penerimaan" cascade;`);

    this.addSql(`drop table if exists "pengeluaran" cascade;`);

    this.addSql(`drop table if exists "pengeluaran_proyeksi_cashcall" cascade;`);
  }

}
