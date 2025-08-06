"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWishlistItemWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const validate_wishlist_sales_channel_1 = require("./steps/validate-wishlist-sales-channel");
const create_wishlist_item_1 = require("./steps/create-wishlist-item");
const validate_variant_wishlist_1 = require("./steps/validate-variant-wishlist");
const validate_wishlist_exists_1 = require("./steps/validate-wishlist-exists");
exports.createWishlistItemWorkflow = (0, workflows_sdk_1.createWorkflow)("create-wishlist-item", (input) => {
    const { data: wishlists } = (0, core_flows_1.useQueryGraphStep)({
        entity: "wishlist",
        fields: ["*", "items.*"],
        filters: {
            customer_id: input.customer_id,
        },
    });
    (0, validate_wishlist_exists_1.validateWishlistExistsStep)({
        wishlists
    });
    (0, validate_wishlist_sales_channel_1.validateWishlistSalesChannelStep)({
        wishlist: wishlists[0],
        sales_channel_id: input.sales_channel_id
    });
    (0, validate_variant_wishlist_1.validateVariantWishlistStep)({
        variant_id: input.variant_id,
        sales_channel_id: input.sales_channel_id,
        wishlist: wishlists[0]
    });
    (0, create_wishlist_item_1.createWishlistItemStep)({
        product_variant_id: input.variant_id,
        wishlist_id: wishlists[0].id
    });
    // refetch wishlist
    const { data: updatedWishlists } = (0, core_flows_1.useQueryGraphStep)({
        entity: "wishlist",
        fields: ["*", "items.*", "items.product_variant.*"],
        filters: {
            id: wishlists[0].id
        },
    }).config({ name: "refetch-wishlist" });
    return new workflows_sdk_1.WorkflowResponse({
        wishlist: updatedWishlists[0],
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXdpc2hsaXN0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS13aXNobGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUFvRjtBQUNwRiw0REFBK0Q7QUFDL0QsNkZBQTBGO0FBQzFGLHVFQUFxRTtBQUNyRSxpRkFBK0U7QUFDL0UsK0VBQTZFO0FBUWhFLFFBQUEsMEJBQTBCLEdBQUcsSUFBQSw4QkFBYyxFQUN0RCxzQkFBc0IsRUFDdEIsQ0FBQyxLQUFzQyxFQUFFLEVBQUU7SUFDekMsTUFBTSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsR0FBRyxJQUFBLDhCQUFpQixFQUFDO1FBQzVDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLENBQUM7UUFDeEIsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1NBQy9CO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBQSxxREFBMEIsRUFBQztRQUN6QixTQUFTO0tBQ1YsQ0FBQyxDQUFBO0lBRUYsSUFBQSxrRUFBZ0MsRUFBQztRQUMvQixRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUN0QixnQkFBZ0IsRUFBRSxLQUFLLENBQUMsZ0JBQWdCO0tBQ3pDLENBQUMsQ0FBQTtJQUdGLElBQUEsdURBQTJCLEVBQUM7UUFDMUIsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1FBQzVCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7UUFDeEMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUM7S0FDdkIsQ0FBQyxDQUFBO0lBRUYsSUFBQSw2Q0FBc0IsRUFBQztRQUNyQixrQkFBa0IsRUFBRSxLQUFLLENBQUMsVUFBVTtRQUNwQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDN0IsQ0FBQyxDQUFBO0lBRUYsbUJBQW1CO0lBQ25CLE1BQU0sRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsR0FBRyxJQUFBLDhCQUFpQixFQUFDO1FBQ25ELE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUseUJBQXlCLENBQUM7UUFDbkQsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1NBQ3BCO0tBQ0YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxrQkFBa0IsRUFBRSxDQUFDLENBQUE7SUFFdkMsT0FBTyxJQUFJLGdDQUFnQixDQUFDO1FBQzFCLFFBQVEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7S0FDOUIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUEifQ==