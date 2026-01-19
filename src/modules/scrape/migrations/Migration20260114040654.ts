import { Migration } from '@mikro-orm/migrations';

export class Migration20260114040654 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "profession" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "profession_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_profession_deleted_at" ON "profession" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "profession" cascade;`);
  }

}
