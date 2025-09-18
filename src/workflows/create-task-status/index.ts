import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { TASK_MODULE } from "src/modules/task";
import TaskModuleService from "src/modules/task/service";
import { ITaskStatusInput } from "src/modules/task/types";

export const createTaskStatusStep1 = createStep(
    "step-1-create-task-status",
    async (input: ITaskStatusInput, { container }) => {
        const taskModuleService: TaskModuleService = container.resolve(TASK_MODULE);
        const taskStatus = await taskModuleService.createStatus(input);
        return new StepResponse(taskStatus);
    }
)

export const createTaskStatusWorkflow = createWorkflow(
    "create-task-status",
    (input: WorkflowData<ITaskStatusInput>) => {
        // Step 1: Create task status
        const taskStatus = createTaskStatusStep1(input);
        return new WorkflowResponse(taskStatus);
    }
)

export default createTaskStatusWorkflow;
