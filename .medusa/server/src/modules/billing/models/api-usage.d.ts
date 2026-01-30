export declare const ApiUsage: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
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
export default ApiUsage;
