"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskStatusWorkflow = exports.createTaskStatusStep1 = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const task_1 = require("src/modules/task");
exports.createTaskStatusStep1 = (0, workflows_sdk_1.createStep)("step-1-create-task-status", async (input, { container }) => {
    const taskModuleService = container.resolve(task_1.TASK_MODULE);
    const taskStatus = await taskModuleService.createStatus(input);
    return new workflows_sdk_1.StepResponse(taskStatus);
});
exports.createTaskStatusWorkflow = (0, workflows_sdk_1.createWorkflow)("create-task-status", (input) => {
    // Step 1: Create task status
    const taskStatus = (0, exports.createTaskStatusStep1)(input);
    return new workflows_sdk_1.WorkflowResponse(taskStatus);
});
exports.default = exports.createTaskStatusWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS10YXNrLXN0YXR1cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxxRUFBNkg7QUFDN0gsMkNBQStDO0FBSWxDLFFBQUEscUJBQXFCLEdBQUcsSUFBQSwwQkFBVSxFQUMzQywyQkFBMkIsRUFDM0IsS0FBSyxFQUFFLEtBQXVCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzdDLE1BQU0saUJBQWlCLEdBQXNCLFNBQVMsQ0FBQyxPQUFPLENBQUMsa0JBQVcsQ0FBQyxDQUFDO0lBQzVFLE1BQU0sVUFBVSxHQUFHLE1BQU0saUJBQWlCLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9ELE9BQU8sSUFBSSw0QkFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ3hDLENBQUMsQ0FDSixDQUFBO0FBRVksUUFBQSx3QkFBd0IsR0FBRyxJQUFBLDhCQUFjLEVBQ2xELG9CQUFvQixFQUNwQixDQUFDLEtBQXFDLEVBQUUsRUFBRTtJQUN0Qyw2QkFBNkI7SUFDN0IsTUFBTSxVQUFVLEdBQUcsSUFBQSw2QkFBcUIsRUFBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxPQUFPLElBQUksZ0NBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUNKLENBQUE7QUFFRCxrQkFBZSxnQ0FBd0IsQ0FBQyJ9