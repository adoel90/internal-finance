import { model } from "@medusajs/framework/utils"
import { AmountFor } from "../types";

const PengeluaranProyeksiCashcall = model.define("pengeluaran_proyeksi_cashcall", {
    id: model.id().primaryKey(),
    created_note_at: model.dateTime(),  
    amount_of_inflow_for: model.enum(AmountFor).nullable(),  
    amount: model.number(),
})

export default PengeluaranProyeksiCashcall;

