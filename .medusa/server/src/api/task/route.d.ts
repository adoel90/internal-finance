import type { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { IPayloadInput } from "src/modules/task/types";
export declare function POST(req: AuthenticatedMedusaRequest<IPayloadInput>, res: MedusaResponse): Promise<MedusaResponse>;
