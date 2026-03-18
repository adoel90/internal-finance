"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260213034153 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260213034153 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "payment_proof" ("id" text not null, "cart_id" text null, "file_key" text not null, "file_url" text null, "uploaded_by" text null, "status" text check ("status" in ('pending', 'verified', 'rejected')) not null default 'pending', "note" text null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "payment_proof_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_payment_proof_deleted_at" ON "payment_proof" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "payment_proof" cascade;`);
    }
}
exports.Migration20260213034153 = Migration20260213034153;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNjAyMTMwMzQxNTMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9wYXltZW50LXByb29mL21pZ3JhdGlvbnMvTWlncmF0aW9uMjAyNjAyMTMwMzQxNTMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsc0RBQWtEO0FBRWxELE1BQWEsdUJBQXdCLFNBQVEsc0JBQVM7SUFFM0MsS0FBSyxDQUFDLEVBQUU7UUFDZixJQUFJLENBQUMsTUFBTSxDQUFDLHljQUF5YyxDQUFDLENBQUM7UUFDdmQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxxSEFBcUgsQ0FBQyxDQUFDO0lBQ3JJLENBQUM7SUFFUSxLQUFLLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLCtDQUErQyxDQUFDLENBQUM7SUFDL0QsQ0FBQztDQUVGO0FBWEQsMERBV0MifQ==