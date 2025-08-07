"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20250601113533 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20250601113533 extends migrations_1.Migration {
    async up() {
        this.addSql(`alter table if exists "pengeluaran" drop constraint if exists "pengeluaran_amount_of_outflow_for_check";`);
        this.addSql(`alter table if exists "pengeluaran" add constraint "pengeluaran_amount_of_outflow_for_check" check("amount_of_outflow_for" in ('STT (Penggajian Dan THR)', 'NF Academy (Penggajian Dan THR)', 'STT (Operasional)', 'NF Academy (Operasional)', 'STT (Pengembalian)', 'NF Academy (Pengembalian)', 'OTHER (STT)', 'OTHER (NF Academy)'));`);
    }
    async down() {
        this.addSql(`alter table if exists "pengeluaran" drop constraint if exists "pengeluaran_amount_of_outflow_for_check";`);
        this.addSql(`alter table if exists "pengeluaran" add constraint "pengeluaran_amount_of_outflow_for_check" check("amount_of_outflow_for" in ('STT (Penggajian & THR)', 'NF Academy (Penggajian & THR)', 'STT (Operasional)', 'NF Academy (Operasional)', 'STT (Pengembalian)', 'NF Academy (Pengembalian)', 'OTHER (STT)', 'OTHER (NF Academy)'));`);
    }
}
exports.Migration20250601113533 = Migration20250601113533;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTWlncmF0aW9uMjAyNTA2MDExMTM1MzMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jYXNoZmxvdy9taWdyYXRpb25zL01pZ3JhdGlvbjIwMjUwNjAxMTEzNTMzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHNEQUFrRDtBQUVsRCxNQUFhLHVCQUF3QixTQUFRLHNCQUFTO0lBRTNDLEtBQUssQ0FBQyxFQUFFO1FBQ2YsSUFBSSxDQUFDLE1BQU0sQ0FBQywwR0FBMEcsQ0FBQyxDQUFDO1FBRXhILElBQUksQ0FBQyxNQUFNLENBQUMsMFVBQTBVLENBQUMsQ0FBQztJQUMxVixDQUFDO0lBRVEsS0FBSyxDQUFDLElBQUk7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQywwR0FBMEcsQ0FBQyxDQUFDO1FBRXhILElBQUksQ0FBQyxNQUFNLENBQUMsc1VBQXNVLENBQUMsQ0FBQztJQUN0VixDQUFDO0NBRUY7QUFkRCwwREFjQyJ9