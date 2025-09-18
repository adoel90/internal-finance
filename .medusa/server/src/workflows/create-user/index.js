"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserWorkflow = exports.createUserStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const user_1 = require("src/modules/user");
// import type { IUserModuleService } from "src/modules/user/types"
const workflows_sdk_2 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const validRoleIds = ["01K4P9WNZKGMJ73BA6CKF8T0YP", "01K4PAPFXW6ANQE63VAFSH3C2F"]; // TODO: get list of valid role IDs from database or config
function isValidRoleId(roleId) {
    return validRoleIds.includes(roleId);
}
exports.createUserStep1 = (0, workflows_sdk_1.createStep)("step1-create-user", async (
// input: UserInput, 
{ user: input }, { container }) => {
    const userModuleService = container.resolve(user_1.USER_MODULE);
    if (!isValidRoleId(input.role_id)) {
        throw new Error("Invalid role_id");
    }
    const user = await userModuleService.createUsers(input);
    return new workflows_sdk_1.StepResponse(user, user.id);
}, 
//Rollback when error or failed
async (id, { container }) => {
    const userModuleService = container.resolve(user_1.USER_MODULE);
    await userModuleService.deleteUsers(id);
});
exports.createUserWorkflow = (0, workflows_sdk_2.createWorkflow)("create-user", (input) => {
    // Step 1: Create user with role_id
    const user = (0, exports.createUserStep1)(input);
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "user",
        value: user.id,
    });
    return new workflows_sdk_2.WorkflowResponse(user);
});
exports.default = exports.createUserWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS11c2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUc0QztBQUc1QywyQ0FBOEM7QUFFOUMsbUVBQW1FO0FBQ25FLHFFQUFrRztBQUVsRyw0REFFc0M7QUFrQnRDLE1BQU0sWUFBWSxHQUFHLENBQUMsNEJBQTRCLEVBQUUsNEJBQTRCLENBQUMsQ0FBQSxDQUFDLDJEQUEyRDtBQUU3SSxTQUFTLGFBQWEsQ0FBQyxNQUFjO0lBQ25DLE9BQU8sWUFBWSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUN0QyxDQUFDO0FBRVksUUFBQSxlQUFlLEdBQUcsSUFBQSwwQkFBVSxFQUNyQyxtQkFBbUIsRUFDbkIsS0FBSztBQUNELHFCQUFxQjtBQUNyQixFQUFHLElBQUksRUFBRSxLQUFLLEVBQTJCLEVBQ3pDLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNqQixNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQ3ZDLGtCQUFXLENBQ2QsQ0FBQTtJQUVELElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDaEMsTUFBTSxJQUFJLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN4RCxPQUFPLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0FBQzFDLENBQUM7QUFDRCwrQkFBK0I7QUFDL0IsS0FBSyxFQUFFLEVBQVUsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEMsTUFBTSxpQkFBaUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUN2QyxrQkFBVyxDQUNkLENBQUE7SUFDRCxNQUFNLGlCQUFpQixDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQ0osQ0FBQTtBQUdZLFFBQUEsa0JBQWtCLEdBQUcsSUFBQSw4QkFBYyxFQUM1QyxhQUFhLEVBQ2IsQ0FBQyxLQUE4QixFQUFFLEVBQUU7SUFDL0IsbUNBQW1DO0lBQ25DLE1BQU0sSUFBSSxHQUFHLElBQUEsdUJBQWUsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUdwQyxJQUFBLG1DQUFzQixFQUFDO1FBQ25CLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztRQUNwQyxTQUFTLEVBQUUsTUFBTTtRQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUU7S0FDakIsQ0FBQyxDQUFBO0lBRUYsT0FBTyxJQUFJLGdDQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FDSixDQUFBO0FBRUQsa0JBQWUsMEJBQWtCLENBQUMifQ==