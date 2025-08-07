import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework";
import { z } from "zod";
import { createDigitalProductsSchema } from "../../validation-schemas";
export declare const GET: (req: AuthenticatedMedusaRequest, res: MedusaResponse) => Promise<void>;
type CreateRequestBody = z.infer<typeof createDigitalProductsSchema>;
export declare const POST: (req: AuthenticatedMedusaRequest<CreateRequestBody>, res: MedusaResponse) => Promise<void>;
export {};
