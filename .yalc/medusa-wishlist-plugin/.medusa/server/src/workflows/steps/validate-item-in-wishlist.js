"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateItemInWishlistStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.validateItemInWishlistStep = (0, workflows_sdk_1.createStep)("validate-item-in-wishlist", async ({ wishlist, wishlist_item_id }, { container }) => {
    const item = wishlist.items.find((item) => item.id === wishlist_item_id);
    if (!item) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Item does not exist in customer's wishlist");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtaXRlbS1pbi13aXNobGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc3RlcHMvdmFsaWRhdGUtaXRlbS1pbi13aXNobGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxxRUFBOEQ7QUFDOUQscURBQXVEO0FBTzFDLFFBQUEsMEJBQTBCLEdBQUcsSUFBQSwwQkFBVSxFQUNsRCwyQkFBMkIsRUFDM0IsS0FBSyxFQUFFLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFtQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN2RixNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxnQkFBZ0IsQ0FBQyxDQUFBO0lBRXhFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNWLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLDRDQUE0QyxDQUM3QyxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FDRixDQUFBIn0=