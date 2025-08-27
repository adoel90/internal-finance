
import { 
  MedusaRequest, 
  MedusaResponse
} from "@medusajs/framework";
import PaymentDirectMidtransModuleService, {IMidtransCustomer} from "../../../modules/payment-direct-midtrans/service";
import { PAYMENT_DIRECT_MIDTRANS_MODULE} from "../../../modules/payment-direct-midtrans";
import { StorePaymentCollection } from "@medusajs/framework/types";
import { Modules } from "@medusajs/utils";



export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const paymentService : PaymentDirectMidtransModuleService = req.scope.resolve(PAYMENT_DIRECT_MIDTRANS_MODULE) as unknown as PaymentDirectMidtransModuleService;
  const paymentMedusaService = req.scope.resolve(Modules.PAYMENT);
    
  // paymentService.getMessage();
 const { orderId, grossAmount, customer, paymentCollection } = req.body as {
      orderId: string;
      grossAmount: number;
      customer: IMidtransCustomer;
      paymentCollection?: StorePaymentCollection;
    };    
    
    
    // Authorize payment session
    const sessionId = paymentCollection?.payment_sessions?.[0]?.id;
    if (!sessionId) {
      return res.status(400).json({ message: "Missing payment session ID" });
    }
    const paymentAutorizedResult = await paymentMedusaService.authorizePaymentSession(sessionId as string, {});

    // console.log("Payment after authorize: ", paymentAutorizedResult)
    if (!paymentAutorizedResult.data) {
      return res.status(500).json({ message: "Payment authorization failed" });
    }

    try {
      const result = await paymentService.createTransaction({
        orderId,
        grossAmount,
        customer,
        // paymentCollection
      });

      // Check if result and token exist before accessing
      if (!result || !result.token) {

        console.error('Midtrans returned null or invalid response:', result);

        res.status(500).json({ 
          message: "Payment token generation failed", 
          detail: "Invalid response from payment gateway" 
        });

        return;
      }

      res.json({ token: result.token });

    } catch (err) {
      
      console.error('Payment service error:', err);
      res.status(500).json({ message: "Midtrans error", detail: err.message });
    }
}
