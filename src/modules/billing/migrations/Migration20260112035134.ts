import { Migration } from '@mikro-orm/migrations';

export class Migration20260112035134 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "plan" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "plan_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_plan_deleted_at" ON "plan" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`create table if not exists "subscription" ("id" text not null, "organization_id" text not null, "plan_id" text not null, "current_period_start" timestamptz not null, "current_period_end" timestamptz not null, "started_at" timestamptz not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "subscription_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_subscription_plan_id" ON "subscription" (plan_id) WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_subscription_deleted_at" ON "subscription" (deleted_at) WHERE deleted_at IS NULL;`);

    this.addSql(`alter table if exists "subscription" add constraint "subscription_plan_id_foreign" foreign key ("plan_id") references "plan" ("id") on update cascade;`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "subscription" drop constraint if exists "subscription_plan_id_foreign";`);

    this.addSql(`drop table if exists "plan" cascade;`);

    this.addSql(`drop table if exists "subscription" cascade;`);
  }

}
