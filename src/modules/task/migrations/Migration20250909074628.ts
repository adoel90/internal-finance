import { Migration } from '@mikro-orm/migrations';

export class Migration20250909074628 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "status" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "status_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_status_deleted_at" ON "status" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "status" cascade;`);
  }

}
