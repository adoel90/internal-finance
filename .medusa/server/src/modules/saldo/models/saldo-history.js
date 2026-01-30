"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("src/modules/cashflow/types");
const saldo_allrekening_1 = __importDefault(require("./saldo-allrekening"));
const SaldoHistory = utils_1.model.define("saldo_history", {
    id: utils_1.model.id().primaryKey(),
    currency_code: utils_1.model.enum(types_1.Currencies).nullable(),
    amountSaldo: utils_1.model.belongsTo(() => saldo_allrekening_1.default, {
        mappedBy: "histories"
    }),
    amount: utils_1.model.number(),
    updated_saldo_at: utils_1.model.dateTime().nullable(),
});
exports.default = SaldoHistory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8taGlzdG9yeS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NhbGRvL21vZGVscy9zYWxkby1oaXN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQWlEO0FBQ2pELHNEQUF1RDtBQUN2RCw0RUFBa0Q7QUFFbEQsTUFBTSxZQUFZLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7SUFDL0MsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsYUFBYSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsa0JBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNoRCxXQUFXLEVBQUUsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQywyQkFBZ0IsRUFBRTtRQUNqRCxRQUFRLEVBQUUsV0FBVztLQUN4QixDQUFDO0lBQ0YsTUFBTSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7SUFDdEIsZ0JBQWdCLEVBQUUsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUNoRCxDQUFDLENBQUE7QUFFRixrQkFBZSxZQUFZLENBQUEifQ==