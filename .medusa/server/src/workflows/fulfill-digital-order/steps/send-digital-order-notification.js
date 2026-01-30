"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendDigitalOrderNotificationStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../../../modules/digital-product/types");
exports.sendDigitalOrderNotificationStep = (0, workflows_sdk_1.createStep)("send-digital-order-notification", async ({ digital_product_order: digitalProductOrder }, { container }) => {
    const notificationModuleService = container
        .resolve(utils_1.ModuleRegistrationName.NOTIFICATION);
    const fileModuleService = container.resolve(utils_1.ModuleRegistrationName.FILE);
    const notificationData = await Promise.all(digitalProductOrder.products.map(async (product) => {
        const medias = [];
        await Promise.all(product.medias
            .filter((media) => media.type === types_1.MediaType.MAIN)
            .map(async (media) => {
            medias.push((await fileModuleService.retrieveFile(media.fileId)).url);
        }));
        return {
            name: product.name,
            medias
        };
    }));
    const notification = await notificationModuleService.createNotifications({
        to: digitalProductOrder.order.email,
        template: "digital-order-template",
        channel: "email",
        data: {
            products: notificationData
        }
    });
    return new workflows_sdk_1.StepResponse(notification);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1kaWdpdGFsLW9yZGVyLW5vdGlmaWNhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy93b3JrZmxvd3MvZnVsZmlsbC1kaWdpdGFsLW9yZGVyL3N0ZXBzL3NlbmQtZGlnaXRhbC1vcmRlci1ub3RpZmljYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBRzBDO0FBSzFDLHFEQUFrRTtBQUNsRSxrRUFBdUY7QUFNMUUsUUFBQSxnQ0FBZ0MsR0FBRyxJQUFBLDBCQUFVLEVBQ3hELGlDQUFpQyxFQUNqQyxLQUFLLEVBQUUsRUFDTCxxQkFBcUIsRUFBRSxtQkFBbUIsRUFDSixFQUN4QyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDZixNQUFNLHlCQUF5QixHQUErQixTQUFTO1NBQ3RFLE9BQU8sQ0FBQyw4QkFBc0IsQ0FBQyxZQUFZLENBQUMsQ0FBQTtJQUM3QyxNQUFNLGlCQUFpQixHQUF1QixTQUFTLENBQUMsT0FBTyxDQUM3RCw4QkFBc0IsQ0FBQyxJQUFJLENBQzVCLENBQUE7SUFFRCxNQUFNLGdCQUFnQixHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDeEMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDakQsTUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFBO1FBRWpCLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDZixPQUFPLENBQUMsTUFBTTthQUNiLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxpQkFBUyxDQUFDLElBQUksQ0FBQzthQUNoRCxHQUFHLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO1lBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQ1QsQ0FBQyxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQ3pELENBQUE7UUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO1FBRUQsT0FBTztZQUNMLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSTtZQUNsQixNQUFNO1NBQ1AsQ0FBQTtJQUNILENBQUMsQ0FBQyxDQUNILENBQUE7SUFFRCxNQUFNLFlBQVksR0FBRyxNQUFNLHlCQUF5QixDQUFDLG1CQUFtQixDQUFDO1FBQ3ZFLEVBQUUsRUFBRSxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsS0FBSztRQUNuQyxRQUFRLEVBQUUsd0JBQXdCO1FBQ2xDLE9BQU8sRUFBRSxPQUFPO1FBQ2hCLElBQUksRUFBRTtZQUNKLFFBQVEsRUFBRSxnQkFBZ0I7U0FDM0I7S0FDRixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksNEJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQ0YsQ0FBQSJ9