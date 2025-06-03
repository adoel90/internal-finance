import { model } from "@medusajs/framework/utils"
import { Currencies } from "src/modules/cashflow/types"

const SaldoAvailable = model.define("saldo_available", {
    id: model.id().primaryKey(),
    amount: model.number(),
    currency_code: model.enum(Currencies).nullable(),    
    created_note_at: model.dateTime().nullable(),
})

export default SaldoAvailable
    