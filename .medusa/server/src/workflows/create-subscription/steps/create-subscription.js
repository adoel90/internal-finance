"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriptionStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const billing_1 = require("../../../modules/billing");
exports.createSubscriptionStep = (0, workflows_sdk_1.createStep)("create-subscription-step", async (data, { container }) => {
    const billingModuleService = container.resolve(billing_1.BILLING_MODULE);
    const subscription = await billingModuleService.createSubscriptions(data);
    return new workflows_sdk_1.StepResponse({
        subscription: subscription
    }, {
        subscription: subscription
    });
}, async ({ subscription }, { container }) => {
    if (!subscription) {
        return;
    }
    const billingModuleService = container.resolve(billing_1.BILLING_MODULE);
    await billingModuleService.deleteSubscriptions(subscription.id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXN1YnNjcmlwdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY3JlYXRlLXN1YnNjcmlwdGlvbi9zdGVwcy9jcmVhdGUtc3Vic2NyaXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUcwQztBQUMxQyxzREFBeUQ7QUFXNUMsUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLDBCQUEwQixFQUMxQixLQUFLLEVBQUUsSUFBaUMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDekQsTUFBTSxvQkFBb0IsR0FDeEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3QkFBYyxDQUFDLENBQUE7SUFFbkMsTUFBTSxZQUFZLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUV6RSxPQUFPLElBQUksNEJBQVksQ0FBQztRQUN0QixZQUFZLEVBQUUsWUFBWTtLQUMzQixFQUFFO1FBQ0MsWUFBWSxFQUFFLFlBQVk7S0FDN0IsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxFQUNELEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN4QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDbEIsT0FBTTtJQUNSLENBQUM7SUFDRCxNQUFNLG9CQUFvQixHQUN4QixTQUFTLENBQUMsT0FBTyxDQUFDLHdCQUFjLENBQUMsQ0FBQTtJQUVuQyxNQUFNLG9CQUFvQixDQUFDLG1CQUFtQixDQUMxQyxZQUFZLENBQUMsRUFBRSxDQUNsQixDQUFBO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==