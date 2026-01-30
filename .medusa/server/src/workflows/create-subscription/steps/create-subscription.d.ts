export type CreateSubscriptionStepInput = {
    organization_id: string;
    plan_id: string;
    current_period_start: Date;
    current_period_end: Date;
    started_at: Date;
};
export declare const createSubscriptionStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateSubscriptionStepInput, {
    subscription: {
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
}>;
