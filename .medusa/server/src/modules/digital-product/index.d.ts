import DigitalProductModuleService from "./service";
export declare const DIGITAL_PRODUCT_MODULE = "digitalProduct";
declare const _default: import("@medusajs/types").ModuleExports<typeof DigitalProductModuleService> & {
    linkable: {
        readonly digitalProduct: {
            id: {
                serviceName: "digitalProduct";
                field: "digitalProduct";
                linkable: "digital_product_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "digitalProduct";
                field: "digitalProduct";
                linkable: "digital_product_id";
                primaryKey: "id";
            };
        };
        readonly digitalProductMedia: {
            id: {
                serviceName: "digitalProduct";
                field: "digitalProductMedia";
                linkable: "digital_product_media_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "digitalProduct";
                field: "digitalProductMedia";
                linkable: "digital_product_media_id";
                primaryKey: "id";
            };
        };
        readonly digitalProductOrder: {
            id: {
                serviceName: "digitalProduct";
                field: "digitalProductOrder";
                linkable: "digital_product_order_id";
                primaryKey: "id";
            };
            toJSON: () => {
                serviceName: "digitalProduct";
                field: "digitalProductOrder";
                linkable: "digital_product_order_id";
                primaryKey: "id";
            };
        };
    };
};
export default _default;
