export type UpdateDomainInput = {
    id: string;
    name?: string;
    slug?: string;
    is_active?: boolean;
    is_premium?: boolean;
    metadata?: Record<string, unknown>;
};
export declare const updateDomainStep: import("@medusajs/framework/workflows-sdk").StepFunction<UpdateDomainInput, any>;
export declare const updateDomainWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<UpdateDomainInput, any, []>;
