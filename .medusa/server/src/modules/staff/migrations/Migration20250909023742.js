"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250909023742 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250909023742 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "staff" ("id" text not null, "firstName" text not null, "lastName" text not null, "email" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "staff_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_staff_deleted_at" ON "staff" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "staff" cascade;`);
    }
}
exports.Migration20250909023742 = Migration20250909023742;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA5MDkwMjM3NDIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zdGFmZi9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwOTA5MDIzNzQyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRTNDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxtVEFBbVQsQ0FBQyxDQUFDO1FBQ2pVLElBQUksQ0FBQyxNQUFNLENBQUMscUdBQXFHLENBQUMsQ0FBQztJQUNySCxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FFRjtBQVhELDBEQVdDIn0=