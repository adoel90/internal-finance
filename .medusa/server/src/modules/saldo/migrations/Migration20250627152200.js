"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250627152200 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250627152200 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "saldo_history_tersedia" drop constraint if exists "saldo_history_tersedia_amount_saldo_id_foreign";`);
        this.addSql(`drop index if exists "IDX_saldo_history_tersedia_amount_saldo_id";`);
        this.addSql(`alter table if exists "saldo_history_tersedia" rename column "amount_saldo_id" to "amount_saldo_history_tersedia_id";`);
        this.addSql(`alter table if exists "saldo_history_tersedia" add constraint "saldo_history_tersedia_amount_saldo_history_tersedia_id_foreign" foreign key ("amount_saldo_history_tersedia_id") references "saldo_tersedia" ("id") on update cascade on delete cascade;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_tersedia_amount_saldo_history_tersedia_id" ON "saldo_history_tersedia" (amount_saldo_history_tersedia_id) WHERE deleted_at IS NULL;`);
    }
    async down() {
        this.addSql(`alter table if exists "saldo_history_tersedia" drop constraint if exists "saldo_history_tersedia_amount_saldo_history_tersedia_id_foreign";`);
        this.addSql(`drop index if exists "IDX_saldo_history_tersedia_amount_saldo_history_tersedia_id";`);
        this.addSql(`alter table if exists "saldo_history_tersedia" rename column "amount_saldo_history_tersedia_id" to "amount_saldo_id";`);
        this.addSql(`alter table if exists "saldo_history_tersedia" add constraint "saldo_history_tersedia_amount_saldo_id_foreign" foreign key ("amount_saldo_id") references "saldo_tersedia" ("id") on update cascade on delete cascade;`);
        this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_saldo_history_tersedia_amount_saldo_id" ON "saldo_history_tersedia" (amount_saldo_id) WHERE deleted_at IS NULL;`);
    }
}
exports.Migration20250627152200 = Migration20250627152200;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA2MjcxNTIyMDAuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zYWxkby9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwNjI3MTUyMjAwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRTNDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQyw0SEFBNEgsQ0FBQyxDQUFDO1FBRTFJLElBQUksQ0FBQyxNQUFNLENBQUMsb0VBQW9FLENBQUMsQ0FBQztRQUVsRixJQUFJLENBQUMsTUFBTSxDQUFDLHVIQUF1SCxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLE1BQU0sQ0FBQywwUEFBMFAsQ0FBQyxDQUFDO1FBQ3hRLElBQUksQ0FBQyxNQUFNLENBQUMsbUxBQW1MLENBQUMsQ0FBQztJQUNuTSxDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyw2SUFBNkksQ0FBQyxDQUFDO1FBRTNKLElBQUksQ0FBQyxNQUFNLENBQUMscUZBQXFGLENBQUMsQ0FBQztRQUVuRyxJQUFJLENBQUMsTUFBTSxDQUFDLHVIQUF1SCxDQUFDLENBQUM7UUFDckksSUFBSSxDQUFDLE1BQU0sQ0FBQyx3TkFBd04sQ0FBQyxDQUFDO1FBQ3RPLElBQUksQ0FBQyxNQUFNLENBQUMsaUpBQWlKLENBQUMsQ0FBQztJQUNqSyxDQUFDO0NBRUY7QUF0QkQsMERBc0JDIn0=