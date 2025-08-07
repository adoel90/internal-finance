"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_saldo_tersedia_1 = __importDefault(require("src/workflows/create-saldo-tersedia"));
const create_saldo_tersedia_history_1 = __importDefault(require("src/workflows/create-saldo-tersedia-history"));
const types_1 = require("src/modules/cashflow/types");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    // const saldoModuleService : SaldoModuleService = req.scope.resolve(SALDO_MODULE);
    // Raw data
    const rawTake = parseInt(req.query.take);
    const rawSkip = parseInt(req.query.skip);
    const rawStartDate = req.query.start_date;
    const rawEndDate = req.query.end_date;
    // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : ""; //10
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : ""; //0 
    //use default value if start_date or end_date is not provided
    // const today = new Date();
    // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    // const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
    // const startDate = rawStartDate ? rawStartDate : firstDayOfMonth.toISOString();
    // const endDate = rawEndDate ? rawEndDate : lastDayOfMonth.toISOString();
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
    const filters = {};
    // if(endDate !== ""){
    //     filters.end_date
    // }
    const result = await query.graph({
        entity: "saldo_tersedia",
        fields: [
            "*",
            "histories.*",
            // ...(fields || []),
        ],
        pagination,
        filters
    });
    res.json({
        saldo_tersedia: result.data,
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
    const workflow = (0, create_saldo_tersedia_1.default)(req.scope);
    const result = await workflow.run({
        input: req.body
    }).then(async (response) => {
        if (response?.result) {
            const payload = req.body;
            const amountSaldoId = response.result.id;
            const historyWorkflow = await (0, create_saldo_tersedia_history_1.default)(req.scope);
            // TODO: put Logger
            const resultSaldoHistoryTersediaWorflow = historyWorkflow.run({
                input: {
                    amount_saldo_id: amountSaldoId,
                    amount: payload.amount_saldo,
                    updated_saldo_at: payload.updated_saldo_at,
                    currency_code: types_1.Currencies.ID
                }
            });
            return res.json(response);
        }
    });
    // console.log(result.result)
    // amount_saldo_id: string
    // amount_saldo: number
    // updated_saldo_at: Date,
    // currency_code?: Currencies
    // req.body as ISaldoHistoryInput
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vdGVyc2VkaWEvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEscURBQXNFO0FBQ3RFLGdHQUE4RTtBQUc5RSxnSEFBNkY7QUFDN0Ysc0RBQXdEO0FBRWpELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDcEIsR0FBa0IsRUFDZCxHQUFtQixFQUNyQixFQUFFO0lBRUosTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsbUZBQW1GO0lBRW5GLFdBQVc7SUFDWCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztJQUNuRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztJQUNuRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQW9CLENBQUM7SUFDcEQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDO0lBRzlDLDRDQUE0QztJQUM5QyxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTtJQUMxRSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSTtJQUd6RSw2REFBNkQ7SUFDL0QsNEJBQTRCO0lBQzVCLDhFQUE4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