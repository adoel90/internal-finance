import { Lifetime } from "awilix";
import midtransClient from "midtrans-client";
import { StorePaymentCollection,AuthorizePaymentInput, AuthorizePaymentOutput } from "@medusajs/framework/types";

export interface IMidtransCustomer {
    first_name: string;
    email: string;
    phone: string;
}

type TransactionInput = {
  orderId: string;
  grossAmount: number | BigNumber;
  customer: IMidtransCustomer
  paymentCollection?: StorePaymentCollection;
};

class PaymentDirectMidtransModuleService {

    
    private snap: midtransClient.Snap;
    constructor() {
                      
        this.snap = new midtransClient.Snap({
            isProduction: process.env.NODE_ENV === 'production' ? true : false,
            serverKey: process.env.MIDTRANS_SERVER_KEY || "",
        });
    }

    async createTransaction(data: TransactionInput) {

          const parameter = {
            transaction_details: {
              order_id: data.orderId,
              gross_amount: data.grossAmount,
            },
            customer_details: data.customer,
            // paymentCollection: data.paymentCollection
          };

          const transaction = await this.snap.createTransaction(parameter);
          return transaction;
    }
    
}

export default PaymentDirectMidtransModuleService