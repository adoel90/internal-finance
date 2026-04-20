"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = orderPlacedHandler;
const utils_1 = require("@medusajs/framework/utils");
const send_order_confirmation_1 = require("../workflows/send-order-confirmation");
async function orderPlacedHandler({ event: { data }, container, }) {
    const logger = container.resolve("logger");
    console.log("=== SUBSCRIBER TRIGGERED: order.placed ===");
    console.log("Payload data order.placed : ", data);
    logger.info(`Processing order.placed event for order ID: ${data.id}`);
    // 1. Resolve the Order Module Service
    const orderModuleService = container.resolve(utils_1.Modules.ORDER);
    // 2. Retrieve the full order details, including line items.
    const order = await orderModuleService.retrieveOrder(data.id, {
        relations: ["items"]
    });
    // 3. Extract Domain details
    // Here we assume the domain metadata is attached to the order's metadata.
    // E.g., { domain_name: "example.com", domain_slug: "example-com" }
    const domainName = order.metadata?.domain_name;
    const domainSlug = order.metadata?.domain_slug;
    if (!domainName || !domainSlug) {
        logger.info(`Skipping domain registration: Order ${data.id} does not contain domain metadata.`);
        return;
    }
    logger.info(`Found domain details on order ${data.id}: ${domainName}`);
    // 4. Construct the payload for the CreateDomainInput
    // We assume the first line item in the order is the one related to this domain registration.
    const firstItem = order.items?.[0];
    const domainPayload = {
        name: domainName,
        slug: domainSlug,
        order_id: data.id,
        customer_id: order.customer_id,
        product_id: firstItem?.product_id,
        variant_id: firstItem?.variant_id,
    };
    // 5. Resolve the Event Bus to emit your custom domain event
    const eventBus = container.resolve(utils_1.Modules.EVENT_BUS);
    // 6. Emit the custom event
    await eventBus.emit({
        name: "registered-domain-event",
        data: domainPayload
    });
    logger.info(`Successfully emitted registered-domain-event for order ${data.id}`);
    /**
     *
     *
     * * OPTIONAL: Trigger the sendOrderConfirmationWorkflow to send an email confirmation to the customer.
     *   - This assumes that the order.placed event does not already trigger an email, or you want to send a custom email.
     *   - If your Medusa setup already sends an order confirmation email on order.placed, you can skip this step to avoid duplicate emails.
     */
    await (0, send_order_confirmation_1.sendOrderConfirmationWorkflow)(container)
        .run({
        input: {
            id: data.id,
        },
    });
}
exports.config = {
    event: `order.placed`,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLW9yZGVyLXBsYWNlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9oYW5kbGUtb3JkZXItcGxhY2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLHFDQXdFQztBQTVFRCxxREFBbUQ7QUFFbkQsa0ZBQW9GO0FBRXJFLEtBQUssVUFBVSxrQkFBa0IsQ0FBQyxFQUMvQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDZixTQUFTLEdBQ3NCO0lBQy9CLE1BQU0sTUFBTSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUE7SUFFMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFBO0lBQ3pELE9BQU8sQ0FBQyxHQUFHLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLENBQUE7SUFFakQsTUFBTSxDQUFDLElBQUksQ0FBQywrQ0FBK0MsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7SUFFckUsc0NBQXNDO0lBQ3RDLE1BQU0sa0JBQWtCLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFM0QsNERBQTREO0lBQzVELE1BQU0sS0FBSyxHQUFHLE1BQU0sa0JBQWtCLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUU7UUFDNUQsU0FBUyxFQUFFLENBQUMsT0FBTyxDQUFDO0tBQ3JCLENBQUMsQ0FBQTtJQUVGLDRCQUE0QjtJQUM1QiwwRUFBMEU7SUFDMUUsbUVBQW1FO0lBQ25FLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBaUMsQ0FBQTtJQUNwRSxNQUFNLFVBQVUsR0FBRyxLQUFLLENBQUMsUUFBUSxFQUFFLFdBQWlDLENBQUE7SUFFcEUsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsdUNBQXVDLElBQUksQ0FBQyxFQUFFLG9DQUFvQyxDQUFDLENBQUE7UUFDL0YsT0FBTTtJQUNSLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLGlDQUFpQyxJQUFJLENBQUMsRUFBRSxLQUFLLFVBQVUsRUFBRSxDQUFDLENBQUE7SUFFdEUscURBQXFEO0lBQ3JELDZGQUE2RjtJQUM3RixNQUFNLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFbEMsTUFBTSxhQUFhLEdBQXNCO1FBQ3ZDLElBQUksRUFBRSxVQUFVO1FBQ2hCLElBQUksRUFBRSxVQUFVO1FBQ2hCLFFBQVEsRUFBRSxJQUFJLENBQUMsRUFBRTtRQUNqQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7UUFDOUIsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVO1FBQ2pDLFVBQVUsRUFBRSxTQUFTLEVBQUUsVUFBVTtLQUNsQyxDQUFBO0lBRUQsNERBQTREO0lBQzVELE1BQU0sUUFBUSxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFNBQVMsQ0FBQyxDQUFBO0lBRXJELDJCQUEyQjtJQUMzQixNQUFNLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDbEIsSUFBSSxFQUFFLHlCQUF5QjtRQUMvQixJQUFJLEVBQUUsYUFBYTtLQUNwQixDQUFDLENBQUE7SUFFRixNQUFNLENBQUMsSUFBSSxDQUFDLDBEQUEwRCxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUloRjs7Ozs7O09BTUc7SUFDSCxNQUFNLElBQUEsdURBQTZCLEVBQUMsU0FBUyxDQUFDO1NBQzNDLEdBQUcsQ0FBQztRQUNILEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRTtTQUNaO0tBQ0YsQ0FBQyxDQUFBO0FBRU4sQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFxQjtJQUN0QyxLQUFLLEVBQUUsY0FBYztDQUN0QixDQUFBIn0=