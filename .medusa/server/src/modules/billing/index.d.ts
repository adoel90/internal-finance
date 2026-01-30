import BillingModuleService from "./service";
export declare const BILLING_MODULE = "billing";
declare const _default: import("@medusajs/types").ModuleExports<typeof BillingModuleService> & {
    linkable: {
        readonly company: {
            id: {
                serviceName: "billing";
                field: "company";
                linkable: "company_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "billing";
                field: "company";
                linkable: "company_id";
                primaryKey: "id";
            };
        };
        readonly apiUsage: {
            id: {
                serviceName: "billing";
                field: "apiUsage";
                linkable: "api_usage_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "billing";
                field: "apiUsage";
                linkable: "api_usage_id";
                primaryKey: "id";
            };
        };
        readonly subscription: {
            id: {
                serviceName: "billing";
                field: "subscription";
                linkable: "subscription_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "billing";
                field: "subscription";
                linkable: "subscription_id";
                primaryKey: "id";
            };
        };
        readonly plan: {
            id: {
                serviceName: "billing";
                field: "plan";
                linkable: "plan_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "billing";
                field: "plan";
                linkable: "plan_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
