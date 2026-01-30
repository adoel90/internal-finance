import RoleModuleService from "./service";
export declare const ROLE_MODULE = "role";
declare const _default: import("@medusajs/types").ModuleExports<typeof RoleModuleService> & {
    linkable: {
        readonly role: {
            id: {
                serviceName: "role";
                field: "role";
                linkable: "role_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "role";
                field: "role";
                linkable: "role_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
