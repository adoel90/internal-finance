import { AbstractFulfillmentProviderService } from "@medusajs/framework/utils";
import { CreateFulfillmentResult, FulfillmentDTO, FulfillmentItemDTO, FulfillmentOption, FulfillmentOrderDTO } from "@medusajs/framework/types";
declare class DigitalProductFulfillmentService extends AbstractFulfillmentProviderService {
    static identifier: string;
    constructor();
    getFulfillmentOptions(): Promise<FulfillmentOption[]>;
    validateFulfillmentData(optionData: Record<string, unknown>, data: Record<string, unknown>, context: Record<string, unknown>): Promise<any>;
    validateOption(data: Record<string, any>): Promise<boolean>;
    createFulfillment(data: Record<string, unknown>, items: Partial<Omit<FulfillmentItemDTO, "fulfillment">>[], order: Partial<FulfillmentOrderDTO> | undefined, fulfillment: Partial<Omit<FulfillmentDTO, "provider_id" | "data" | "items">>): Promise<CreateFulfillmentResult>;
    cancelFulfillment(): Promise<any>;
    createReturnFulfillment(): Promise<any>;
}
export default DigitalProductFulfillmentService;
