"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishlistItemWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const delete_wishlist_item_1 = require("./steps/delete-wishlist-item");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const validate_item_in_wishlist_1 = require("./steps/validate-item-in-wishlist");
const validate_wishlist_exists_1 = require("./steps/validate-wishlist-exists");
exports.deleteWishlistItemWorkflow = (0, workflows_sdk_1.createWorkflow)("delete-wishlist-item", (input) => {
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
    (0, validate_item_in_wishlist_1.validateItemInWishlistStep)({
        wishlist: wishlists[0],
        wishlist_item_id: input.wishlist_item_id
    });
    (0, delete_wishlist_item_1.deleteWishlistItemStep)(input);
    // refetch wishlist
    const { data: updatedWishlists } = (0, core_flows_1.useQueryGraphStep)({
        entity: "wishlist",
        fields: ["*", "items.*", "items.product_variant.*"],
        filters: {
            id: wishlists[0].id
        }
    }).config({ name: "refetch-wishlist" });
    return new workflows_sdk_1.WorkflowResponse({
        wishlist: updatedWishlists[0]
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpc2hsaXN0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2RlbGV0ZS13aXNobGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUFvRjtBQUNwRix1RUFBcUU7QUFDckUsNERBQStEO0FBQy9ELGlGQUE4RTtBQUM5RSwrRUFBNkU7QUFPaEUsUUFBQSwwQkFBMEIsR0FBRyxJQUFBLDhCQUFjLEVBQ3RELHNCQUFzQixFQUN0QixDQUFDLEtBQXNDLEVBQUUsRUFBRTtJQUN6QyxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDNUMsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsQ0FBQztRQUN4QixPQUFPLEVBQUU7WUFDUCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7U0FDL0I7S0FDRixDQUFDLENBQUE7SUFFRixJQUFBLHFEQUEwQixFQUFDO1FBQ3pCLFNBQVM7S0FDVixDQUFDLENBQUE7SUFFRixJQUFBLHNEQUEwQixFQUFDO1FBQ3pCLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7S0FDekMsQ0FBQyxDQUFBO0lBRUYsSUFBQSw2Q0FBc0IsRUFBQyxLQUFLLENBQUMsQ0FBQTtJQUU3QixtQkFBbUI7SUFDbkIsTUFBTSxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLElBQUEsOEJBQWlCLEVBQUM7UUFDbkQsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLENBQUMsR0FBRyxFQUFFLFNBQVMsRUFBRSx5QkFBeUIsQ0FBQztRQUNuRCxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7U0FDcEI7S0FDRixDQUFDLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLENBQUMsQ0FBQTtJQUV2QyxPQUFPLElBQUksZ0NBQWdCLENBQUM7UUFDMUIsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUMsQ0FBQztLQUM5QixDQUFDLENBQUE7QUFDSixDQUFDLENBQ0YsQ0FBQSJ9