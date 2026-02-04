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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYWxscmVrZW5pbmcvaGlzdG9yeS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQSxxREFBc0U7QUFHdEUsOEZBQTRFO0FBS3JFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDZCxHQUFtQixFQUNyQixFQUFFO0lBRUosTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakUsTUFBTSxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFbkUsSUFBSSxDQUFDO1FBQ0gsbUZBQW1GO1FBRW5GLFdBQVc7UUFDWCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztRQUNuRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztRQUNuRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQW9CLENBQUM7UUFDcEQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDO1FBQ2hELE1BQU0sZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxlQUF5QixDQUFBO1FBRTVELE1BQU0sT0FBTyxHQUFHLGdCQUFnQjthQUMvQixLQUFLLENBQUMsR0FBRyxDQUFDLENBQWMseUJBQXlCO2FBQ2pELEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFJLHlCQUF5QjthQUNqRCxNQUFNLENBQUMsT0FBTyxDQUFPLENB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