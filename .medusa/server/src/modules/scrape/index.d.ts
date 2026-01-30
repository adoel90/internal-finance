import ScrapeModuleService from "./service";
export declare const SCRAPE_MODULE = "scrape";
declare const _default: import("@medusajs/types").ModuleExports<typeof ScrapeModuleService> & {
    linkable: {
        readonly profession: {
            id: {
                serviceName: "scrape";
                field: "profession";
                linkable: "profession_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "scrape";
                field: "profession";
                linkable: "profession_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
