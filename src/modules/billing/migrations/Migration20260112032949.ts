import { Migration } from '@mikro-orm/migrations';

export class Migration20260112032949 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "company" ("id" text not null, "user_id" text not null, "company_name" text not null, "company_logo" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "company_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_company_deleted_at" ON "company" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "company" cascade;`);
  }

}
