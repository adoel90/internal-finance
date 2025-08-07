import BlogModuleService from "./service";
export declare const BLOG_MODULE = "blog";
declare const _default: import("@medusajs/types").ModuleExports<typeof BlogModuleService> & {
    linkable: {
        readonly post: {
            id: {
                serviceName: "blog";
                field: "post";
                linkable: "post_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "blog";
                field: "post";
                linkable: "post_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
