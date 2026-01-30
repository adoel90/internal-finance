"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_saldo_allbank_1 = __importDefault(require("src/workflows/create-saldo-allbank"));
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
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
    const startDate = rawStartDate ? rawStartDate : firstDayOfMonth.toISOString();
    const endDate = rawEndDate ? rawEndDate : lastDayOfMonth.toISOString();
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
        // updated_saldo_at: {
        created_at: {
            $gt: startDate,
            $lt: endDate,
        }
    };
    const result = await query.graph({
        entity: "saldo_allbank",
        fields: ["*"],
        pagination,
        filters
    });
    res.json({
        saldo_allbank: result.data,
        pagination: {
            take: take,
            skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        }
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const workflow = (0, create_saldo_allbank_1.default)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2Uvc2FsZG8vYWxsYmFuay1kZXByZWNhdGVkL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHFEQUFzRTtBQUd0RSw4RkFBNEU7QUFLckUsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUNwQixHQUFrQixFQUNkLEdBQW1CLEVBQ3JCLEVBQUU7SUFFSixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdqRSxtRkFBbUY7SUFFbkYsV0FBVztJQUNYLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWMsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQWMsQ0FBQyxDQUFDO0lBQ25ELE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQztJQUNwRCxNQUFNLFVBQVUsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQWtCLENBQUM7SUFHOUMsNENBQTRDO0lBQzlDLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJO0lBQzFFLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJO0lBR3pFLDZEQUE2RDtJQUMvRCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pCLE1BQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0UsTUFBTSxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRS9GLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUUsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUd2RSxNQUFNLFVBQVUsR0FBUTtRQUNwQixLQUFLLEVBQUU7WUFDUCxVQUFVLEVBQUUsTUFBTTtTQUNqQjtLQUNKLENBQUE7SUFFRCxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNkLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxJQUFJLElBQUksS0FBSyxFQUFFLEVBQUUsQ0FBQztRQUNkLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0lBQzNCLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBUTtRQUNqQixzQkFBc0I7UUFDdEIsVUFBVSxFQUFFO1lBQ1IsR0FBRyxFQUFFLFNBQVM7WUFDZCxHQUFHLEVBQUUsT0FBTztTQUNmO0tBQ0osQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM3QixNQUFNLEVBQUUsZUFBZTtRQUN2QixNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUM7UUFDYixVQUFVO1FBQ1YsT0FBTztLQUNWLENBQUMsQ0FBQztJQUlILEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDTCxhQUFhLEVBQUUsTUFBTSxDQUFDLElBQUk7UUFDMUIsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLElBQUk7WUFDVixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxNQUFNLENBQUMsUUFBUSxFQUFFLEtBQUssSUFBSSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDO1NBQzdEO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFBO0FBdEVZLFFBQUEsR0FBRyxPQXNFZjtBQUdNLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDckIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sUUFBUSxHQUFHLElBQUEsOEJBQTBCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQTBCO0tBQ3RDLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFBO0FBVFUsUUFBQSxJQUFJLFFBU2QifQ==