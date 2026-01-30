"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_saldo_tersedia_history_1 = __importDefault(require("src/workflows/create-saldo-tersedia-history"));
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    // Raw data
    const rawTake = parseInt(req.query.take);
    const rawSkip = parseInt(req.query.skip);
    const rawStartDate = req.query.start_date;
    const rawEndDate = req.query.end_date;
    const rawAmountSaldoTersediaId = req.query.amount_saldo_tersedia_id;
    // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : ""; //10
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : ""; //0 
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
    if (rawAmountSaldoTersediaId) {
        const idArray = rawAmountSaldoTersediaId.split(",").map(id => id.trim()).filter(Boolean);
        if (idArray.length > 0) {
            filters.amount_saldo_history_tersedia_id = {
                $in: idArray
            };
        }
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
    const workflow = (0, create_saldo_tersedia_history_1.default)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vdGVyc2VkaWEvaGlzdG9yeS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxxREFBc0U7QUFDdEUsZ0hBQTRGO0FBS3JGLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDZCxHQUFtQixFQUNyQixFQUFFO0lBRUosTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsV0FBVztJQUNYLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWMsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWMsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQztJQUNwRCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQWtCLENBQUM7SUFDaEQsTUFBTSx3QkFBd0IsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLHdCQUFrQyxDQUFDO0lBRzVFLDRDQUE0QztJQUM5QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTtJQUMxRSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTtJQUczRSxNQUFN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