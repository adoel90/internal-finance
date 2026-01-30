import UserModuleService from "./service";
export declare const USER_MODULE = "user";
declare const _default: import("@medusajs/types").ModuleExports<typeof UserModuleService> & {
    linkable: {
        readonly user: {
            id: {
                serviceName: "user";
                field: "user";
                linkable: "user_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "user";
                field: "user";
                linkable: "user_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
