export type CreateDigitalProductStepInput = {
    name: string;
};
declare const createDigitalProductStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateDigitalProductStepInput, {
    digital_product: {
        id: string;
        name: string;
        medias: {
            id: string;
            type: import("../../../modules/digital-product/types").MediaType;
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
            status: import("../../../modules/digital-product/types").OrderStatus;
            products: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    };
}>;
export default createDigitalProductStep;
