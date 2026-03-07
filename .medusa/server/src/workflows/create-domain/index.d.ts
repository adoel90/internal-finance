export type CreateDomainInput = {
    name: string;
    slug: string;
    is_active?: boolean;
    is_premium?: boolean;
    metadata?: Record<string, unknown>;
    customer_id?: string;
    product_id?: string;
    variant_id?: string;
    order_id?: string;
};
export declare const createDomainStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateDomainInput, any>;
export declare const linkDomainToCustomerStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    domain_id: string;
    customer_id?: string;
}, any>;
export declare const linkDomainToProductStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    domain_id: string;
    product_id?: string;
}, any>;
export declare const linkDomainToVariantStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    domain_id: string;
    variant_id?: string;
}, any>;
export declare const linkDomainToOrderStep: import("@medusajs/framework/workflows-sdk").StepFunction<{
    domain_id: string;
    order_id?: string;
}, any>;
export declare const createDomainWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateDomainInput, any, []>;
