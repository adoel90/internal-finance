"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250909071758 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250909071758 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "task" ("id" text not null, "title" text not null, "description" text not null, "report" text not null, "status_id" text not null, "creator_id" text not null, "assignee_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "task_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_task_deleted_at" ON "task" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "task" cascade;`);
    }
}
exports.Migration20250909071758 = Migration20250909071758;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA5MDkwNzE3NTguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy90YXNrL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTA5MDkwNzE3NTgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLHFZQUFxWSxDQUFDLENBQUM7UUFDblosSUFBSSxDQUFDLE1BQU0sQ0FBQyxtR0FBbUcsQ0FBQyxDQUFDO0lBQ25ILENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHNDQUFzQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==