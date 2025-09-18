import { createWorkflow, WorkflowResponse, WorkflowData, createStep, StepResponse } from "@medusajs/framework/workflows-sdk";
import { TASK_MODULE } from "src/modules/task";
import TaskModuleService from "src/modules/task/service";
import { IPayloadInput } from "src/modules/task/types";

export const createTaskStep1 = createStep(
    "step-1-create-task",
    async (input: IPayloadInput, { container }) => {
        const taskModuleService: TaskModuleService = container.resolve(TASK_MODULE);
        const task = await taskModuleService.createTasks(input);
        return new StepResponse(task);
    }
)

export const createTaskWorkflow = createWorkflow(
    "create-task",
    (input: WorkflowData<IPayloadInput>) => {
        // Step 1: Create task
        const task = createTaskStep1(input);
        return new WorkflowResponse(task);
    }
)

export default createTaskWorkflow;
