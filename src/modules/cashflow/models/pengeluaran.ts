import { model } from "@medusajs/framework/utils"
import { AmountForPengeluaran, Currencies } from "../types"

const Pengeluaran = model.define("pengeluaran", {
    id: model.id().primaryKey(),
    payment_method: model.text(),
    amount: model.number(),
    currency_code: model.enum(Currencies).nullable(),
    description: model.text().nullable(),
    created_note_at: model.dateTime(),
    amount_of_outflow_for: model.enum(AmountForPengeluaran).nullable(),
    keterangan_tambahan: model.text().nullable(),
})

export default Pengeluaran