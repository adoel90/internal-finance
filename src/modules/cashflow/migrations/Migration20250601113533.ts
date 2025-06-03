import { Migration } from '@mikro-orm/migrations';

export class Migration20250601113533 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "pengeluaran" drop constraint if exists "pengeluaran_amount_of_outflow_for_check";`);

    this.addSql(`alter table if exists "pengeluaran" add constraint "pengeluaran_amount_of_outflow_for_check" check("amount_of_outflow_for" in ('STT (Penggajian Dan THR)', 'NF Academy (Penggajian Dan THR)', 'STT (Operasional)', 'NF Academy (Operasional)', 'STT (Pengembalian)', 'NF Academy (Pengembalian)', 'OTHER (STT)', 'OTHER (NF Academy)'));`);
  }

  override async down(): Promise<void> {
    this.addSql(`alter table if exists "pengeluaran" drop constraint if exists "pengeluaran_amount_of_outflow_for_check";`);

    this.addSql(`alter table if exists "pengeluaran" add constraint "pengeluaran_amount_of_outflow_for_check" check("amount_of_outflow_for" in ('STT (Penggajian & THR)', 'NF Academy (Penggajian & THR)', 'STT (Operasional)', 'NF Academy (Operasional)', 'STT (Pengembalian)', 'NF Academy (Pengembalian)', 'OTHER (STT)', 'OTHER (NF Academy)'));`);
  }

}
