"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250909044115 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250909044115 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "member" ("id" text not null, "name" text not null, "email" text not null, "role_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "member_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_member_deleted_at" ON "member" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "member" cascade;`);
    }
}
exports.Migration20250909044115 = Migration20250909044115;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA5MDkwNDQxMTUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tZW1iZXIvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI1MDkwOTA0NDExNS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsK1NBQStTLENBQUMsQ0FBQztRQUM3VCxJQUFJLENBQUMsTUFBTSxDQUFDLHVHQUF1RyxDQUFDLENBQUM7SUFDdkgsQ0FBQztJQUVRLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsd0NBQXdDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBRUY7QUFYRCwwREFXQyJ9