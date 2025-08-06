import { model } from "@medusajs/framework/utils"
import SaldoHistoryTersedia from "./saldo-history-tersedia"


const SaldoTersedia = model.define("saldo_tersedia", {
    id: model.id().primaryKey(),
    nama_bank:model.text(),
    no_rek: model.number(),   
    atas_nama: model.text(),
    keterangan: model.text().nullable(),
    allowed_see: model.boolean().nullable(),     
    histories_saldo_tersedia : model.hasMany(() => SaldoHistoryTersedia, {

        mappedBy: "amountSaldoHistoryTersedia"
    })    
}).cascades({
    delete: ["histories_saldo_tersedia"]
})


export default SaldoTersedia
    