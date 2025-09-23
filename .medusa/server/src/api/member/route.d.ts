import type { AuthenticatedMedusaRequest, MedusaResponse, MedusaRequest } from "@medusajs/framework/http";
type RequestBody = {
    name: string;
    role_id: string;
    email: string;
};
export declare function POST(req: AuthenticatedMedusaRequest<RequestBody>, res: MedusaResponse): Promise<MedusaResponse>;
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
export {};
