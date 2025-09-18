"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
exports.POST = POST;
const utils_1 = require("@medusajs/framework/utils");
const create_member_1 = __importDefault(require("../../workflows/create-member"));
async function POST(req, res) {
    // If `actor_id` is present, the request carries 
    // authentication for an existing member
    if (req.auth_context.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a member.");
    }
    const authorization = req.headers['authorization'];
    if (!authorization) {
        return res.status(401).json({ error: "Missing Authorization header" });
    }
    if (req.auth_context.actor_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Request already authenticated as a member.");
    }
    const workflow = (0, create_member_1.default)(req.scope);
    const result = await workflow.run({
        input: {
            member: req.body,
            authIdentityId: req.auth_context.auth_identity_id,
        }
    });
    res.json(result);
}
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const result = await query.graph({
        entity: "member",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL21lbWJlci9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFjRSxvQkFvQ0M7QUE3Q0QscURBQWtGO0FBQ2xGLGtGQUFnRTtBQVF6RCxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUE0QyxFQUM1QyxHQUFtQjtJQUVuQixpREFBaUQ7SUFDakQsd0NBQXdDO0lBQ3hDLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUM5QixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qiw0Q0FBNEMsQ0FDN0MsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLGFBQWEsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBRW5ELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNuQixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLDhCQUE4QixFQUFFLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLDRDQUE0QyxDQUM3QyxDQUFBO0lBQ0gsQ0FBQztJQUlELE1BQU0sUUFBUSxHQUFHLElBQUEsdUJBQW9CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pELE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLEVBQUU7WUFDTCxNQUFNLEVBQUUsR0FBRyxDQUFDLElBQUk7WUFDaEIsY0FBYyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsZ0JBQWdCO1NBQ2xEO0tBQ0YsQ0FBQyxDQUFDO0lBQ0gsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNuQixDQUFDO0FBR00sTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQy9CLE1BQU0sRUFBRSxRQUFRO1FBQ2hCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNiLGNBQWM7UUFDZCxVQUFVO0tBQ1gsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSTtRQUNsQixVQUFVLEVBQUU7WUFDWixnQkFBZ0I7WUFDaEIsZ0JBQWdCO1lBQ2QsS0FBSyxFQUFFLE1BQU0sQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxJQUFJLENBQUM7U0FDM0Q7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUF0QlksUUFBQSxHQUFHLE9Bc0JmIn0=