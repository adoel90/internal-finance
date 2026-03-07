declare const DomainModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly Domain: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        name: import("@medusajs/framework/utils").TextProperty;
        slug: import("@medusajs/framework/utils").TextProperty;
        is_active: import("@medusajs/framework/utils").BooleanProperty;
        is_premium: import("@medusajs/framework/utils").BooleanProperty;
        metadata: import("@medusajs/framework/utils").JSONProperty;
    }>, "domain">;
}>>;
declare class DomainModuleService extends DomainModuleService_base {
}
export default DomainModuleService;
