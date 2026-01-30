import type {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import BillingModuleService from "../../../modules/billing/service";

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const billingModuleService: BillingModuleService = req.scope.resolve("billingModuleService");
  
  const apiUsages = await billingModuleService.listApiUsages();
  
  const totalRequests = apiUsages.reduce((acc, usage) => acc + usage.request_count, 0);
  
  res.json({ total_requests: totalRequests });
}
