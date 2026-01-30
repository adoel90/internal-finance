"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const create_subscription_1 = require("./steps/create-subscription");
const createSubscriptionWorkflow = (0, workflows_sdk_1.createWorkflow)("create-subscription", (input) => {
    const { subscription } = (0, create_subscription_1.createSubscriptionStep)(input);
    (0, core_flows_1.emitEventStep)({
        eventName: "subscription.created",
        data: subscription
    });
    return new workflows_sdk_1.WorkflowResponse({
        subscription
    });
});
exports.default = createSubscriptionWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zdWJzY3JpcHRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFHMEM7QUFDMUMsNERBQTJEO0FBQzNELHFFQUdvQztBQUVwQyxNQUFNLDBCQUEwQixHQUFHLElBQUEsOEJBQWMsRUFDL0MscUJBQXFCLEVBQ3JCLENBQUMsS0FBa0MsRUFBRSxFQUFFO0lBRXJDLE1BQU0sRUFBRSxZQUFZLEVBQUUsR0FBRyxJQUFBLDRDQUFzQixFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRXRELElBQUEsMEJBQWEsRUFBQztRQUNWLFNBQVMsRUFBRSxzQkFBc0I7UUFDakMsSUFBSSxFQUFFLFlBQVk7S0FDckIsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDO1FBQ3hCLFlBQVk7S0FDZixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLDBCQUEwQixDQUFBIn0=