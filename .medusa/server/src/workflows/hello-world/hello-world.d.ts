type WorkflowInput = {
    name: string;
};
declare const helloWorldWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<WorkflowInput, {
    message: string & import("@medusajs/framework/workflows-sdk").WorkflowDataProperties<string> & {
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): import("@medusajs/framework/workflows-sdk").WorkflowData<string>;
    } & import("@medusajs/framework/workflows-sdk").StepFunctionReturnConfig<string>;
}, []>;
export default helloWorldWorkflow;
