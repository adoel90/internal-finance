"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = exports.POST = void 0;
const create_pengeluaran_1 = require("../../../workflows/create-pengeluaran");
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const workflow = (0, create_pengeluaran_1.createPengeluaranWorkflow)(req.scope);
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
    // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : ""; //10
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : ""; //0 
    //use default value if start_date or end_date is not provided
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
    const amountOfOutflowFor = req.query.amount_of_outflow_for ? req.query.amount_of_outflow_for : "";
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
        created_note_at: {
            $gt: startDate,
            $lt: endDate,
        }
    };
    if (amountOfOutflowFor !== "") {
        filters.amount_of_outflow_for = {
            $in: [amountOfOutflowFor]
        };
    }
    const result = await query.graph({
        entity: "pengeluaran",
        fields: ["*"],
        pagination,
        filters
    });
    res.json({
        pengeluaran: result.data,
        pagination: {
            take: take,
            skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        }
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZ2VsdWFyYW4vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUUsOEVBQWlGO0FBRWpGLHFEQUVrQztBQUUzQixNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLFFBQVEsR0FBRyxJQUFBLDhDQUF5QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDOUIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUF3QjtLQUN0QyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUMsQ0FBQTtBQVRZLFFBQUEsSUFBSSxRQVNoQjtBQUdILGlIQUFpSDtBQUMxRyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxXQUFXO0lBQ1gsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUM7SUFDbkQsTUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBYyxDQUFDLENBQUM7SUFDbkQsTUFBTSxZQUFZLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFvQixDQUFDO0lBQ3BELE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBa0IsQ0FBQztJQUdoRCw0Q0FBNEM7SUFDNUMsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFD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