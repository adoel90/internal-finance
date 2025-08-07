"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const digital_product_1 = require("../../../modules/digital-product");
const createDigitalProductMediasStep = (0, workflows_sdk_1.createStep)("create-digital-product-medias", async ({ medias }, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    const digitalProductMedias = await digitalProductModuleService
        .createDigitalProductMedias(medias);
    return new workflows_sdk_1.StepResponse({
        digital_product_medias: digitalProductMedias
    }, {
        digital_product_medias: digitalProductMedias
    });
}, async ({ digital_product_medias }, { container }) => {
    const digitalProductModuleService = container.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    await digitalProductModuleService.deleteDigitalProductMedias(digital_product_medias.map((media) => media.id));
});
exports.default = createDigitalProductMediasStep;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLWRpZ2l0YWwtcHJvZHVjdC1tZWRpYXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1kaWdpdGFsLXByb2R1Y3Qvc3RlcHMvY3JlYXRlLWRpZ2l0YWwtcHJvZHVjdC1tZWRpYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFHMEM7QUFFMUMsc0VBQXlFO0FBY3pFLE1BQU0sOEJBQThCLEdBQUcsSUFBQSwwQkFBVSxFQUMvQywrQkFBK0IsRUFDL0IsS0FBSyxFQUFFLEVBQ0wsTUFBTSxFQUM4QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN2RCxNQUFNLDJCQUEyQixHQUMvQixTQUFTLENBQUMsT0FBTyxDQUFDLHdDQUFzQixDQUFDLENBQUE7SUFFM0MsTUFBTSxvQkFBb0IsR0FBRyxNQUFNLDJCQUEyQjtTQUMzRCwwQkFBMEIsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUVyQyxPQUFPLElBQUksNEJBQVksQ0FBQztRQUN0QixzQkFBc0IsRUFBRSxvQkFBb0I7S0FDN0MsRUFBRTtRQUNELHNCQUFzQixFQUFFLG9CQUFvQjtLQUM3QyxDQUFDLENBQUE7QUFDSixDQUFDLEVBQ0QsS0FBSyxFQUFFLEVBQUUsc0JBQXNCLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDbEQsTUFBTSwyQkFBMkIsR0FDL0IsU0FBUyxDQUFDLE9BQU8sQ0FBQyx3Q0FBc0IsQ0FBQyxDQUFBO0lBRTNDLE1BQU0sMkJBQTJCLENBQUMsMEJBQTBCLENBQzFELHNCQUFzQixDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUNoRCxDQUFBO0FBQ0gsQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSw4QkFBOEIsQ0FBQSJ9