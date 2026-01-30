import { MedusaNextFunction, MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
export declare function trackUsage(): (req: MedusaRequest, res: MedusaResponse, next: MedusaNextFunction) => Promise<void>;
