import { ITaskStatusInput } from "src/modules/task/types";
export declare const createTaskStatusStep1: import("@medusajs/framework/workflows-sdk").StepFunction<ITaskStatusInput, {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createTaskStatusWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ITaskStatusInput, {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createTaskStatusWorkflow;
