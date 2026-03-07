import { Migration } from '@mikro-orm/migrations';

export class Migration20260306230524 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "domain" ("id" text not null, "name" text not null, "slug" text not null, "is_active" boolean not null default true, "is_premium" boolean not null default false, "metadata" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "domain_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_domain_deleted_at" ON "domain" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "domain" cascade;`);
  }

}
