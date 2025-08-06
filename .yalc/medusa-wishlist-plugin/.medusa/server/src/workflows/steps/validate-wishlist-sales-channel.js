"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWishlistSalesChannelStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateWishlistSalesChannelStep = (0, workflows_sdk_1.createStep)("validate-wishlist-sales-channel", async (input, { container }) => {
    const { wishlist, sales_channel_id } = input;
    if (wishlist.sales_channel_id !== sales_channel_id) {
        throw new Error("Wishlist does not belong to the current sales channel");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtd2lzaGxpc3Qtc2FsZXMtY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc3RlcHMvdmFsaWRhdGUtd2lzaGxpc3Qtc2FsZXMtY2hhbm5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBOEQ7QUFTakQsUUFBQSxnQ0FBZ0MsR0FBRyxJQUFBLDBCQUFVLEVBQ3hELGlDQUFpQyxFQUNqQyxLQUFLLEVBQUUsS0FBNEMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDcEUsTUFBTSxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxHQUFHLEtBQUssQ0FBQTtJQUU1QyxJQUFJLFFBQVEsQ0FBQyxnQkFBZ0IsS0FBSyxnQkFBZ0IsRUFBRSxDQUFDO1FBQ25ELE1BQU0sSUFBSSxLQUFLLENBQUMsdURBQXVELENBQUMsQ0FBQTtJQUMxRSxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUEifQ==