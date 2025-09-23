import type { AuthenticatedMedusaRequest, MedusaResponse, MedusaRequest } from "@medusajs/framework/http";
import { ITaskStatusInput } from "src/modules/task/types";
export declare function POST(req: AuthenticatedMedusaRequest<ITaskStatusInput>, res: MedusaResponse): Promise<MedusaResponse>;
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
