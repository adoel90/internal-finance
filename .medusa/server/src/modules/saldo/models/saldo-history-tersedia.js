"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("src/modules/cashflow/types");
const saldo_tersedia_1 = __importDefault(require("./saldo-tersedia"));
const SaldoHistoryTersedia = utils_1.model.define("saldo_history_tersedia", {
    id: utils_1.model.id().primaryKey(),
    currency_code: utils_1.model.enum(types_1.Currencies).nullable(),
    amountSaldoHistoryTersedia: utils_1.model.belongsTo(() => saldo_tersedia_1.default, {
        mappedBy: "histories_saldo_tersedia"
    }),
    amount: utils_1.model.number(),
    updated_saldo_at: utils_1.model.dateTime().nullable(),
});
exports.default = SaldoHistoryTersedia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8taGlzdG9yeS10ZXJzZWRpYS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NhbGRvL21vZGVscy9zYWxkby1oaXN0b3J5LXRlcnNlZGlhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQWlEO0FBQ2pELHNEQUF1RDtBQUN2RCxzRUFBNEM7QUFFNUMsTUFBTSxvQkFBb0IsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLHdCQUF3QixFQUFFO0lBQ2hFLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLGFBQWEsRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDaEQsMEJBQTBCLEVBQUUsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx3QkFBYSxFQUFFO1FBQzdELFFBQVEsRUFBRSwwQkFBMEI7S0FDdkMsQ0FBQztJQUNGLE1BQU0sRUFBRSxhQUFLLENBQUMsTUFBTSxFQUFFO0lBQ3RCLGdCQUFnQixFQUFFLGFBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDaEQsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsb0JBQW9CLENBQUEifQ==