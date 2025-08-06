import { model } from "@medusajs/framework/utils"
import { Currencies } from "src/modules/cashflow/types"
import SaldoAllrekening from "./saldo-allrekening"

const SaldoHistory = model.define("saldo_history", {
    id: model.id().primaryKey(),    
    currency_code: model.enum(Currencies).nullable(),    
    amountSaldo: model.belongsTo(() => SaldoAllrekening, {
        mappedBy: "histories"
    }),
    amount: model.number(),
    updated_saldo_at: model.dateTime().nullable(),
})

export default SaldoHistory
    