import { StorePaymentCollection } from "@medusajs/framework/types";
export interface IMidtransCustomer {
    first_name: string;
    email: string;
    phone: string;
}
type TransactionInput = {
    orderId: string;
    grossAmount: number | BigNumber;
    customer: IMidtransCustomer;
    paymentCollection?: StorePaymentCollection;
};
declare class PaymentDirectMidtransModuleService {
    private snap;
    constructor();
    createTransaction(data: TransactionInput): Promise<any>;
}
export default PaymentDirectMidtransModuleService;
