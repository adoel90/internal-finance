"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const create_digital_product_order_1 = __importDefault(require("./steps/create-digital-product-order"));
const digital_product_1 = require("../../modules/digital-product");
const createDigitalProductOrderWorkflow = (0, workflows_sdk_1.createWorkflow)("create-digital-product-order", (input) => {
    const { id } = core_flows_1.completeCartWorkflow.runAsStep({
        input: {
            id: input.cart_id
        }
    });
    const { data: orders } = (0, core_flows_1.useQueryGraphStep)({
        entity: "order",
        fields: [
            "*",
            "items.*",
            "items.variant.*",
            "items.variant.digital_product.*",
            "shipping_address.*",
        ],
        filters: {
            id
        },
        options: {
            throwIfKeyNotFound: true
        }
    });
    const itemsWithDigitalProducts = (0, workflows_sdk_1.transform)({
        orders
    }, (data) => {
        return data.orders[0].items.filter((item) => item.variant.digital_product !== undefined);
    });
    const digital_product_order = (0, workflows_sdk_1.when)("create-digital-product-order-condition", itemsWithDigitalProducts, (itemsWithDigitalProducts) => {
        return itemsWithDigitalProducts.length;
    })
        .then(() => {
        const { digital_product_order, } = (0, create_digital_product_order_1.default)({
            items: orders[0].items
        });
        (0, core_flows_1.createRemoteLinkStep)([{
                [digital_product_1.DIGITAL_PRODUCT_MODULE]: {
                    digital_product_order_id: digital_product_order.id
                },
                [utils_1.Modules.ORDER]: {
                    order_id: id
                }
            }]);
        core_flows_1.createOrderFulfillmentWorkflow.runAsStep({
            input: {
                order_id: id,
                items: (0, workflows_sdk_1.transform)({
                    itemsWithDigitalProducts
                }, (data) => {
                    return data.itemsWithDigitalProducts.map((item) => ({
                        id: item.id,
                        quantity: item.quantity
                    }));
                })
            }
        });
        (0, core_flows_1.emitEventStep)({
            eventName: "digital_product_order.created",
            data: {
                id: digital_product_order.id
            }
        });
        return digital_product_order;
    });
    return new workflows_sdk_1.WorkflowResponse({
        order: orders[0],
        digital_product_order
    });
});
exports.default = createDigitalProductOrderWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1kaWdpdGFsLXByb2R1Y3Qtb3JkZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRUFLMEM7QUFDMUMsNERBTW9DO0FBQ3BDLHFEQUVrQztBQUNsQyx3R0FBZ0Y7QUFDaEYsbUVBQXNFO0FBTXRFLE1BQU0saUNBQWlDLEdBQUcsSUFBQSw4QkFBYyxFQUN0RCw4QkFBOEIsRUFDOUIsQ0FBQyxLQUFvQixFQUFFLEVBQUU7SUFDdkIsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLGlDQUFvQixDQUFDLFNBQVMsQ0FBQztRQUM1QyxLQUFLLEVBQUU7WUFDTCxFQUFFLEVBQUUsS0FBSyxDQUFDLE9BQU87U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDekMsTUFBTSxFQUFFLE9BQU87UUFDZixNQUFNLEVBQUU7WUFDTixHQUFHO1lBQ0gsU0FBUztZQUNULGlCQUFpQjtZQUNqQixpQ0FBaUM7WUFDakMsb0JBQW9CO1NBQ3JCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRTtTQUNIO1FBQ0QsT0FBTyxFQUFFO1lBQ1Asa0JBQWtCLEVBQUUsSUFBSTtTQUN6QjtLQUNGLENBQUMsQ0FBQTtJQUVGLE1BQU0sd0JBQXdCLEdBQUcsSUFBQSx5QkFBUyxFQUFDO1FBQ3pDLE1BQU07S0FDUCxFQUNELENBQUMsSUFBSSxFQUFFLEVBQUU7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDLENBQUE7SUFDMUYsQ0FBQyxDQUNBLENBQUE7SUFFRCxNQUFNLHFCQUFxQixHQUFHLElBQUEsb0JBQUksRUFBQyx3Q0FBd0MsRUFBRSx3QkFBd0IsRUFBRSxDQUFDLHdCQUF3QixFQUFFLEVBQUU7UUFDbEksT0FBTyx3QkFBd0IsQ0FBQyxNQUFNLENBQUE7SUFDeEMsQ0FBQyxDQUFDO1NBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNULE1BQU0sRUFDSixxQkFBcUIsR0FDdEIsR0FBRyxJQUFBLHNDQUE2QixFQUFDO1lBQ2hDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSztTQUN2QixDQUFDLENBQUE7UUFFRixJQUFBLGlDQUFvQixFQUFDLENBQUM7Z0JBQ3BCLENBQUMsd0NBQXNCLENBQUMsRUFBRTtvQkFDeEIsd0JBQXdCLEVBQUUscUJBQXFCLENBQUMsRUFBRTtpQkFDbkQ7Z0JBQ0QsQ0FBQyxlQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ2YsUUFBUSxFQUFFLEVBQUU7aUJBQ2I7YUFDRixDQUFDLENBQUMsQ0FBQTtRQUVILDJDQUE4QixDQUFDLFNBQVMsQ0FBQztZQUN2QyxLQUFLLEVBQUU7Z0JBQ0wsUUFBUSxFQUFFLEVBQUU7Z0JBQ1osS0FBSyxFQUFFLElBQUEseUJBQVMsRUFBQztvQkFDZix3QkFBd0I7aUJBQ3pCLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRTtvQkFDVixPQUFPLElBQUksQ0FBQyx3QkFBd0IsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7d0JBQ2xELEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTt3QkFDWCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7cUJBQ3hCLENBQUMsQ0FBQyxDQUFBO2dCQUNMLENBQUMsQ0FBQzthQUNIO1NBQ0YsQ0FBQyxDQUFBO1FBRUYsSUFBQSwwQkFBYSxFQUFDO1lBQ1osU0FBUyxFQUFFLCtCQUErQjtZQUMxQyxJQUFJLEVBQUU7Z0JBQ0osRUFBRSxFQUFFLHFCQUFxQixDQUFDLEVBQUU7YUFDN0I7U0FDRixDQUFDLENBQUE7UUFFRixPQUFPLHFCQUFxQixDQUFBO0lBQzlCLENBQUMsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDO1FBQzFCLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLHFCQUFxQjtLQUN0QixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLGlDQUFpQyxDQUFBIn0=