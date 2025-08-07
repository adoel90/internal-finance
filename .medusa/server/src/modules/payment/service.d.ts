type TransactionInput = {
    orderId: string;
    grossAmount: number;
    customer: {
        first_name: string;
        email: string;
        phone: string;
    };
};
declare class PaymentModuleService {
    static LIFE_TIME: import("awilix").LifetimeType;
    private snap;
    constructor();
    getMessage(): Promise<string>;
    createTransaction(data: TransactionInput): Promise<any>;
}
export default PaymentModuleService;
