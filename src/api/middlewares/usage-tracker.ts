import { MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import BillingModuleService from "../../modules/billing/service";

export function trackUsage() {
  return async (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => {
    try {
      const billingModuleService: BillingModuleService = req.scope.resolve("billingModuleService");
      
      // Assuming req.user contains the authenticated user's data and has an id property.
      // This might need adjustment based on the actual structure of the user object.
      const userId = (req as any).user?.id;

      if (userId) {
        const apiName = req.path; // Or a more specific name if available
        const today = new Date();
        const startOfDay = new Date(today);
        startOfDay.setHours(0, 0, 0, 0);

        const endOfDay = new Date(today);
        endOfDay.setHours(23, 59, 59, 999);
        
        // Find if there is an existing usage entry for today
        const existingUsage = await billingModuleService.listApiUsages({
            user_id: userId,
            api_name: apiName,
            date: { gte: startOfDay, lte: endOfDay }
        });

        if (existingUsage.length > 0) {
          // Increment request_count
          const usage = existingUsage[0];
          await billingModuleService.updateApiUsages(
            { id: usage.id },
            {
              request_count: usage.request_count + 1,
            }
          );
        } else {
          // Create new usage entry
          await billingModuleService.createApiUsages({
            user_id: userId,
            api_name: apiName,
            date: new Date(),
            request_count: 1,
            success_count: 0, // Success/failed counts would need more logic, maybe in the response middleware
            failed_count: 0
          });
        }
      }
    } catch (error) {
      // Log the error but don't block the request.
      console.error("Error in usage tracking middleware:", error);
    }
    
    next();
  };
}
