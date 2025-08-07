"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_saldo_history_1 = __importDefault(require("src/workflows/create-saldo-history"));
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    // const saldoModuleService : SaldoModuleService = req.scope.resolve(SALDO_MODULE);
    // Raw data
    const rawTake = parseInt(req.query.take);
    const rawSkip = parseInt(req.query.skip);
    const rawStartDate = req.query.start_date;
    const rawEndDate = req.query.end_date;
    const rawAmountSaldoId = req.query.amount_saldo_id;
    const idArray = rawAmountSaldoId
        .split(",") // Pisah berdasarkan koma
        .map(id => id.trim()) // Hilangkan spasi ekstra
        .filter(Boolean);
    // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : ""; //10
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : ""; //0 
    //use default value if start_date or end_date is not provided
    // const today = new Date();
    // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const today = new Date();
    const hundredYearsAgo = new Date(today);
    hundredYearsAgo.setFullYear(today.getFullYear() - 100);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
    const startDate = rawStartDate ? new Date(rawStartDate) : new Date(hundredYearsAgo);
    const endDateFormated = new Date(rawEndDate);
    const endDate = rawEndDate ? new Date(Date.UTC(endDateFormated.getFullYear(), endDateFormated.getMonth(), endDateFormated.getDate(), 16, 59, 59, 999)) : lastDayOfMonth;
    const pagination = {
        order: {
            created_at: "DESC",
        },
    };
    if (take !== "") {
        pagination.take = take;
    }
    if (skip !== "") {
        pagination.skip = skip;
    }
    const filters = {
        updated_saldo_at: {
            $gt: startDate.toISOString(),
            $lt: endDate.toISOString(),
        },
    };
    if (rawAmountSaldoId !== "" && idArray.length > 0) {
        filters.amount_saldo_id = {
            $in: idArray
        };
    }
    if (rawAmountSaldoId !== "" && idArray.length == 0) {
        filters.amount_saldo_id = {
            $in: [rawAmountSaldoId]
            // $in:["01JXF6X2Z2QKADGZR1EBA5WT83"]
        };
    }
    const result = await query.graph({
        entity: "saldo_history_tersedia",
        fields: [
            "*"
        ],
        pagination,
        filters
    });
    res.json({
        saldo_history: result.data,
        pagination: {
            take: take,
            skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        },
        filters
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const workflow = (0, create_saldo_history_1.default)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vdGVyc2VkaWEvaGlzdG9yeS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxxREFBc0U7QUFDdEUsOEZBQW1GO0FBSzVFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDZCxHQUFtQixFQUNyQixFQUFFO0lBRUosTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsbUZBQW1GO0lBRW5GLFdBQVc7SUFDWCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztJQUNuRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztJQUNuRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQW9CLENBQUM7SUFDcEQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDO0lBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUF5QixDQUFBO0lBRTVELE1BQU0sT0FBTyxHQUFHLGdCQUFnQjtTQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQWMseUJBQXlCO1NBQ2pELEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFJLHlCQUF5QjtTQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFPLENBQUM7SUFJckIsNENBQTRDO0lBQzlDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFD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