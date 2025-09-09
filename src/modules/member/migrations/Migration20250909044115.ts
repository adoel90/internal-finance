import { Migration } from '@mikro-orm/migrations';

export class Migration20250909044115 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "member" ("id" text not null, "name" text not null, "email" text not null, "role_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "member_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_member_deleted_at" ON "member" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "member" cascade;`);
  }

}
