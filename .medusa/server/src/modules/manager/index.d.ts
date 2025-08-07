import ActorModuleService from "./service";
export declare const ACTOR_MODULE = "manager";
declare const _default: import("@medusajs/types").ModuleExports<typeof ActorModuleService> & {
    linkable: {
        readonly manager: {
            id: {
                serviceName: "manager";
                field: "manager";
                linkable: "manager_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "manager";
                field: "manager";
                linkable: "manager_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
