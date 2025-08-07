type WorkflowInput = {
    cart_id: string;
};
declare const createDigitalProductOrderWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<WorkflowInput, {
    order: any;
    digital_product_order: ({
        id: string;
        status: import("../../modules/digital-product/types").OrderStatus;
        products: {
            id: string;
            name: string;
            medias: {
                id: string;
                type: import("../../modules/digital-product/types").MediaType;
                fileId: string;
                mimeType: string;
                digitalProduct: /*elided*/ any;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
                digitalProduct_id: string;
            }[];
            orders: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } | import("@medusajs/framework/workflows-sdk").WorkflowData<{
        id: string;
        status: import("../../modules/digital-product/types").OrderStatus;
        products: {
            id: string;
            name: string;
            medias: {
                id: string;
                type: import("../../modules/digital-product/types").MediaType;
                fileId: string;
                mimeType: string;
                digitalProduct: /*elided*/ any;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
                digitalProduct_id: string;
            }[];
            orders: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    }>) & {
        id: string;
        status: import("../../modules/digital-product/types").OrderStatus;
        products: {
            id: string;
            name: string;
            medias: {
                id: string;
                type: import("../../modules/digital-product/types").MediaType;
                fileId: string;
                mimeType: string;
                digitalProduct: /*elided*/ any;
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
                digitalProduct_id: string;
            }[];
            orders: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    };
}, []>;
export default createDigitalProductOrderWorkflow;
