"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRoleWorkflow = exports.createRoleStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const role_1 = require("src/modules/role");
const workflows_sdk_2 = require("@medusajs/framework/workflows-sdk");
exports.createRoleStep1 = (0, workflows_sdk_1.createStep)("step1-create-role", async (input, { container }) => {
    const roleModuleService = container.resolve(role_1.ROLE_MODULE);
    const role = await roleModuleService.createRoles(input);
    return new workflows_sdk_1.StepResponse(role, role.id);
}, 
//Rollback when error or failed
async (id, { container }) => {
    const roleModuleService = container.resolve(role_1.ROLE_MODULE);
    await roleModuleService.deleteRoles(id);
});
exports.createRoleWorkflow = (0, workflows_sdk_2.createWorkflow)("create-role", (input) => {
    // Step 1: Create role
    const role = (0, exports.createRoleStep1)(input);
    return new workflows_sdk_2.WorkflowResponse(role);
});
exports.default = exports.createRoleWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1yb2xlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUc0QztBQUU1QywyQ0FBOEM7QUFFOUMscUVBQWtHO0FBUXJGLFFBQUEsZUFBZSxHQUFHLElBQUEsMEJBQVUsRUFDckMsbUJBQW1CLEVBQ25CLEtBQUssRUFBRSxLQUFnQixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUN0QyxNQUFNLGlCQUFpQixHQUFzQixTQUFTLENBQUMsT0FBTyxDQUMxRCxrQkFBVyxDQUNkLENBQUE7SUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzFDLENBQUM7QUFDRCwrQkFBK0I7QUFDL0IsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEMsTUFBTSxpQkFBaUIsR0FBc0IsU0FBUyxDQUFDLE9BQU8sQ0FDMUQsa0JBQVcsQ0FDZCxDQUFBO0lBQ0QsTUFBTSxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUNKLENBQUE7QUFHWSxRQUFBLGtCQUFrQixHQUFHLElBQUEsOEJBQWMsRUFDNUMsYUFBYSxFQUNiLENBQUMsS0FBOEIsRUFBRSxFQUFFO0lBQy9CLHNCQUFzQjtJQUN0QixNQUFNLElBQUksR0FBRyxJQUFBLHVCQUFlLEVBQUMsS0FBSyxDQUFDLENBQUM7SUFFcEMsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FDSixDQUFBO0FBRUQsa0JBQWUsMEJBQWtCLENBQUMifQ==