declare const Manager: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    firstName: import("@medusajs/framework/utils").TextProperty;
    lastName: import("@medusajs/framework/utils").TextProperty;
    email: import("@medusajs/framework/utils").TextProperty;
}>, "manager">;
export default Manager;
