declare const Domain: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    name: import("@medusajs/framework/utils").TextProperty;
    slug: import("@medusajs/framework/utils").TextProperty;
    is_active: import("@medusajs/framework/utils").BooleanProperty;
    is_premium: import("@medusajs/framework/utils").BooleanProperty;
    metadata: import("@medusajs/framework/utils").JSONProperty;
}>, "domain">;
export default Domain;
