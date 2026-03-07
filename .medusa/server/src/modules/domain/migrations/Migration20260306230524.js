"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260306230524 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260306230524 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "domain" ("id" text not null, "name" text not null, "slug" text not null, "is_active" boolean not null default true, "is_premium" boolean not null default false, "metadata" jsonb not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "domain_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_domain_deleted_at" ON "domain" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "domain" cascade;`);
    }
}
exports.Migration20260306230524 = Migration20260306230524;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNjAzMDYyMzA1MjQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9kb21haW4vbWlncmF0aW9ucy9NaWdyYXRpb24yMDI2MDMwNjIzMDUyNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsd1lBQXdZLENBQUMsQ0FBQztRQUN0WixJQUFJLENBQUMsTUFBTSxDQUFDLHVHQUF1RyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVRLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUY7QUFYRCwwREFXQyJ9