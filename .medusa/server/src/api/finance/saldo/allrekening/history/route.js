"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
// import { SALDO_MODULE } from "src/modules/saldo";
// import SaldoModuleService from "src/modules/saldo/service";
const create_saldo_history_1 = __importDefault(require("src/workflows/create-saldo-history"));
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const logger = req.scope.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    try {
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
        logger.info(`Fetching saldo history with filters: ${JSON.stringify(filters)}, pagination: ${JSON.stringify(pagination)}`);
        const result = await query.graph({
            entity: "saldo_history",
            fields: [
                "*"
            ],
            pagination,
            filters
        });
        logger.info(`Fetched ${result.data.length} saldo history records.`);
        res.json({
            saldo_history: result.data,
            pagination: {
                take: take,
                skip: skip,
                total: result.metadata?.count || result?.data?.length || 0
            },
            filters
        });
    }
    catch (error) {
        logger.error(`Error fetching saldo history: ${error}`);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }
};
exports.GET = GET;
// interface CreateSaldoHistoryStepInput {
//   saldoRekening: any;
//   payload: {
//     amount_saldo: number;
//     updated_saldo_at: Date;
//   };
// }
const POST = async (req, res) => {
    const logger = req.scope.resolve(utils_1.ContainerRegistrationKeys.LOGGER);
    try {
        const workflow = (0, create_saldo_history_1.default)(req.scope);
        // {"amount_saldo_id":"01JYQ7F2BDDDEH0F0M4DNWV09W","amount":"30000","updated_saldo_at":"2025-06-26T23:11:00.000Z","currency_code":"Rp"}
        const payload = req.body;
        logger.info(`Creating saldo history with payload: ${JSON.stringify(payload)}`);
        const result = await workflow.run({
            input: {
                amount: payload.amount,
                amount_saldo_id: payload.amount_saldo_id,
                // amount_saldo_history_tersedia_id: payload.amount_saldo_history_tersedia_id,
                updated_saldo_at: payload.updated_saldo_at,
                currency_code: payload.currency_code
            }
        }
        //   {
        //   input: req.body as ISaldoHistoryInput
        // }
        );
        logger.info(`Saldo history created successfully.`);
        res.json(result);
    }
    catch (error) {
        logger.error(`Error creating saldo history: ${error}`);
        res.status(500).json({ message: "Internal Server Error", error: error });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYWxscmVrZW5pbmcvaGlzdG9yeS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxxREFBc0U7QUFDdEUsb0RBQW9EO0FBQ3BELDhEQUE4RDtBQUM5RCw4RkFBNEU7QUFLckUsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNkLEdBQW1CLEVBQ3JCLEVBQUU7SUFFSixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRSxNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUVuRSxJQUFJLENBQUM7UUFDSCxtRkFBbUY7UUFFbkYsV0FBVztRQUNYLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWMsQ0FBQyxDQUFDO1FBQ25ELE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQztRQUNwRCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQWtCLENBQUM7UUFDaEQsTUFBTSxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLGVBQXlCLENBQUE7UUFFNUQsTUFBTSxPQUFPLEdBQUcsZ0JBQWdCO2FBQy9CLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBYyx5QkFBeUI7YUFDakQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUkseUJBQXlCO2FB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