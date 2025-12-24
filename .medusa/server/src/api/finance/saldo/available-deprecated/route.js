"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const saldo_1 = require("src/modules/saldo");
const create_saldo_available_1 = __importDefault(require("src/workflows/create-saldo-available"));
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const saldoModuleService = req.scope.resolve(saldo_1.SALDO_MODULE);
    const startDate = req.query.start_date;
    const endDate = req.query.end_date;
    const { data: saldo_available } = await query.graph({
        entity: "saldo_available",
        fields: ["amount", "id"],
        // filters: {
        //     created_note_at: {
        //         $gte: startDate,
        //         $lte: endDate,
        //     }
        // }
    });
    const totalSaldoAvailable = await saldoModuleService.getTotalSaldoAvailable(saldo_available);
    res.json(totalSaldoAvailable);
};
exports.GET = GET;
const POST = async (req, res) => {
    const workflow = (0, create_saldo_available_1.default)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYXZhaWxhYmxlLWRlcHJlY2F0ZWQvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EscURBQXNFO0FBQ3RFLDZDQUFpRDtBQUVqRCxrR0FBZ0Y7QUFHekUsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUNwQixHQUFrQixFQUNkLEdBQW1CLEVBQ3JCLEVBQUU7SUFFSixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLGtCQUFrQixHQUF3QixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxvQkFBWSxDQUFDLENBQUM7SUFFaEYsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFvQixDQUFDO0lBQ2pELE1BQU0sT0FBTyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBa0IsQ0FBQztJQUc3QyxNQUFNLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNoRCxNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7UUFDeEIsYUFBYTtRQUNiLHlCQUF5QjtRQUN6QiwyQkFBMkI7UUFDM0IseUJBQXlCO1FBQ3pCLFFBQVE7UUFDUixJQUFJO0tBQ1AsQ0FBQyxDQUFDO0lBRUgsTUFBTSxtQkFBbUIsR0FHdEIsTUFBTSxrQkFBa0IsQ0FBQyxzQkFBc0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUVwRSxHQUFHLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7QUFDbEMsQ0FBQyxDQUFBO0FBOUJZLFFBQUEsR0FBRyxPQThCZjtBQUdNLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDckIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sUUFBUSxHQUFHLElBQUEsZ0NBQTRCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3pELE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQTRCO0tBQ3hDLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFBO0FBVFUsUUFBQSxJQUFJLFFBU2QifQ==