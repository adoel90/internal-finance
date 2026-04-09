import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
interface UpdateSaldoAvailableBody {
    amount: number;
}
export declare const PUT: (req: MedusaRequest & {
    body: UpdateSaldoAvailableBody;
}, res: MedusaResponse) => Promise<void>;
export {};
