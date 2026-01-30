"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260112035134 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260112035134 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "plan" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "plan_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_plan_deleted_at" ON "plan" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`create table if not exists "subscription" ("id" text not null, "organization_id" text not null, "plan_id" text not null, "current_period_start" timestamptz not null, "current_period_end" timestamptz not null, "started_at" timestamptz not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "subscription_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_subscription_plan_id" ON "subscription" (plan_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_subscription_deleted_at" ON "subscription" (deleted_at) WHERE deleted_at IS NULL;`);
        this.addSql(`alter table if exists "subscription" add constraint "subscription_plan_id_foreign" foreign key ("plan_id") references "plan" ("id") on update cascade;`);
    }
    async down() {
        this.addSql(`alter table if exists "subscription" drop constraint if exists "subscription_plan_id_foreign";`);
        this.addSql(`drop table if exists "plan" cascade;`);
        this.addSql(`drop table if exists "subscription" cascade;`);
    }
}
exports.Migration20260112035134 = Migration20260112035134;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNjAxMTIwMzUxMzQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9iaWxsaW5nL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNjAxMTIwMzUxMzQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDJQQUEyUCxDQUFDLENBQUM7UUFDelEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO1FBRWpILElBQUksQ0FBQyxNQUFNLENBQUMsMGFBQTBhLENBQUMsQ0FBQztRQUN4YixJQUFJLENBQUMsTUFBTSxDQUFDLDZHQUE2RyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtSEFBbUgsQ0FBQyxDQUFDO1FBRWpJLElBQUksQ0FBQyxNQUFNLENBQUMsd0pBQXdKLENBQUMsQ0FBQztJQUN4SyxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxnR0FBZ0csQ0FBQyxDQUFDO1FBRTlHLElBQUksQ0FBQyxNQUFNLENBQUMsc0NBQXNDLENBQUMsQ0FBQztRQUVwRCxJQUFJLENBQUMsTUFBTSxDQUFDLDhDQUE4QyxDQUFDLENBQUM7SUFDOUQsQ0FBQztDQUVGO0FBckJELDBEQXFCQyJ9