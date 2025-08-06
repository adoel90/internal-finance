import { model } from "@medusajs/framework/utils"
import { Currencies } from "src/modules/cashflow/types"

const SaldoAllbank = model.define("saldo_allbank", {
    id: model.id().primaryKey(),
    nama_bank:model.text(),
    no_rek: model.number(),   
    atas_nama: model.text(),
    keterangan: model.text().nullable(),
    allowed_see: model.boolean().nullable(),
    currency_code: model.enum(Currencies).nullable(),  
    amount_saldo:model.number(),
    updated_saldo_at: model.dateTime()      
})

export default SaldoAllbank
    