"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20260114040654 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20260114040654 extends migrations_1.Migration {
    async up() {
        this.addSql(`create table if not exists "profession" ("id" text not null, "name" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "profession_pkey" primary key ("id"));`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_profession_deleted_at" ON "profession" (deleted_at) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`drop table if exists "profession" cascade;`);
    }
}
exports.Migration20260114040654 = Migration20260114040654;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNjAxMTQwNDA2NTQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zY3JhcGUvbWlncmF0aW9ucy9NaWdyYXRpb24yMDI2MDExNDA0MDY1NC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxzREFBa0Q7QUFFbEQsTUFBYSx1QkFBd0IsU0FBUSxzQkFBUztJQUUzQyxLQUFLLENBQUMsRUFBRTtRQUNmLElBQUksQ0FBQyxNQUFNLENBQUMsdVFBQXVRLENBQUMsQ0FBQztRQUNyUixJQUFJLENBQUMsTUFBTSxDQUFDLCtHQUErRyxDQUFDLENBQUM7SUFDL0gsQ0FBQztJQUVRLEtBQUssQ0FBQyxJQUFJO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsNENBQTRDLENBQUMsQ0FBQztJQUM1RCxDQUFDO0NBRUY7QUFYRCwwREFXQyJ9