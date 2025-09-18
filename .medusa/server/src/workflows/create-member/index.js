"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const createMemberStep = (0, workflows_sdk_1.createStep)("create-member-step", async ({ member: memberData, }, { container }) => {
    const memberModuleService = container.resolve("member");
    const member = await memberModuleService.createMembers(memberData);
    return new workflows_sdk_1.StepResponse(member);
});
const createMemberWorkflow = (0, workflows_sdk_1.createWorkflow)("create-member", function (input) {
    const member = createMemberStep({
        member: input.member,
    });
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "member",
        value: member.id,
    });
    return new workflows_sdk_1.WorkflowResponse(member);
});
exports.default = createMemberWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1tZW1iZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxRUFLNEM7QUFDMUMsNERBRW9DO0FBWXBDLE1BQU0sZ0JBQWdCLEdBQUcsSUFBQSwwQkFBVSxFQUNqQyxvQkFBb0IsRUFDcEIsS0FBSyxFQUFFLEVBQ0wsTUFBTSxFQUFFLFVBQVUsR0FDd0IsRUFDNUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2YsTUFBTSxtQkFBbUIsR0FDdkIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtJQUU3QixNQUFNLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FDcEQsVUFBVSxDQUNYLENBQUE7SUFFRCxPQUFPLElBQUksNEJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNqQyxDQUFDLENBQ0YsQ0FBQTtBQUVELE1BQU0sb0JBQW9CLEdBQUcsSUFBQSw4QkFBYyxFQUN6QyxlQUFlLEVBQ2YsVUFBVSxLQUFnQztJQUN4QyxNQUFNLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQztRQUM5QixNQUFNLEVBQUUsS0FBSyxDQUFDLE1BQU07S0FDckIsQ0FBQyxDQUFBO0lBRUYsSUFBQSxtQ0FBc0IsRUFBQztRQUNyQixjQUFjLEVBQUUsS0FBSyxDQUFDLGNBQWM7UUFDcEMsU0FBUyxFQUFFLFFBQVE7UUFDbkIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFO0tBQ2pCLENBQUMsQ0FBQTtJQUVGLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQTtBQUNyQyxDQUFDLENBQ0YsQ0FBQTtBQUVELGtCQUFlLG9CQUFvQixDQUFBIn0=