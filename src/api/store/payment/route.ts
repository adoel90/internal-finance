
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

      res.json({ token: result.token });
    } catch (err) {
      
      console.error(err);
      res.status(500).json({ message: "Midtrans error", detail: err.message });
    }    
}
