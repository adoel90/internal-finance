1. Ubah no_rek
const SaldoAllbank = model.define("saldo_allbank", {
    id: model.id().primaryKey(),
    nama_bank:model.text(),
    no_rek: model.text(),   
    atas_nama: model.text(),
    keterangan: model.text().nullable(),
    allowed_see: model.boolean().nullable(),
    currency_code: model.enum(Currencies).nullable(),  
    amount_saldo:model.number(),
    updated_saldo_at: model.dateTime()      
})

2. npx medusa db:generate <nama-module>
npx medusa db:generate "saldo"

3. Check manual 
cek manual file yang di-generate sebelum run. Kadang auto-generate MikroORM tidak selalu pas untuk perubahan tipe kolom (apalagi dari integer ke text yang ada data existing) — pastikan using (...) cast-nya benar

4. npx medusa db:migrate --execute-safe-links