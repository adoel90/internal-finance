import type { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
type RequestBody = {
    email: string;
    first_name?: string;
    last_name?: string;
    company_name?: string;
    phone?: string;
    password?: string;
};
export declare const POST: (req: AuthenticatedMedusaRequest<RequestBody>, res: MedusaResponse) => Promise<MedusaResponse>;
export {};
