"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const penerimaan_1 = __importDefault(require("./models/penerimaan"));
const pengeluaran_1 = __importDefault(require("./models/pengeluaran"));
const pengeluaran_proyeksi_cashcall_1 = __importDefault(require("./models/pengeluaran-proyeksi-cashcall"));
class CashflowModuleService extends (0, utils_1.MedusaService)({
    Penerimaan: penerimaan_1.default,
    Pengeluaran: pengeluaran_1.default,
    PengeluaranProyeksiCashcall: pengeluaran_proyeksi_cashcall_1.default
}) {
    async getTotalSummaryPenerimaan(listPenerimaan) {
        // Calculate 
        const total = listPenerimaan.reduce((sum, record) => {
            return sum + (record.amount || 0);
        }, 0);
        return total;
    }
    async getTotalSummaryPengeluaran(listPengeluaran) {
        // Calculate 
        const total = listPengeluaran.reduce((sum, record) => {
            return sum + (record.amount || 0);
        }, 0);
        return total;
    }
}
exports.default = CashflowModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Nhc2hmbG93L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBeUQ7QUFDekQscUVBQTRDO0FBQzVDLHVFQUE4QztBQUM5QywyR0FBZ0Y7QUFFaEYsTUFBTSxxQkFBc0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDOUMsVUFBVSxFQUFWLG9CQUFVO0lBQ1YsV0FBVyxFQUFYLHFCQUFXO0lBQ1gsMkJBQTJCLEVBQTNCLHVDQUEyQjtDQUM5QixDQUFDO0lBRUUsS0FBSyxDQUFDLHlCQUF5QixDQUFDLGNBQXFDO1FBRWpFLGFBQWE7UUFDYixNQUFNLEtBQUssR0FBRyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2hELE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBRUQsS0FBSyxDQUFDLDBCQUEwQixDQUFDLGVBQXNDO1FBRW5FLGFBQWE7UUFDYixNQUFNLEtBQUssR0FBRyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxFQUFFO1lBQ2pELE9BQU8sR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQztRQUN0QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFTixPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0NBZUo7QUFDRCxrQkFBZSxxQkFBcUIsQ0FBQSJ9