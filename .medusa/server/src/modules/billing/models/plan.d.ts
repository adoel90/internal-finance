declare const _default: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
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
export default _default;
