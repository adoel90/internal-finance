"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
exports.POST = POST;
const utils_1 = require("@medusajs/framework/utils");
const create_task_status_1 = __importDefault(require("../../../workflows/create-task-status"));
async function POST(req, res) {
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(401).json({ error: "Missing Authorization header" });
    }
    const workflow = (0, create_task_status_1.default)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
}
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const result = await query.graph({
        entity: "status",
        fields: ["*"],
        // pagination,
        // filters
    });
    res.json({
        roles: result.data,
        pagination: {
            //   take: take,
            //   skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        }
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3Rhc2svc3RhdHVzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQVVFLG9CQWlCQztBQXJCRCxxREFBa0Y7QUFDbEYsK0ZBQTRFO0FBR3JFLEtBQUssVUFBVSxJQUFJLENBQ3hCLEdBQWlELEVBQ2pELEdBQW1CO0lBSW5CLE1BQU0sYUFBYSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFbkQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ25CLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFFRCxNQUFNLFFBQVEsR0FBRyxJQUFBLDRCQUF3QixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNyRCxNQUFNLE1BQU0sR0FBRyxNQUFNLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDOUIsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUF3QjtLQUN0QyxDQUFDLENBQUM7SUFDSCxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQ25CLENBQUM7QUFHUSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUdqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDL0IsTUFBTSxFQUFFLFFBQVE7UUFDaEIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsY0FBYztRQUNkLFVBQVU7S0FDWCxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ2xCLFVBQVUsRUFBRTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQztTQUMzRDtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXRCWSxRQUFBLEdBQUcsT0FzQmYifQ==