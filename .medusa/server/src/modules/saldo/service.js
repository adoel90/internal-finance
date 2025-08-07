"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const saldo_available_1 = __importDefault(require("./models/saldo-available"));
const saldo_allbank_1 = __importDefault(require("./models/saldo-allbank"));
const saldo_allrekening_1 = __importDefault(require("./models/saldo-allrekening"));
const saldo_history_1 = __importDefault(require("./models/saldo-history"));
const saldo_tersedia_1 = __importDefault(require("./models/saldo-tersedia"));
const saldo_history_tersedia_1 = __importDefault(require("./models/saldo-history-tersedia"));
class SaldoModuleService extends (0, utils_1.MedusaService)({
    SaldoAvailable: saldo_available_1.default,
    SaldoAllbank: saldo_allbank_1.default,
    SaldoAllrekening: saldo_allrekening_1.default,
    SaldoTersedia: saldo_tersedia_1.default,
    SaldoHistoryTersedia: saldo_history_tersedia_1.default,
    SaldoHistory: saldo_history_1.default
}) {
    async getTotalSaldoAvailable(listSaldoAvailable) {
        // Calculate 
        // const total = listSaldoAvailable.reduce((sum, record) => {
        //     return sum + (record.amount || 0);
        // }, 0);
        // return total;
        //Berikan response berupa list saldo available dari element terakhir
        return listSaldoAvailable[listSaldoAvailable.length - 1];
    }
}
exports.default = SaldoModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NhbGRvL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBeUQ7QUFDekQsK0VBQXFEO0FBQ3JELDJFQUFpRDtBQUNqRCxtRkFBeUQ7QUFDekQsMkVBQWlEO0FBRWpELDZFQUFtRDtBQUNuRCw2RkFBa0U7QUFFbEUsTUFBTSxrQkFBbUIsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDM0MsY0FBYyxFQUFkLHlCQUFjO0lBQ2QsWUFBWSxFQUFaLHVCQUFZO0lBQ1osZ0JBQWdCLEVBQWhCLDJCQUFnQjtJQUNoQixhQUFhLEVBQWIsd0JBQWE7SUFDYixvQkFBb0IsRUFBcEIsZ0NBQW9CO0lBQ3BCLFlBQVksRUFBWix1QkFBWTtDQUNmLENBQUM7SUFFRSxLQUFLLENBQUMsc0JBQXNCLENBQUMsa0JBRzFCO1FBS0wsYUFBYTtRQUNQLDZEQUE2RDtRQUM3RCx5Q0FBeUM7UUFDekMsU0FBUztRQUVULGdCQUFnQjtRQUdoQixvRUFBb0U7UUFDcEUsT0FBTyxrQkFBa0IsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFFN0QsQ0FBQztDQUNKO0FBRUQsa0JBQWUsa0JBQWtCLENBQUEifQ==