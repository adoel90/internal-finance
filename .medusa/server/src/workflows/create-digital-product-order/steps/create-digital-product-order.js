"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const types_1 = require("../../../modules/digital-product/types");
const digital_product_1 = require("../../../modules/digital-product");
const createDigitalProductOrderStep = (0, workflows_sdk_1.createStep)("create-digital-product-order", async ({ items }, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    const digitalProductIds = items.map((item) => item.variant.digital_product.id);
    const digitalProductOrder = await digitalProductModuleService.createDigitalProductOrders({
        status: types_1.OrderStatus.PENDING,
        products: digitalProductIds
    });
    return new workflows_sdk_1.StepResponse({
        digital_product_order: digitalProductOrder
    }, {
        digital_product_order: digitalProductOrder,
    });
}, async ({ digital_product_order }, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    await digitalProductModuleService.deleteDigitalProductOrders(digital_product_order.id);
});
exports.default = createDigitalProductOrderStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWRpZ2l0YWwtcHJvZHVjdC1vcmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvY3JlYXRlLWRpZ2l0YWwtcHJvZHVjdC1vcmRlci9zdGVwcy9jcmVhdGUtZGlnaXRhbC1wcm9kdWN0LW9yZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBRzBDO0FBTTFDLGtFQUFvRTtBQUVwRSxzRUFBeUU7QUFXekUsTUFBTSw2QkFBNkIsR0FBRyxJQUFBLDBCQUFVLEVBQzlDLDhCQUE4QixFQUM5QixLQUFLLEVBQUUsRUFBRSxLQUFLLEVBQWEsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDNUMsTUFBTSwyQkFBMkIsR0FDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3Q0FBc0IsQ0FBQyxDQUFBO0lBRTNDLE1BQU0saUJBQWlCLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUE7SUFFOUUsTUFBTSxtQkFBbUIsR0FBRyxNQUFNLDJCQUEyQixDQUFDLDBCQUEwQixDQUFDO1FBQ3ZGLE1BQU0sRUFBRSxtQkFBVyxDQUFDLE9BQU87UUFDM0IsUUFBUSxFQUFFLGlCQUFpQjtLQUM1QixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQztRQUN0QixxQkFBcUIsRUFBRSxtQkFBbUI7S0FDM0MsRUFBRTtRQUNELHFCQUFxQixFQUFFLG1CQUFtQjtLQUMzQyxDQUFDLENBQUE7QUFDSixDQUFDLEVBQ0QsS0FBSyxFQUFFLEVBQUUscUJBQXFCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDakQsTUFBTSwyQkFBMkIsR0FDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3Q0FBc0IsQ0FBQyxDQUFBO0lBRTNDLE1BQU0sMkJBQTJCLENBQUMsMEJBQTBCLENBQUMscUJBQXFCLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDeEYsQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSw2QkFBNkIsQ0FBQSJ9