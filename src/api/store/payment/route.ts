
import { 
  MedusaRequest, 
  MedusaResponse
} from "@medusajs/framework";
import PaymentModuleService from "../../../modules/payment/service";
import { PAYMENT_MODULE} from "../../../modules/payment";


export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {

  const paymentService : PaymentModuleService = req.scope.resolve(PAYMENT_MODULE) as unknown as PaymentModuleService;
    
  paymentService.getMessage();

  const { orderId, grossAmount, customer } = req.body as {
    orderId: string;
    grossAmount: number;
    customer: any;
  };
    try {
      const result = await paymentService.createTransaction({
        orderId,
        grossAmount,
        customer,
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
