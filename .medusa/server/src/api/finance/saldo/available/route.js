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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYXZhaWxhYmxlL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHFEQUFzRTtBQUN0RSw2Q0FBaUQ7QUFFakQsa0dBQWdGO0FBR3pFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDcEIsR0FBa0IsRUFDZCxHQUFtQixFQUNyQixFQUFFO0lBRUosTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxrQkFBa0IsR0FBd0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsb0JBQVksQ0FBQyxDQUFDO0lBRWhGLE1BQU0sU0FBUyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQztJQUNqRCxNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQWtCLENBQUM7SUFHN0MsTUFBTSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDaEQsTUFBTSxFQUFFLGlCQUFpQjtRQUN6QixNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDO1FBQ3hCLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsMkJBQTJCO1FBQzNCLHlCQUF5QjtRQUN6QixRQUFRO1FBQ1IsSUFBSTtLQUNQLENBQUMsQ0FBQztJQUVILE1BQU0sbUJBQW1CLEdBR3RCLE1BQU0sa0JBQWtCLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFcEUsR0FBRyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FBQTtBQTlCWSxRQUFBLEdBQUcsT0E4QmY7QUFHTSxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3JCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxJQUFBLGdDQUE0QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6RCxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDaEMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUE0QjtLQUN4QyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQTtBQVRVLFFBQUEsSUFBSSxRQVNkIn0=