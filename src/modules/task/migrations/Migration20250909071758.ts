import { Migration } from '@mikro-orm/migrations';

export class Migration20250909071758 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "task" ("id" text not null, "title" text not null, "description" text not null, "report" text not null, "status_id" text not null, "creator_id" text not null, "assignee_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "task_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_task_deleted_at" ON "task" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "task" cascade;`);
  }

}
