import { CreateProductWorkflowInputDTO } from "@medusajs/framework/types";
import { CreateDigitalProductStepInput } from "./steps/create-digital-product";
import { CreateDigitalProductMediaInput } from "./steps/create-digital-product-medias";
type CreateDigitalProductWorkflowInput = {
    digital_product: CreateDigitalProductStepInput & {
        medias: Omit<CreateDigitalProductMediaInput, "digital_product_id">[];
    };
    product: CreateProductWorkflowInputDTO;
};
declare const createDigitalProductWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<CreateDigitalProductWorkflowInput, {
    digital_product: {
        medias: ({
            id: string;
            type: import("../../modules/digital-product/types").MediaType;
            fileId: string;
            mimeType: string;
            digitalProduct: {
                id: string;
                name: string;
                medias: /*elided*/ any[];
                orders: {
                    id: string;
                    status: import("../../modules/digital-product/types").OrderStatus;
                    products: /*elided*/ any[];
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date;
                }[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            };
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
            digitalProduct_id: string;
        }[] | import("@medusajs/framework/workflows-sdk").WorkflowData<{
            id: string;
            type: import("../../modules/digital-product/types").MediaType;
            fileId: string;
            mimeType: string;
            digitalProduct: {
                id: string;
                name: string;
                medias: /*elided*/ any[];
                orders: {
                    id: string;
                    status: import("../../modules/digital-product/types").OrderStatus;
                    products: /*elided*/ any[];
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date;
                }[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            };
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
            digitalProduct_id: string;
        }[]>) & {
            id: string;
            type: import("../../modules/digital-product/types").MediaType;
            fileId: string;
            mimeType: string;
            digitalProduct: {
                id: string;
                name: string;
                medias: /*elided*/ any[];
                orders: {
                    id: string;
                    status: import("../../modules/digital-product/types").OrderStatus;
                    products: /*elided*/ any[];
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date;
                }[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            };
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
            digitalProduct_id: string;
        }[];
        id: string;
        name: string;
        orders: {
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
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    } | {
        medias: ({
            id: string;
            type: import("../../modules/digital-product/types").MediaType;
            fileId: string;
            mimeType: string;
            digitalProduct: {
                id: string;
                name: string;
                medias: /*elided*/ any[];
                orders: {
                    id: string;
                    status: import("../../modules/digital-product/types").OrderStatus;
                    products: /*elided*/ any[];
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date;
                }[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            };
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
            digitalProduct_id: string;
        }[] | import("@medusajs/framework/workflows-sdk").WorkflowData<{
            id: string;
            type: import("../../modules/digital-product/types").MediaType;
            fileId: string;
            mimeType: string;
            digitalProduct: {
                id: string;
                name: string;
                medias: /*elided*/ any[];
                orders: {
                    id: string;
                    status: import("../../modules/digital-product/types").OrderStatus;
                    products: /*elided*/ any[];
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date;
                }[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            };
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
            digitalProduct_id: string;
        }[]>) & {
            id: string;
            type: import("../../modules/digital-product/types").MediaType;
            fileId: string;
            mimeType: string;
            digitalProduct: {
                id: string;
                name: string;
                medias: /*elided*/ any[];
                orders: {
                    id: string;
                    status: import("../../modules/digital-product/types").OrderStatus;
                    products: /*elided*/ any[];
                    created_at: Date;
                    updated_at: Date;
                    deleted_at: Date;
                }[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            };
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
            digitalProduct_id: string;
        }[];
        id: (string | import("@medusajs/framework/workflows-sdk").WorkflowData<string>) & string;
        name: (string | import("@medusajs/framework/workflows-sdk").WorkflowData<string>) & string;
        orders: ({
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
        }[] | import("@medusajs/framework/workflows-sdk").WorkflowData<{
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
        }[]>) & {
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
        }[];
        created_at: (Date | import("@medusajs/framework/workflows-sdk").WorkflowData<Date>) & Date;
        updated_at: (Date | import("@medusajs/framework/workflows-sdk").WorkflowData<Date>) & Date;
        deleted_at: (Date | import("@medusajs/framework/workflows-sdk").WorkflowData<Date>) & Date;
        __type: string;
        __step__: string;
        config(config: {
            name?: string;
        } & Omit<import("@medusajs/orchestration").TransactionStepsDefinition, "next" | "uuid" | "action">): import("@medusajs/framework/workflows-sdk").WorkflowData<{
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
            orders: {
                id: string;
                status: import("../../modules/digital-product/types").OrderStatus;
                products: /*elided*/ any[];
                created_at: Date;
                updated_at: Date;
                deleted_at: Date;
            }[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        }>;
    };
}, []>;
export default createDigitalProductWorkflow;
