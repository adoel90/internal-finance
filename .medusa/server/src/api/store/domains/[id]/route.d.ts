import { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http";
export declare function GET(req: AuthenticatedMedusaRequest, res: MedusaResponse): Promise<MedusaResponse>;
export declare function POST(req: AuthenticatedMedusaRequest, res: MedusaResponse): Promise<MedusaResponse>;
export declare function DELETE(req: AuthenticatedMedusaRequest, res: MedusaResponse): Promise<MedusaResponse>;
