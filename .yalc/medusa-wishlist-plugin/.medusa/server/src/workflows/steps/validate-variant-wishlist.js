"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateVariantWishlistStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
exports.validateVariantWishlistStep = (0, workflows_sdk_1.createStep)("validate-variant-in-wishlist", async ({ variant_id, sales_channel_id, wishlist }, { container }) => {
    // validate whether variant is in wishlist
    const isInWishlist = wishlist.items?.some((item) => item.product_variant_id === variant_id);
    if (isInWishlist) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Variant is already in wishlist");
    }
    // validate that the variant is available in the specified sales channel
    const query = container.resolve("query");
    const { data } = await query.graph({
        entity: "variant",
        fields: ["product.sales_channels.*"],
        filters: {
            id: variant_id
        }
    });
    const variantInSalesChannel = data[0].product.sales_channels.some((sc) => sc.id === sales_channel_id);
    if (!variantInSalesChannel) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Variant is not available in the specified sales channel");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtdmFyaWFudC13aXNobGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3Mvc3RlcHMvdmFsaWRhdGUtdmFyaWFudC13aXNobGlzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFFQSxxRUFBOEQ7QUFDOUQscURBQXVEO0FBUTFDLFFBQUEsMkJBQTJCLEdBQUcsSUFBQSwwQkFBVSxFQUNuRCw4QkFBOEIsRUFDOUIsS0FBSyxFQUFFLEVBQ0wsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixRQUFRLEVBQ3lCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3BELDBDQUEwQztJQUMxQyxNQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFrQixLQUFLLFVBQVUsQ0FBQyxDQUFBO0lBRTNGLElBQUksWUFBWSxFQUFFLENBQUM7UUFDakIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIsZ0NBQWdDLENBQ2pDLENBQUE7SUFDSCxDQUFDO0lBRUQsd0VBQXdFO0lBQ3hFLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEMsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNqQyxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztRQUNwQyxPQUFPLEVBQUU7WUFDUCxFQUFFLEVBQUUsVUFBVTtTQUNmO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEtBQUssZ0JBQWdCLENBQUMsQ0FBQTtJQUVyRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUMzQixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qix5REFBeUQsQ0FDMUQsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQSJ9