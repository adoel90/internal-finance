import { CreateSubscriptionStepInput } from "./steps/create-subscription";
declare const createSubscriptionWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateSubscriptionStepInput, {
    subscription: ({
        id: string;
        organization_id: string;
        plan: {
            id: string;
            name: string;
            subscriptions: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        };
        current_period_start: Date;
        current_period_end: Date;
        started_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        plan_id: string;
    } | import("@medusajs/framework/workflows-sdk").WorkflowData<{
        id: string;
        organization_id: string;
        plan: {
            id: string;
            name: string;
            subscriptions: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        };
        current_period_start: Date;
        current_period_end: Date;
        started_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        plan_id: string;
    }>) & {
        id: string;
        organization_id: string;
        plan: {
            id: string;
            name: string;
            subscriptions: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        };
        current_period_start: Date;
        current_period_end: Date;
        started_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        plan_id: string;
    };
}, []>;
export default createSubscriptionWorkflow;
