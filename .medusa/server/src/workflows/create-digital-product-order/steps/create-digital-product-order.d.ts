import { OrderLineItemDTO, ProductVariantDTO, InferTypeOf } from "@medusajs/framework/types";
import { OrderStatus } from "../../../modules/digital-product/types";
import DigitalProduct from "../../../modules/digital-product/models/digital-product";
type StepInput = {
    items: (OrderLineItemDTO & {
        variant: ProductVariantDTO & {
            digital_product: InferTypeOf<typeof DigitalProduct>;
        };
    })[];
};
declare const createDigitalProductOrderStep: import("@medusajs/framework/workflows-sdk").StepFunction<StepInput, {
    digital_product_order: {
        id: string;
        status: OrderStatus;
        products: {
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
            orders: /*elided*/ any[];
            created_at: Date;
            updated_at: Date;
            deleted_at: Date;
        }[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    };
}>;
export default createDigitalProductOrderStep;
