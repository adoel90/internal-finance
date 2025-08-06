import { model } from "@medusajs/framework/utils"
import SaldoHistory from "./saldo-history"


const SaldoAllrekening = model.define("saldo_allrekening", {
    id: model.id().primaryKey(),
    nama_bank:model.text(),
    no_rek: model.number(),   
    atas_nama: model.text(),
    keterangan: model.text().nullable(),
    allowed_see: model.boolean().nullable(),     
    histories : model.hasMany(() => SaldoHistory, {

        mappedBy: "amountSaldo"
    })    
}).cascades({
	delete: ["histories"]
})


export default SaldoAllrekening
    