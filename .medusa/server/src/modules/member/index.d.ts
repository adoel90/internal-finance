import MemberModuleService from "./service";
export declare const MEMBER_MODULE = "member";
declare const _default: import("@medusajs/types").ModuleExports<typeof MemberModuleService> & {
    linkable: {
        readonly member: {
            id: {
                serviceName: "member";
                field: "member";
                linkable: "member_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "member";
                field: "member";
                linkable: "member_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
