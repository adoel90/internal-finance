"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskWorkflow = exports.createTaskStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const task_1 = require("src/modules/task");
exports.createTaskStep1 = (0, workflows_sdk_1.createStep)("step-1-create-task", async (input, { container }) => {
    const taskModuleService = container.resolve(task_1.TASK_MODULE);
    const task = await taskModuleService.createTasks(input);
    return new workflows_sdk_1.StepResponse(task);
});
exports.createTaskWorkflow = (0, workflows_sdk_1.createWorkflow)("create-task", (input) => {
    // Step 1: Create task
    const task = (0, exports.createTaskStep1)(input);
    return new workflows_sdk_1.WorkflowResponse(task);
});
exports.default = exports.createTaskWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS10YXNrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQUE2SDtBQUM3SCwyQ0FBK0M7QUFJbEMsUUFBQSxlQUFlLEdBQUcsSUFBQSwwQkFBVSxFQUNyQyxvQkFBb0IsRUFDcEIsS0FBSyxFQUFFLEtBQW9CLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzFDLE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQVcsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sSUFBSSxHQUFHLE1BQU0saUJBQWlCLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hELE9BQU8sSUFBSSw0QkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xDLENBQUMsQ0FDSixDQUFBO0FBRVksUUFBQSxrQkFBa0IsR0FBRyxJQUFBLDhCQUFjLEVBQzVDLGFBQWEsRUFDYixDQUFDLEtBQWtDLEVBQUUsRUFBRTtJQUNuQyxzQkFBc0I7SUFDdEIsTUFBTSxJQUFJLEdBQUcsSUFBQSx1QkFBZSxFQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3BDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQ0osQ0FBQTtBQUVELGtCQUFlLDBCQUFrQixDQUFDIn0=