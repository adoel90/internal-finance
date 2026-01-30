import { IPayloadInput } from "src/modules/task/types";
export declare const createTaskStep1: import("@medusajs/framework/workflows-sdk").StepFunction<IPayloadInput, {
    id: string;
    title: string;
    description: string;
    report: string;
    status_id: string;
    creator_id: string;
    assignee_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createTaskWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<IPayloadInput, {
    id: string;
    title: string;
    description: string;
    report: string;
    status_id: string;
    creator_id: string;
    assignee_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createTaskWorkflow;
