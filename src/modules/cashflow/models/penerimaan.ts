import { model } from "@medusajs/framework/utils"
import { AmountFor, Currencies } from "../types"

const Penerimaan = model.define("penerimaan", {
    id: model.id().primaryKey(),
    payment_method: model.text(),
    amount: model.number(),
    currency_code: model.enum(Currencies).nullable(),
    description: model.text().nullable(),
    created_note_at: model.dateTime(),
    amount_of_inflow_for: model.enum(AmountFor).nullable(),
    keterangan_tambahan: model.text().nullable(),
})

export default Penerimaan
