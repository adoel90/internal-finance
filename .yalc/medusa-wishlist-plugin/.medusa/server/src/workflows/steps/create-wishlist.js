"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWishlistStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const wishlist_1 = require("../../modules/wishlist");
exports.createWishlistStep = (0, workflows_sdk_1.createStep)("create-wishlist", async (input, { container }) => {
    const wishlistModuleService = container.resolve(wishlist_1.WISHLIST_MODULE);
    const wishlist = await wishlistModuleService.createWishlists(input);
    return new workflows_sdk_1.StepResponse(wishlist, wishlist.id);
}, async (id, { container }) => {
    if (!id) {
        return;
    }
    const wishlistModuleService = container.resolve(wishlist_1.WISHLIST_MODULE);
    await wishlistModuleService.deleteWishlists(id);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXdpc2hsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zdGVwcy9jcmVhdGUtd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTRFO0FBQzVFLHFEQUF3RDtBQVEzQyxRQUFBLGtCQUFrQixHQUFHLElBQUEsMEJBQVUsRUFDMUMsaUJBQWlCLEVBQ2pCLEtBQUssRUFBRSxLQUE4QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN0RCxNQUFNLHFCQUFxQixHQUN6QixTQUFTLENBQUMsT0FBTyxDQUFDLDBCQUFlLENBQUMsQ0FBQTtJQUVwQyxNQUFNLFFBQVEsR0FBRyxNQUFNLHFCQUFxQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVuRSxPQUFPLElBQUksNEJBQVksQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2hELENBQUMsRUFDRCxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMxQixJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDUixPQUFNO0lBQ1IsQ0FBQztJQUNELE1BQU0scUJBQXFCLEdBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsMEJBQWUsQ0FBQyxDQUFBO0lBRXBDLE1BQU0scUJBQXFCLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQ2pELENBQUMsQ0FDRixDQUFBIn0=