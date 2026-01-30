type RoleInput = {
    name: string;
};
export declare const createRoleStep1: import("@medusajs/framework/workflows-sdk").StepFunction<RoleInput, {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createRoleWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<RoleInput, {
    id: string;
    name: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createRoleWorkflow;
