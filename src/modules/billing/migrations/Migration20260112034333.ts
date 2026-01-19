import { Migration } from '@mikro-orm/migrations';

export class Migration20260112034333 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "api_usage" ("id" text not null, "user_id" text not null, "api_key_id" text not null, "api_name" text not null, "date" timestamptz not null, "request_count" integer not null default 0, "success_count" integer not null default 0, "failed_count" integer not null default 0, "plan_id" text null, "metadata" jsonb null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "api_usage_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_api_usage_api_key_id" ON "api_usage" (api_key_id) WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_api_usage_deleted_at" ON "api_usage" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "api_usage" cascade;`);
  }

}
