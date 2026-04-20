type WorkflowInput = {
    id: string;
};
export declare const sendOrderConfirmationWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<WorkflowInput, {
    notification: import("@medusajs/framework/workflows-sdk").WorkflowData<import("@medusajs/types").NotificationDTO[]>;
}, []>;
export {};
