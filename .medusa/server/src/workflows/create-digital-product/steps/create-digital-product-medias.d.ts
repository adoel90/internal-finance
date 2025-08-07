import { MediaType } from "../../../modules/digital-product/types";
export type CreateDigitalProductMediaInput = {
    type: MediaType;
    fileId: string;
    mimeType: string;
    digital_product_id: string;
};
type CreateDigitalProductMediasStepInput = {
    medias: CreateDigitalProductMediaInput[];
};
declare const createDigitalProductMediasStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateDigitalProductMediasStepInput, {
    digital_product_medias: {
        id: string;
        type: MediaType;
        fileId: string;
        mimeType: string;
        digitalProduct: {
            id: string;
            name: string;
            medias: /*elided*/ any[];
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
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        digitalProduct_id: string;
    }[];
}>;
export default createDigitalProductMediasStep;
