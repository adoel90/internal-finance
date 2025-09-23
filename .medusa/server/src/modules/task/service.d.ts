declare const TaskModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly Task: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        title: import("@medusajs/framework/utils").TextProperty;
        description: import("@medusajs/framework/utils").TextProperty;
        report: import("@medusajs/framework/utils").TextProperty;
        status_id: import("@medusajs/framework/utils").TextProperty;
        creator_id: import("@medusajs/framework/utils").TextProperty;
        assignee_id: import("@medusajs/framework/utils").TextProperty;
    }>, "task">;
    readonly Status: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        name: import("@medusajs/framework/utils").TextProperty;
    }>, "status">;
}>>;
declare class TaskModuleService extends TaskModuleService_base {
}
export default TaskModuleService;
