"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveDigitalProductsToDeleteStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const digital_product_variant_1 = __importDefault(require("../../../links/digital-product-variant"));
exports.retrieveDigitalProductsToDeleteStep = (0, workflows_sdk_1.createStep)("retrieve-digital-products-to-delete", async ({ product_id }, { container }) => {
    const productService = container.resolve("product");
    const query = container.resolve("query");
    const productVariants = await productService.listProductVariants({
        product_id: product_id
    }, {
        withDeleted: true
    });
    const { data } = await query.graph({
        entity: digital_product_variant_1.default.entryPoint,
        fields: ["digital_product.*"],
        filters: {
            product_variant_id: productVariants.map((v) => v.id)
        }
    });
    const digitalProductIds = data.map((d) => d.digital_product.id);
    return new workflows_sdk_1.StepResponse(digitalProductIds);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV0cmlldmUtZGlnaXRhbC1wcm9kdWN0cy10by1kZWxldGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2RlbGV0ZS1wcm9kdWN0LWRpZ2l0YWwtcHJvZHVjdHMvc3RlcHMvcmV0cmlldmUtZGlnaXRhbC1wcm9kdWN0cy10by1kZWxldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEscUVBQTRFO0FBQzVFLHFHQUE4RTtBQU1qRSxRQUFBLG1DQUFtQyxHQUFHLElBQUEsMEJBQVUsRUFDM0QscUNBQXFDLEVBQ3JDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBNEMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEYsTUFBTSxjQUFjLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQTtJQUNuRCxNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXhDLE1BQU0sZUFBZSxHQUFHLE1BQU0sY0FBYyxDQUFDLG1CQUFtQixDQUFDO1FBQy9ELFVBQVUsRUFBRSxVQUFVO0tBQ3ZCLEVBQUU7UUFDRCxXQUFXLEVBQUUsSUFBSTtLQUNsQixDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxpQ0FBeUIsQ0FBQyxVQUFVO1FBQzVDLE1BQU0sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1FBQzdCLE9BQU8sRUFBRTtZQUNQLGtCQUFrQixFQUFFLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDckQ7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFL0QsT0FBTyxJQUFJLDRCQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtBQUM1QyxDQUFDLENBQ0YsQ0FBQSJ9