import { AbstractPaymentProvider, PaymentSessionStatus } from "@medusajs/framework/utils";
import { Logger } from "@medusajs/framework/types";
import { CancelPaymentInput, CancelPaymentOutput, InitiatePaymentInput, InitiatePaymentOutput, DeletePaymentInput, DeletePaymentOutput, RefundPaymentInput, RefundPaymentOutput, RetrievePaymentInput, RetrievePaymentOutput, UpdatePaymentInput, UpdatePaymentOutput, CapturePaymentInput, CapturePaymentOutput, GetPaymentStatusInput, GetPaymentStatusOutput, ProviderWebhookPayload, WebhookActionResult } from "@medusajs/types";
type Options = {
    accountNumber?: string;
    accountName?: string;
};
type InjectedDependencies = {
    logger: Logger;
};
declare class PaymentDirectBsiService extends AbstractPaymentProvider<Options> {
    static identifier: string;
    protected logger_: Logger;
    protected options_: Options;
    constructor(container: InjectedDependencies, options: Options);
    cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput>;
    initiatePayment(input: InitiatePaymentInput): Promise<InitiatePaymentOutput>;
    deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput>;
    refundPayment(input: RefundPaymentInput): Promise<RefundPaymentOutput>;
    retrievePayment(input: RetrievePaymentInput): Promise<RetrievePaymentOutput>;
    updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput>;
    getWebhookActionAndData(data: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult>;
    authorizePayment(paymentSessionData: Record<string, unknown>): Promise<{
        status: PaymentSessionStatus;
        data: {
            id: unknown;
        };
    }>;
    capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput>;
    getPaymentStatus(input: GetPaymentStatusInput): Promise<GetPaymentStatusOutput>;
}
export default PaymentDirectBsiService;
