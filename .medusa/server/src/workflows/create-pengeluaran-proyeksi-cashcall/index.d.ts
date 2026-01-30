import { PengeluaranProyeksiCashcallInput } from "../../modules/cashflow/types/index";
export declare const createPengeluaranProyeksiCashcallWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<PengeluaranProyeksiCashcallInput, {
    id: string;
    created_note_at: Date;
    amount_of_inflow_for: import("../../modules/cashflow/types/index").AmountFor;
    amount: number;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createPengeluaranProyeksiCashcallWorkflow;
