"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260112032949 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260112032949 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "company" ("id" text not null, "user_id" text not null, "company_name" text not null, "company_logo" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "company_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_company_deleted_at" ON "company" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "company" cascade;`);
    }
}
exports.Migration20260112032949 = Migration20260112032949;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNjAxMTIwMzI5NDkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9iaWxsaW5nL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNjAxMTIwMzI5NDkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLDRUQUE0VCxDQUFDLENBQUM7UUFDMVUsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5R0FBeUcsQ0FBQyxDQUFDO0lBQ3pILENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7SUFDekQsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==