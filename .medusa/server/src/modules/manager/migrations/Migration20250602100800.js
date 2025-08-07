"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250602100800 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250602100800 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "manager" ("id" text not null, "firstName" text not null, "lastName" text not null, "email" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "manager_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_manager_deleted_at" ON "manager" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "manager" cascade;`);
    }
}
exports.Migration20250602100800 = Migration20250602100800;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA2MDIxMDA4MDAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9tYW5hZ2VyL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNTA2MDIxMDA4MDAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLHVUQUF1VCxDQUFDLENBQUM7UUFDclUsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5R0FBeUcsQ0FBQyxDQUFDO0lBQ3pILENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==