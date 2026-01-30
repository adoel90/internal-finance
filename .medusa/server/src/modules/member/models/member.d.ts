declare const Member: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    name: import("@medusajs/framework/utils").TextProperty;
    email: import("@medusajs/framework/utils").TextProperty;
    role_id: import("@medusajs/framework/utils").TextProperty;
}>, "member">;
export default Member;
