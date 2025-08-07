import { DigitalProductOrder } from "../../../modules/digital-product/types";
type SendDigitalOrderNotificationStepInput = {
    digital_product_order: DigitalProductOrder;
};
export declare const sendDigitalOrderNotificationStep: import("@medusajs/framework/workflows-sdk").StepFunction<SendDigitalOrderNotificationStepInput, import("@medusajs/framework/types").NotificationDTO>;
export {};
