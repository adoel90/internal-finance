"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fulfillDigitalOrderWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const send_digital_order_notification_1 = require("./steps/send-digital-order-notification");
exports.fulfillDigitalOrderWorkflow = (0, workflows_sdk_1.createWorkflow)("fulfill-digital-order", ({ id }) => {
    const { data: digitalProductOrders } = (0, core_flows_1.useQueryGraphStep)({
        entity: "digital_product_order",
        fields: [
            "*",
            "products.*",
            "products.medias.*",
            "order.*",
            "order.fulfillments.*"
        ],
        filters: {
            id,
        },
        options: {
            throwIfKeyNotFound: true
        }
    });
    (0, send_digital_order_notification_1.sendDigitalOrderNotificationStep)({
        digital_product_order: digitalProductOrders[0]
    });
    core_flows_1.markOrderFulfillmentAsDeliveredWorkflow.runAsStep({
        input: {
            orderId: digitalProductOrders[0].order.id,
            fulfillmentId: digitalProductOrders[0].order.fulfillments[0].id
        }
    });
    return new workflows_sdk_1.WorkflowResponse(digitalProductOrders[0]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2Z1bGZpbGwtZGlnaXRhbC1vcmRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFHMEM7QUFDMUMsNERBR29DO0FBQ3BDLDZGQUEwRjtBQU03RSxRQUFBLDJCQUEyQixHQUFHLElBQUEsOEJBQWMsRUFDdkQsdUJBQXVCLEVBQ3ZCLENBQUMsRUFBRSxFQUFFLEVBQW9DLEVBQUUsRUFBRTtJQUMzQyxNQUFNLEVBQUUsSUFBSSxFQUFFLG9CQUFvQixFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN2RCxNQUFNLEVBQUUsdUJBQXVCO1FBQy9CLE1BQU0sRUFBRTtZQUNOLEdBQUc7WUFDSCxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLFNBQVM7WUFDVCxzQkFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCxFQUFFO1NBQ0g7UUFDRCxPQUFPLEVBQUU7WUFDUCxrQkFBa0IsRUFBRSxJQUFJO1NBQ3pCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBQSxrRUFBZ0MsRUFBQztRQUMvQixxQkFBcUIsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7S0FDL0MsQ0FBQyxDQUFBO0lBRUYsb0RBQXVDLENBQUMsU0FBUyxDQUFDO1FBQ2hELEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN6QyxhQUFhLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ2hFO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUN6QixvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FDeEIsQ0FBQTtBQUNILENBQUMsQ0FDRixDQUFBIn0=