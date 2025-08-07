"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const digital_product_1 = require("../../../modules/digital-product");
const createDigitalProductStep = (0, workflows_sdk_1.createStep)("create-digital-product-step", async (data, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    const digitalProduct = await digitalProductModuleService
        .createDigitalProducts(data);
    return new workflows_sdk_1.StepResponse({
        digital_product: digitalProduct
    }, {
        digital_product: digitalProduct
    });
}, async ({ digital_product }, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    await digitalProductModuleService.deleteDigitalProducts(digital_product.id);
});
exports.default = createDigitalProductStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWRpZ2l0YWwtcHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY3JlYXRlLWRpZ2l0YWwtcHJvZHVjdC9zdGVwcy9jcmVhdGUtZGlnaXRhbC1wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBRzBDO0FBRTFDLHNFQUF5RTtBQU16RSxNQUFNLHdCQUF3QixHQUFHLElBQUEsMEJBQVUsRUFDekMsNkJBQTZCLEVBQzdCLEtBQUssRUFBRSxJQUFtQyxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUMzRCxNQUFNLDJCQUEyQixHQUMvQixTQUFTLENBQUMsT0FBTyxDQUFDLHdDQUFzQixDQUFDLENBQUE7SUFFM0MsTUFBTSxjQUFjLEdBQUcsTUFBTSwyQkFBMkI7U0FDckQscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUE7SUFFOUIsT0FBTyxJQUFJLDRCQUFZLENBQUM7UUFDdEIsZUFBZSxFQUFFLGNBQWM7S0FDaEMsRUFBRTtRQUNELGVBQWUsRUFBRSxjQUFjO0tBQ2hDLENBQUMsQ0FBQTtBQUNKLENBQUMsRUFDRCxLQUFLLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDM0MsTUFBTSwyQkFBMkIsR0FDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3Q0FBc0IsQ0FBQyxDQUFBO0lBRTNDLE1BQU0sMkJBQTJCLENBQUMscUJBQXFCLENBQ3JELGVBQWUsQ0FBQyxFQUFFLENBQ25CLENBQUE7QUFDSCxDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLHdCQUF3QixDQUFBIn0=