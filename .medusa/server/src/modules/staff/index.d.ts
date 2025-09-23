import ActorModuleService from "./service";
export declare const STAFF_MODULE = "staff";
declare const _default: import("@medusajs/types").ModuleExports<typeof ActorModuleService> & {
    linkable: {
        readonly staff: {
            id: {
                serviceName: "staff";
                field: "staff";
                linkable: "staff_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "staff";
                field: "staff";
                linkable: "staff_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
