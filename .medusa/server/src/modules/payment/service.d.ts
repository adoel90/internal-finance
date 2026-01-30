import { AbstractPaymentProvider, BigNumber } from "@medusajs/framework/utils";
import { Logger } from "@medusajs/framework/types";
import { AuthorizePaymentInput, AuthorizePaymentOutput, CancelPaymentInput, CancelPaymentOutput, CapturePaymentInput, CapturePaymentOutput, CreateAccountHolderInput, DeleteAccountHolderInput, DeletePaymentInput, DeletePaymentOutput, GetPaymentStatusInput, GetPaymentStatusOutput, ProviderWebhookPayload, WebhookActionResult, InitiatePaymentInput, InitiatePaymentOutput, ListPaymentMethodsInput, RefundPaymentInput, RefundPaymentOutput, RetrievePaymentInput, RetrievePaymentOutput, SavePaymentMethodInput, UpdateAccountHolderInput, UpdatePaymentInput, UpdatePaymentOutput } from "@medusajs/framework/types";
type Options = {
    apiKey: string;
};
type InjectedDependencies = {
    logger: Logger;
};
type TransactionInput = {
    orderId: string;
    grossAmount: number | BigNumber;
    customer: {
        first_name: string;
        email: string;
        phone: string;
    };
};
declare class PaymentModuleService extends AbstractPaymentProvider<Options> {
    protected logger_: Logger;
    protected options_: Options;
    protected client: any;
    static LIFE_TIME: import("awilix").LifetimeType;
    private snap;
    static identifier: string;
    constructor(container: InjectedDependencies, options: Options);
    getMessage(): Promise<string>;
    createTransaction(data: TransactionInput): Promise<any>;
    authorizePayment(input: AuthorizePaymentInput): Promise<AuthorizePaymentOutput>;
    cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput>;
    capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput>;
    createAccountHolder({ context, data }: CreateAccountHolderInput): Promise<{
        id: string;
        data?: undefined;
    } | {
        id: any;
        data: Record<string, unknown>;
    }>;
    deleteAccountHolder({ context }: DeleteAccountHolderInput): Promise<{}>;
    deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput>;
    getPaymentStatus(input: GetPaymentStatusInput): Promise<GetPaymentStatusOutput>;
    getWebhookActionAndData(payload: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult>;
    initiatePayment(input: InitiatePaymentInput): Promise<InitiatePaymentOutput>;
    listPaymentMethods({ context }: ListPaymentMethodsInput): Promise<any>;
    refundPayment(input: RefundPaymentInput): Promise<RefundPaymentOutput>;
    retrievePayment(input: RetrievePaymentInput): Promise<RetrievePaymentOutput>;
    savePaymentMethod({ context, data }: SavePaymentMethodInput): Promise<{
        id: any;
        data: Record<string, unknown>;
    }>;
    updateAccountHolder({ context, data }: UpdateAccountHolderInput): Promise<{
        id: any;
        data: Record<string, unknown>;
    }>;
    updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput>;
    static validateOptions(options: Record<any, any>): void;
}
export default PaymentModuleService;
