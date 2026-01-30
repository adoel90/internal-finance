"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const createManagerStep = (0, workflows_sdk_1.createStep)("create-manager-step", async ({ manager: managerData, }, { container }) => {
    const managerModuleService = container.resolve("manager");
    const manager = await managerModuleService.createManagers(managerData);
    return new workflows_sdk_1.StepResponse(manager);
});
const createManagerWorkflow = (0, workflows_sdk_1.createWorkflow)("create-manager", function (input) {
    const manager = createManagerStep({
        manager: input.manager,
    });
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "manager",
        value: manager.id,
    });
    return new workflows_sdk_1.WorkflowResponse(manager);
});
exports.default = createManagerWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1tYW5hZ2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscUVBSzRDO0FBQzFDLDREQUVvQztBQVlwQyxNQUFNLGlCQUFpQixHQUFHLElBQUEsMEJBQVUsRUFDbEMscUJBQXFCLEVBQ3JCLEtBQUssRUFBRSxFQUNMLE9BQU8sRUFBRSxXQUFXLEdBQ3dCLEVBQzlDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNmLE1BQU0sb0JBQW9CLEdBQ3hCLFNBQVMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUE7SUFFOUIsTUFBTSxPQUFPLEdBQUcsTUFBTSxvQkFBb0IsQ0FBQyxjQUFjLENBQ3ZELFdBQVcsQ0FDWixDQUFBO0lBRUQsT0FBTyxJQUFJLDRCQUFZLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDbEMsQ0FBQyxDQUNGLENBQUE7QUFFRCxNQUFNLHFCQUFxQixHQUFHLElBQUEsOEJBQWMsRUFDMUMsZ0JBQWdCLEVBQ2hCLFVBQVUsS0FBaUM7SUFDekMsTUFBTSxPQUFPLEdBQUcsaUJBQWlCLENBQUM7UUFDaEMsT0FBTyxFQUFFLEtBQUssQ0FBQyxPQUFPO0tBQ3ZCLENBQUMsQ0FBQTtJQUVGLElBQUEsbUNBQXNCLEVBQUM7UUFDckIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1FBQ3BDLFNBQVMsRUFBRSxTQUFTO1FBQ3BCLEtBQUssRUFBRSxPQUFPLENBQUMsRUFBRTtLQUNsQixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUMsT0FBTyxDQUFDLENBQUE7QUFDdEMsQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSxxQkFBcUIsQ0FBQSJ9