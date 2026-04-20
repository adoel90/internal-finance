"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendOrderConfirmationWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const send_notification_1 = require("./steps/send-notification");
exports.sendOrderConfirmationWorkflow = (0, workflows_sdk_1.createWorkflow)("send-order-confirmation", ({ id }) => {
    const { data: orders } = (0, core_flows_1.useQueryGraphStep)({
        entity: "order",
        fields: [
            "id",
            "display_id",
            "email",
            "currency_code",
            "total",
            "items.*",
            "shipping_address.*",
            "billing_address.*",
            "shipping_methods.*",
            "customer.*",
            "total",
            "subtotal",
            "discount_total",
            "shipping_total",
            "tax_total",
            "item_subtotal",
            "item_total",
            "item_tax_total",
        ],
        filters: {
            id,
        },
        options: {
            throwIfKeyNotFound: true,
        },
    });
    const notification = (0, workflows_sdk_1.when)({ orders }, (data) => !!data.orders[0].email)
        .then(() => {
        return (0, send_notification_1.sendNotificationStep)([{
                to: orders[0].email,
                channel: "email",
                template: "order-placed",
                data: {
                    order: orders[0],
                },
            }]);
    });
    return new workflows_sdk_1.WorkflowResponse({
        notification,
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1vcmRlci1jb25maXJtYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3NlbmQtb3JkZXItY29uZmlybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUkwQztBQUMxQyw0REFBK0Q7QUFDL0QsaUVBQWdFO0FBTW5ELFFBQUEsNkJBQTZCLEdBQUcsSUFBQSw4QkFBYyxFQUN6RCx5QkFBeUIsRUFDekIsQ0FBQyxFQUFFLEVBQUUsRUFBaUIsRUFBRSxFQUFFO0lBQ3hCLE1BQU0sRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsSUFBQSw4QkFBaUIsRUFBQztRQUN6QyxNQUFNLEVBQUUsT0FBTztRQUNmLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixZQUFZO1lBQ1osT0FBTztZQUNQLGVBQWU7WUFDZixPQUFPO1lBQ1AsU0FBUztZQUNULG9CQUFvQjtZQUNwQixtQkFBbUI7WUFDbkIsb0JBQW9CO1lBQ3BCLFlBQVk7WUFDWixPQUFPO1lBQ1AsVUFBVTtZQUNWLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDaEIsV0FBVztZQUNYLGVBQWU7WUFDZixZQUFZO1lBQ1osZ0JBQWdCO1NBQ2pCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRTtTQUNIO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCLEVBQUUsSUFBSTtTQUN6QjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sWUFBWSxHQUFHLElBQUEsb0JBQUksRUFBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7U0FDdEUsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNULE9BQU8sSUFBQSx3Q0FBb0IsRUFBQyxDQUFDO2dCQUMzQixFQUFFLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQU07Z0JBQ3BCLE9BQU8sRUFBRSxPQUFPO2dCQUNoQixRQUFRLEVBQUUsY0FBYztnQkFDeEIsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO2lCQUNqQjthQUNGLENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUM7UUFDMUIsWUFBWTtLQUNiLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBIn0=