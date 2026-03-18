"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const create_subscription_1 = __importDefault(require("../../../workflows/create-subscription"));
const billing_1 = require("../../../modules/billing");
const GET = async (req, res) => {
    const billingModuleService = req.scope.resolve(billing_1.BILLING_MODULE);
    const subscriptions = await billingModuleService.listSubscriptions();
    res.json({ subscriptions });
};
exports.GET = GET;
const POST = async (req, res) => {
    const { organization_id, plan_id, current_period_start, current_period_end, started_at } = req.body;
    const { result, errors } = await create_subscription_1.default.run({
        input: {
            organization_id,
            plan_id,
            current_period_start: new Date(current_period_start),
            current_period_end: new Date(current_period_end),
            started_at: started_at ? new Date(started_at) : undefined
        }
    });
    if (Array.isArray(errors) && errors.length > 0) {
        throw errors[0].error;
    }
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3N1YnNjcmlwdGlvbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEsaUdBQStFO0FBQy9FLHNEQUF5RDtBQUdsRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDbkUsTUFBTSxvQkFBb0IsR0FBeUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsd0JBQWMsQ0FBQyxDQUFBO0lBQ3BGLE1BQU0sYUFBYSxHQUFHLE1BQU0sb0JBQW9CLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUNwRSxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQTtBQUM3QixDQUFDLENBQUE7QUFKWSxRQUFBLEdBQUcsT0FJZjtBQVVNLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNwRSxNQUFNLEVBQ0osZUFBZSxFQUNmLE9BQU8sRUFDUCxvQkFBb0IsRUFDcEIsa0JBQWtCLEVBQ2xCLFVBQVUsRUFDWCxHQUFHLEdBQUcsQ0FBQyxJQUE4QixDQUFBO0lBRXRDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSw2QkFBMEIsQ0FBQyxHQUFHLENBQUM7UUFDOUQsS0FBSyxFQUFFO1lBQ0gsZUFBZTtZQUNmLE9BQU87WUFDUCxvQkFBb0IsRUFBRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQztZQUNwRCxrQkFBa0IsRUFBRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsQ0FBQztZQUNoRCxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUztTQUM1RDtLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQy9DLE1BQU0sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQTtJQUN2QixDQUFDO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNsQixDQUFDLENBQUE7QUF4QlksUUFBQSxJQUFJLFFBd0JoQiJ9