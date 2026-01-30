import { OrderDTO, InferTypeOf } from "@medusajs/framework/types";
import DigitalProductOrder from "../models/digital-product-order";
export declare enum MediaType {
    MAIN = "main",
    PREVIEW = "preview"
}
export declare enum OrderStatus {
    PENDING = "pending",
    SENT = "sent"
}
export type DigitalProductOrder = InferTypeOf<typeof DigitalProductOrder> & {
    order?: OrderDTO;
};
