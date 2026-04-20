"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendNotificationStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.sendNotificationStep = (0, workflows_sdk_1.createStep)("send-notification", async (data, { container }) => {
    const notificationModuleService = container.resolve(utils_1.Modules.NOTIFICATION);
    const notification = await notificationModuleService.createNotifications(data);
    return new workflows_sdk_1.StepResponse(notification);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuZC1ub3RpZmljYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3N0ZXBzL3NlbmQtbm90aWZpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFtRDtBQUNuRCxxRUFBNEU7QUFHL0QsUUFBQSxvQkFBb0IsR0FBRyxJQUFBLDBCQUFVLEVBQzVDLG1CQUFtQixFQUNuQixLQUFLLEVBQUUsSUFBNkIsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDckQsTUFBTSx5QkFBeUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUNqRCxlQUFPLENBQUMsWUFBWSxDQUNyQixDQUFBO0lBQ0QsTUFBTSxZQUFZLEdBQUcsTUFBTSx5QkFBeUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM5RSxPQUFPLElBQUksNEJBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQTtBQUN2QyxDQUFDLENBQ0YsQ0FBQSJ9