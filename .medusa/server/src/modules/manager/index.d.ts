import ManagerModuleService from "./service";
export declare const MANAGER_MODULE = "manager";
declare const _default: import("@medusajs/types").ModuleExports<typeof ManagerModuleService> & {
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
