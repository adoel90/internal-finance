type UserInput = {
    user: {
        name: string;
        email: string;
        role_id: string;
    };
    authIdentityId: string;
};
export declare const createUserStep1: import("@medusajs/framework/workflows-sdk").StepFunction<Pick<UserInput, "user">, {
    id: string;
    name: string;
    email: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createUserWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UserInput, {
    id: string;
    name: string;
    email: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createUserWorkflow;
