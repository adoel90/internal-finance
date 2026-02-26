import { Migration } from '@mikro-orm/migrations';

export class Migration20260213034153 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "payment_proof" ("id" text not null, "cart_id" text null, "file_key" text not null, "file_url" text null, "uploaded_by" text null, "status" text check ("status" in ('pending', 'verified', 'rejected')) not null default 'pending', "note" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payment_proof_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payment_proof_deleted_at" ON "payment_proof" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "payment_proof" cascade;`);
  }

}
