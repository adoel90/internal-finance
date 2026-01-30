declare const BillingModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly BillingCompany: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        user_id: import("@medusajs/framework/utils").TextProperty;
        company_name: import("@medusajs/framework/utils").TextProperty;
        company_logo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    }>, "company">;
    readonly ApiUsage: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        user_id: import("@medusajs/framework/utils").TextProperty;
        api_key_id: import("@medusajs/framework/utils").TextProperty;
        api_name: import("@medusajs/framework/utils").TextProperty;
        date: import("@medusajs/framework/utils").DateTimeProperty;
        request_count: import("@medusajs/framework/utils").NumberProperty;
        success_count: import("@medusajs/framework/utils").NumberProperty;
        failed_count: import("@medusajs/framework/utils").NumberProperty;
        plan_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        metadata: import("@medusajs/framework/utils").NullableModifier<Record<string, unknown>, import("@medusajs/framework/utils").JSONProperty>;
    }>, "api_usage">;
    readonly Subscription: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        organization_id: import("@medusajs/framework/utils").TextProperty;
        plan: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            name: import("@medusajs/framework/utils").TextProperty;
            subscriptions: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "subscription">>;
        }>, "plan">, undefined>;
        current_period_start: import("@medusajs/framework/utils").DateTimeProperty;
        current_period_end: import("@medusajs/framework/utils").DateTimeProperty;
        started_at: import("@medusajs/framework/utils").DateTimeProperty;
    }>, "subscription">;
    readonly Plan: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        name: import("@medusajs/framework/utils").TextProperty;
        subscriptions: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            organization_id: import("@medusajs/framework/utils").TextProperty;
            plan: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "plan">, undefined>;
            current_period_start: import("@medusajs/framework/utils").DateTimeProperty;
            current_period_end: import("@medusajs/framework/utils").DateTimeProperty;
            started_at: import("@medusajs/framework/utils").DateTimeProperty;
        }>, "subscription">>;
    }>, "plan">;
}>>;
declare class BillingModuleService extends BillingModuleService_base {
}
export default BillingModuleService;
