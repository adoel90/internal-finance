"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteWishlistItemStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const wishlist_1 = require("../../modules/wishlist");
exports.deleteWishlistItemStep = (0, workflows_sdk_1.createStep)("delete-wishlist-item", async ({ wishlist_item_id }, { container }) => {
    const wishlistModuleService = container.resolve(wishlist_1.WISHLIST_MODULE);
    await wishlistModuleService.softDeleteWishlistItems(wishlist_item_id);
    return new workflows_sdk_1.StepResponse(void 0, wishlist_item_id);
}, async (wishlistItemId, { container }) => {
    const wishlistModuleService = container.resolve(wishlist_1.WISHLIST_MODULE);
    await wishlistModuleService.restoreWishlistItems([wishlistItemId]);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXdpc2hsaXN0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3N0ZXBzL2RlbGV0ZS13aXNobGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE0RTtBQUU1RSxxREFBd0Q7QUFNM0MsUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLHNCQUFzQixFQUN0QixLQUFLLEVBQUUsRUFBRSxnQkFBZ0IsRUFBK0IsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDekUsTUFBTSxxQkFBcUIsR0FBMEIsU0FBUyxDQUFDLE9BQU8sQ0FBQywwQkFBZSxDQUFDLENBQUE7SUFFdkYsTUFBTSxxQkFBcUIsQ0FBQyx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO0lBRXJFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFLGdCQUFnQixDQUFDLENBQUE7QUFDbkQsQ0FBQyxFQUNELEtBQUssRUFBRSxjQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3RDLE1BQU0scUJBQXFCLEdBQTBCLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQWUsQ0FBQyxDQUFBO0lBRXZGLE1BQU0scUJBQXFCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFBO0FBQ3BFLENBQUMsQ0FDRixDQUFBIn0=