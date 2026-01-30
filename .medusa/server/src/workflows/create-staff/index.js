"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const createStaffStep = (0, workflows_sdk_1.createStep)("create-staff-step", async ({ staff: staffData, }, { container }) => {
    const staffModuleService = container.resolve("staff");
    const staff = await staffModuleService.createStaff(staffData);
    return new workflows_sdk_1.StepResponse(staff);
});
const createStaffWorkflow = (0, workflows_sdk_1.createWorkflow)("create-staff", function (input) {
    const staff = createStaffStep({
        staff: input.staff,
    });
    (0, core_flows_1.setAuthAppMetadataStep)({
        authIdentityId: input.authIdentityId,
        actorType: "staff",
        value: staff.id,
    });
    return new workflows_sdk_1.WorkflowResponse(staff);
});
exports.default = createStaffWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1zdGFmZi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFFQUs0QztBQUMxQyw0REFFb0M7QUFZcEMsTUFBTSxlQUFlLEdBQUcsSUFBQSwwQkFBVSxFQUNoQyxtQkFBbUIsRUFDbkIsS0FBSyxFQUFFLEVBQ0wsS0FBSyxFQUFFLFNBQVMsR0FDd0IsRUFDMUMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2YsTUFBTSxrQkFBa0IsR0FDdEIsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUU1QixNQUFNLEtBQUssR0FBRyxNQUFNLGtCQUFrQixDQUFDLFdBQVcsQ0FDaEQsU0FBUyxDQUNWLENBQUE7SUFFRCxPQUFPLElBQUksNEJBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtBQUNoQyxDQUFDLENBQ0YsQ0FBQTtBQUVELE1BQU0sbUJBQW1CLEdBQUcsSUFBQSw4QkFBYyxFQUN4QyxjQUFjLEVBQ2QsVUFBVSxLQUErQjtJQUN2QyxNQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDNUIsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLO0tBQ25CLENBQUMsQ0FBQTtJQUVGLElBQUEsbUNBQXNCLEVBQUM7UUFDckIsY0FBYyxFQUFFLEtBQUssQ0FBQyxjQUFjO1FBQ3BDLFNBQVMsRUFBRSxPQUFPO1FBQ2xCLEtBQUssRUFBRSxLQUFLLENBQUMsRUFBRTtLQUNoQixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUMsS0FBSyxDQUFDLENBQUE7QUFDcEMsQ0FBQyxDQUNGLENBQUE7QUFFRCxrQkFBZSxtQkFBbUIsQ0FBQSJ9