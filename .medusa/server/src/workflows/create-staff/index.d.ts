type CreateStaffWorkflowInput = {
    staff: {
        first_name?: string;
        last_name?: string;
        email: string;
    };
    authIdentityId: string;
};
declare const createStaffWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateStaffWorkflowInput, {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createStaffWorkflow;
