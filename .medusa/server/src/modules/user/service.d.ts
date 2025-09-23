declare const UserModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly User: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        name: import("@medusajs/framework/utils").TextProperty;
        email: import("@medusajs/framework/utils").TextProperty;
        role_id: import("@medusajs/framework/utils").TextProperty;
    }>, "user">;
}>>;
declare class UserModuleService extends UserModuleService_base {
}
export default UserModuleService;
