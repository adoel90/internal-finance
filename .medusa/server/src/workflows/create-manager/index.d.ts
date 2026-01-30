type CreateManagerWorkflowInput = {
    manager: {
        first_name?: string;
        last_name?: string;
        email: string;
    };
    authIdentityId: string;
};
declare const createManagerWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateManagerWorkflowInput, {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createManagerWorkflow;
