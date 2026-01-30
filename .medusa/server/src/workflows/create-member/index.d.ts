type CreateMemberWorkflowInput = {
    member: {
        name: string;
        email: string;
        role_id: string;
    };
    authIdentityId: string;
};
declare const createMemberWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateMemberWorkflowInput, {
    id: string;
    name: string;
    email: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createMemberWorkflow;
