"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_saldo_allrekening_1 = __importDefault(require("src/workflows/create-saldo-allrekening"));
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
        entity: "saldo_allrekening",
        fields: [
            "*",
            "histories.*",
            // ...(fields || []),
        ],
        pagination,
        filters
    });
    res.json({
        saldo_allrekening: result.data,
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
    const workflow = (0, create_saldo_allrekening_1.default)(req.scope);
    workflow.run({
        input: req.body
    }).then(async (response) => {
        if (response?.result) {
            const payload = req.body;
            // const amountSaldoId = response.result.id
            //   // Tunggu hingga saldo history selesai
            //   try {
            //     const responseSaldoHistory = await createSaldoHistoryWorkflow(req.scope).run({
            //       input: {
            //         amount_saldo_id: amountSaldoId,
            //         amount: payload.amount_saldo,
            //         amount_saldo: payload.amount_saldo,
            //         updated_saldo_at: payload.updated_saldo_at,
            //         currency_code: Currencies.ID
            //       }
            //     });
            //     console.log("responseSaldoHistory : ", responseSaldoHistory);
            //   } catch (e) {
            //     console.log(e.message);
            //   }
            return res.json(response.result);
            // createSaldoHistoryWorkflow(req.scope).run({
            //   input: {
            //     amount_saldo_id: amountSaldoId,            
            //     amount: payload.amount_saldo,
            //     amount_saldo: payload.amount_saldo,
            //     updated_saldo_at: payload.updated_saldo_at,
            //     currency_code: Currencies.ID
            //   }
            // }).then((responseSaldoHistory) => {
            //   console.log("responseSaldoHistory : ", responseSaldoHistory)
            // }).catch(e => console.log(e.message))
            // TODO: put Logger
            // if(!payload.amount_saldo){
            //     return res.json(response);
            // }
            // historyWorkflow.run({
            //   input: {
            //     amount_saldo_id: amountSaldoId,            
            //     amount: payload.amount_saldo,
            //     amount_saldo: payload.amount_saldo,
            //     updated_saldo_at: payload.updated_saldo_at,
            //     currency_code: Currencies.ID
            //   }
            // });
            // return res.json(response.result);
        }
    }).finally(() => {
    });
    // console.log(result.result)
    // amount_saldo_id: string
    // amount_saldo: number
    // updated_saldo_at: Date,
    // currency_code?: Currencies
    // req.body as ISaldoHistoryInput
    // res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYWxscmVrZW5pbmcvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRUEscURBQXNFO0FBR3RFLHNHQUFvRjtBQU83RSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3BCLEdBQWtCLEVBQ2QsR0FBbUIsRUFDckIsRUFBRTtJQUVKLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLG1GQUFtRjtJQUVuRixXQUFXO0lBQ1gsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUM7SUFDbkQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUM7SUFDbkQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFvQixDQUFDO0lBQ3BELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBa0IsQ0FBQztJQUc5Qyw0Q0FBNEM7SUFDOUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUk7SUFDMUUsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUk7SUFHekUsNkRBQTZEO0lBQy9ELDRCQUE0QjtJQUM1Qiw4RUFBOEU7SUFDOUUsa0dBQWtHO0lBRWxHLGlG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