"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260112034333 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260112034333 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "api_usage" ("id" text not null, "user_id" text not null, "api_key_id" text not null, "api_name" text not null, "date" timestamptz not null, "request_count" integer not null default 0, "success_count" integer not null default 0, "failed_count" integer not null default 0, "plan_id" text null, "metadata" jsonb null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "api_usage_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_api_usage_api_key_id" ON "api_usage" (api_key_id) WHERE deleted_at IS NULL;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_api_usage_deleted_at" ON "api_usage" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "api_usage" cascade;`);
    }
}
exports.Migration20260112034333 = Migration20260112034333;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNjAxMTIwMzQzMzMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9iaWxsaW5nL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNjAxMTIwMzQzMzMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDBnQkFBMGdCLENBQUMsQ0FBQztRQUN4aEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2R0FBNkcsQ0FBQyxDQUFDO1FBQzNILElBQUksQ0FBQyxNQUFNLENBQUMsNkdBQTZHLENBQUMsQ0FBQztJQUM3SCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQywyQ0FBMkMsQ0FBQyxDQUFDO0lBQzNELENBQUM7Q0FFRjtBQVpELDBEQVlDIn0=