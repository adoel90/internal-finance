declare const ActorModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly Manager: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        firstName: import("@medusajs/framework/utils").TextProperty;
        lastName: import("@medusajs/framework/utils").TextProperty;
        email: import("@medusajs/framework/utils").TextProperty;
    }>, "manager">;
}>>;
declare class ActorModuleService extends ActorModuleService_base {
}
export default ActorModuleService;
