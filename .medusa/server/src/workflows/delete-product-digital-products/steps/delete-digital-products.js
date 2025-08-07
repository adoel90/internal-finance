"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDigitalProductsSteps = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const digital_product_1 = require("../../../modules/digital-product");
exports.deleteDigitalProductsSteps = (0, workflows_sdk_1.createStep)("delete-digital-products", async ({ ids }, { container }) => {
    const digitalProductService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    await digitalProductService.softDeleteDigitalProducts(ids);
    return new workflows_sdk_1.StepResponse({}, ids);
}, async (ids, { container }) => {
    if (!ids) {
        return;
    }
    const digitalProductService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    await digitalProductService.restoreDigitalProducts(ids);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLWRpZ2l0YWwtcHJvZHVjdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2RlbGV0ZS1wcm9kdWN0LWRpZ2l0YWwtcHJvZHVjdHMvc3RlcHMvZGVsZXRlLWRpZ2l0YWwtcHJvZHVjdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQTRFO0FBQzVFLHNFQUF5RTtBQU81RCxRQUFBLDBCQUEwQixHQUFHLElBQUEsMEJBQVUsRUFDbEQseUJBQXlCLEVBQ3pCLEtBQUssRUFBRSxFQUFFLEdBQUcsRUFBNkIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDMUQsTUFBTSxxQkFBcUIsR0FDekIsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3Q0FBc0IsQ0FBQyxDQUFBO0lBRTNDLE1BQU0scUJBQXFCLENBQUMseUJBQXlCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFFMUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFBO0FBQ2xDLENBQUMsRUFDRCxLQUFLLEVBQUUsR0FBRyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMzQixJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDVCxPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0scUJBQXFCLEdBQ3pCLFNBQVMsQ0FBQyxPQUFPLENBQUMsd0NBQXNCLENBQUMsQ0FBQTtJQUUzQyxNQUFNLHFCQUFxQixDQUFDLHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFBO0FBQ3pELENBQUMsQ0FDRixDQUFBIn0=