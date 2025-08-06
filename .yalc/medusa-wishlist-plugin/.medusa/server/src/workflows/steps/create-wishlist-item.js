"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWishlistItemStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const wishlist_1 = require("../../modules/wishlist");
exports.createWishlistItemStep = (0, workflows_sdk_1.createStep)("create-wishlist-item", async (input, { container }) => {
    const wishlistModuleService = container.resolve(wishlist_1.WISHLIST_MODULE);
    const item = await wishlistModuleService.createWishlistItems(input);
    return new workflows_sdk_1.StepResponse(item, item.id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const wishlistModuleService = container.resolve(wishlist_1.WISHLIST_MODULE);
    await wishlistModuleService.deleteWishlistItems(id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXdpc2hsaXN0LWl0ZW0uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3N0ZXBzL2NyZWF0ZS13aXNobGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE0RTtBQUU1RSxxREFBd0Q7QUFPM0MsUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLHNCQUFzQixFQUN0QixLQUFLLEVBQUUsS0FBa0MsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDMUQsTUFBTSxxQkFBcUIsR0FDekIsU0FBUyxDQUFDLE9BQU8sQ0FBQywwQkFBZSxDQUFDLENBQUE7SUFFcEMsTUFBTSxJQUFJLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVuRSxPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ3hDLENBQUMsRUFDRCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMxQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDUixPQUFNO0lBQ1IsQ0FBQztJQUNELE1BQU0scUJBQXFCLEdBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQWUsQ0FBQyxDQUFBO0lBRXBDLE1BQU0scUJBQXFCLENBQUMsbUJBQW1CLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDckQsQ0FBQyxDQUNGLENBQUEifQ==