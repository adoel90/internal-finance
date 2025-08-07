import { MedusaRequest, MedusaResponse } from "@medusajs/framework";
interface UpdateProyeksiCashcallBody {
    amount: number;
    created_note_at: string;
}
export declare const GET: (req: MedusaRequest, res: MedusaResponse) => Promise<void>;
export declare const PUT: (req: MedusaRequest & {
    body: UpdateProyeksiCashcallBody;
}, res: MedusaResponse) => Promise<void>;
export {};
