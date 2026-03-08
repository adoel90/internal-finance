"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = orderPlacedHandler;
const utils_1 = require("@medusajs/framework/utils");
async function orderPlacedHandler({ event: { data }, container, }) {
    const logger = container.resolve("logger");
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
}
exports.config = {
    event: `order.placed`,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLW9yZGVyLXBsYWNlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9oYW5kbGUtb3JkZXItcGxhY2VkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFDQW9EQztBQXZERCxxREFBbUQ7QUFHcEMsS0FBSyxVQUFVLGtCQUFrQixDQUFDLEVBQy9DLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxFQUNmLFNBQVMsR0FDc0I7SUFDL0IsTUFBTSxNQUFNLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUUxQyxNQUFNLENBQUMsSUFBSSxDQUFDLCtDQUErQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtJQUVyRSxzQ0FBc0M7SUFDdEMsTUFBTSxrQkFBa0IsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUUzRCw0REFBNEQ7SUFDNUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUM1RCxTQUFTLEVBQUUsQ0FBQyxPQUFPLENBQUM7S0FDckIsQ0FBQyxDQUFBO0lBRUYsNEJBQTRCO0lBQzVCLDBFQUEwRTtJQUMxRSxtRUFBbUU7SUFDbkUsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxXQUFpQyxDQUFBO0lBQ3BFLE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsV0FBaUMsQ0FBQTtJQUVwRSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDL0IsTUFBTSxDQUFDLElBQUksQ0FBQyx1Q0FBdUMsSUFBSSxDQUFDLEVBQUUsb0NBQW9DLENBQUMsQ0FBQTtRQUMvRixPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsaUNBQWlDLElBQUksQ0FBQyxFQUFFLEtBQUssVUFBVSxFQUFFLENBQUMsQ0FBQTtJQUV0RSxxREFBcUQ7SUFDckQsNkZBQTZGO0lBQzdGLE1BQU0sU0FBUyxHQUFHLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUVsQyxNQUFNLGFBQWEsR0FBc0I7UUFDdkMsSUFBSSxFQUFFLFVBQVU7UUFDaEIsSUFBSSxFQUFFLFVBQVU7UUFDaEIsUUFBUSxFQUFFLElBQUksQ0FBQyxFQUFFO1FBQ2pCLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztRQUM5QixVQUFVLEVBQUUsU0FBUyxFQUFFLFVBQVU7UUFDakMsVUFBVSxFQUFFLFNBQVMsRUFBRSxVQUFVO0tBQ2xDLENBQUE7SUFFRCw0REFBNEQ7SUFDNUQsTUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFckQsMkJBQTJCO0lBQzNCLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQztRQUNsQixJQUFJLEVBQUUseUJBQXlCO1FBQy9CLElBQUksRUFBRSxhQUFhO0tBQ3BCLENBQUMsQ0FBQTtJQUVGLE1BQU0sQ0FBQyxJQUFJLENBQUMsMERBQTBELElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFBO0FBQ2xGLENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLGNBQWM7Q0FDdEIsQ0FBQSJ9