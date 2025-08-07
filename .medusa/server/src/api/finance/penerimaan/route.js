"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const create_penerimaan_1 = require("../../../workflows/create-penerimaan");
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const workflow = (0, create_penerimaan_1.createPenerimaanWorkflow)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
};
exports.POST = POST;
// https://docs.medusajs.com/learn/fundamentals/module-links/query#apply-filters-and-pagination-on-linked-records
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    // Raw data
    const rawTake = parseInt(req.query.take);
    const rawSkip = parseInt(req.query.skip);
    const rawStartDate = req.query.start_date;
    const rawEndDate = req.query.end_date;
    const amountOfInflowFor = req.query.amount_of_inflow_for ? req.query.amount_of_inflow_for : "";
    // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : "";
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : "";
    //use default value if start_date or end_date is not provided
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
    // const startDate = rawStartDate ? rawStartDate : firstDayOfMonth.toISOString();
    // const endDate = rawEndDate ? rawEndDate : lastDayOfMonth.toISOString();
    const startDate = rawStartDate ? rawStartDate : firstDayOfMonth;
    const endDate = rawEndDate ? rawEndDate : lastDayOfMonth;
    console.log({
        rawStartDate,
        rawEndDate,
        firstDayOfMonth,
        lastDayOfMonth
    });
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
        created_note_at: {
            $gt: startDate,
            $lt: endDate,
        }
    };
    if (amountOfInflowFor !== "") {
        filters.amount_of_inflow_for = {
            $in: [amountOfInflowFor]
        };
    }
    const result = await query.graph({
        entity: "penerimaan",
        fields: ["*"],
        pagination,
        filters
    });
    res.json({
        penerimaan: result.data,
        pagination: {
            take: take,
            skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        }
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZXJpbWFhbi9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSw0RUFBK0U7QUFFL0UscURBRWtDO0FBRTNCLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sUUFBUSxHQUFHLElBQUEsNENBQXdCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JELE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQXVCO0tBQ25DLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFBO0FBVFksUUFBQSxJQUFJLFFBU2hCO0FBRUQsaUhBQWlIO0FBQzFHLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLFdBQVc7SUFDWCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztJQUNuRCxNQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFjLENBQUMsQ0FBQztJQUNuRCxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQW9CLENBQUM7SUFDcEQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDO0lBQ2hELE1BQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxv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