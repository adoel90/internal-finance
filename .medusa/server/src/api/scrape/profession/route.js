"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/utils");
const utils_2 = require("@medusajs/framework/utils");
const create_profession_1 = __importDefault(require("../../../workflows/create-profession"));
const GET = async (
// req: AuthenticatedMedusaRequest,
req, res) => {
    const query = req.scope.resolve(utils_2.ContainerRegistrationKeys.QUERY);
    // Raw data
    const rawTake = parseInt(req.query.take);
    const rawSkip = parseInt(req.query.skip);
    const rawStartDate = req.query.start_date;
    const rawEndDate = req.query.end_date;
    // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : "";
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : "";
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
    // Filter
    const filters = {
    // created_note_at: {
    // $gt: rawStartDate,
    // $lt: rawEndDate,
    // }
    };
    //   const scrapeModuleService: ScrapeModuleService = req.scope.resolve("scrapeModuleService");
    //   const professions = await scrapeModuleService.listProfessions();
    const result = await query.graph({
        entity: "profession",
        fields: ["*"],
        pagination,
        filters
    });
    res.json({
        profession: result.data,
        pagination: {
            take: take,
            skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        }
    });
};
exports.GET = GET;
const POST = async (
// req: AuthenticatedMedusaRequest<Profession>,
req, res) => {
    const workflow = (0, create_profession_1.default)(req.scope);
    // Validate and normalize input to match ProfessionInput: { name: string }
    const rawInput = req.body;
    if (!rawInput || typeof rawInput.name !== "string" || rawInput.name.trim() === "") {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Missing required field 'name' in request body");
    }
    const result = await workflow.run({
        input: {
            name: rawInput.name.trim(),
        },
    });
    if (result.errors && result.errors.length > 0) {
        throw result.errors[0].error;
    }
    res.json({ profession: result.result });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3NjcmFwZS9wcm9mZXNzaW9uL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUtBLDJDQUE4QztBQUM5QyxxREFFa0M7QUFHbEMsNkZBQTRFO0FBR3JFLE1BQU0sR0FBRyxHQUFHLEtBQUs7QUFDdEIsbUNBQW1DO0FBQ25DLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFFQSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUUvRCxXQUFXO0lBQ2IsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUM7SUFDbkQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUM7SUFDbkQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFvQixDQUFDO0lBQ3BELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBa0IsQ0FBQztJQUVoRCw0Q0FBNEM7SUFDNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNyRSxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBR3BFLE1BQU0sVUFBVSxHQUFRO1FBQ2xCLEtBQUssRUFBRTtZQUNQLFVBQVUsRUFBRSxNQUFNO1NBQ2pCO0tBQ0osQ0FBQTtJQUVELElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2QsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELElBQUksSUFBSSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2QsVUFBVSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7SUFDM0IsQ0FBQztJQUVELFNBQVM7SUFDVCxNQUFNLE9BQU8sR0FBUTtJQUNqQixxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixJQUFJO0tBQ1AsQ0FBQztJQUVOLCtGQUErRjtJQUMvRixxRUFBcUU7SUFHckUsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdCLE1BQU0sRUFBRSxZQUFZO1FBQ3BCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNiLFVBQVU7UUFDVixPQUFPO0tBQ1YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNMLFVBQVUsRUFBRSxNQUFNLENBQUMsSUFBSTtRQUN2QixVQUFVLEVBQUU7WUFDWixJQUFJLEVBQUUsSUFBSTtZQUNWLElBQUksRUFBRSxJQUFJO1lBQ1YsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUM7U0FDekQ7S0FDSixDQUFDLENBQUE7QUFDTixDQUFDLENBQUM7QUE1RFcsUUFBQSxHQUFHLE9BNERkO0FBR0ssTUFBTSxJQUFJLEdBQUcsS0FBSztBQUN2QiwrQ0FBK0M7QUFDL0MsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sUUFBUSxHQUFHLElBQUEsMkJBQXdCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELDBFQUEwRTtJQUMxRSxNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsSUFBVyxDQUFDO0lBQ2pDLElBQUksQ0FBQyxRQUFRLElBQUksT0FBTyxRQUFRLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsRUFBRSxDQUFDO1FBQ2xGLE1BQU0sSUFBSSxtQkFBVyxDQUFDLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSwrQ0FBK0MsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFDRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDOUIsS0FBSyxFQUFFO1lBQ0wsSUFBSSxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1NBQzNCO0tBQ0osQ0FBQyxDQUFDO0lBRUgsSUFBSSxNQUFNLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQzlDLE1BQU0sTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFDMUMsQ0FBQyxDQUFDO0FBdEJXLFFBQUEsSUFBSSxRQXNCZiJ9