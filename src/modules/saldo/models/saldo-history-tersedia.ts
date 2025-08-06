import { model } from "@medusajs/framework/utils"
import { Currencies } from "src/modules/cashflow/types"
import SaldoTersedia from "./saldo-tersedia"

const SaldoHistoryTersedia = model.define("saldo_history_tersedia", {
    id: model.id().primaryKey(),    
    currency_code: model.enum(Currencies).nullable(),    
    amountSaldoHistoryTersedia: model.belongsTo(() => SaldoTersedia, {
        mappedBy: "histories_saldo_tersedia"
    }),
    amount: model.number(),
    updated_saldo_at: model.dateTime().nullable(),
})

export default SaldoHistoryTersedia
    