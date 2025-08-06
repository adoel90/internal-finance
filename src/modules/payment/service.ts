import { Lifetime } from "awilix";
import midtransClient from "midtrans-client";
// import { } from "@medusajs/payment";


type TransactionInput = {
  orderId: string;
  grossAmount: number;
  customer: {
    first_name: string;
    email: string;
    phone: string;
  };
};

class PaymentModuleService {

    static LIFE_TIME = Lifetime.SCOPED;  
    private snap: midtransClient.Snap;

    constructor() {
      
      this.snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.MIDTRANS_SERVER_KEY || "",
      });
    }
    
    async getMessage(): Promise<string> {
        return "Hello from PaymentModuleService!";
    }
  
    async createTransaction(data: TransactionInput) {
      const parameter = {
        transaction_details: {
          order_id: data.orderId,
          gross_amount: data.grossAmount,
        },
        customer_details: data.customer,
      };
  
      const transaction = await this.snap.createTransaction(parameter);
      return transaction;
    }
}

export default PaymentModuleService