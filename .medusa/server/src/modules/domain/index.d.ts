import DomainModuleService from "./service";
export declare const DOMAIN_MODULE = "domain";
declare const _default: import("@medusajs/types").ModuleExports<typeof DomainModuleService> & {
    linkable: {
        readonly domain: {
            id: {
                serviceName: "domain";
                field: "domain";
                linkable: "domain_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "domain";
                field: "domain";
                linkable: "domain_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
