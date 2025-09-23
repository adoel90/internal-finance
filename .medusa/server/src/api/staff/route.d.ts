import type { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
type RequestBody = {
    firstName?: string;
    lastName?: string;
    email: string;
};
export declare function POST(req: AuthenticatedMedusaRequest<RequestBody>, res: MedusaResponse): Promise<MedusaResponse>;
export declare function GET(req: AuthenticatedMedusaRequest, res: MedusaResponse): Promise<void>;
export {};
