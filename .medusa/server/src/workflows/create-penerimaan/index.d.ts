import { PenerimaanInput } from '../../modules/cashflow/types';
export declare const createPenerimaanStep1: import("@medusajs/framework/workflows-sdk").StepFunction<PenerimaanInput, {
    id: string;
    payment_method: string;
    amount: number;
    currency_code: import("../../modules/cashflow/types").Currencies;
    description: string;
    created_note_at: Date;
    amount_of_inflow_for: import("../../modules/cashflow/types").AmountFor;
    keterangan_tambahan: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createPenerimaanWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<PenerimaanInput, {
    id: string;
    payment_method: string;
    amount: number;
    currency_code: import("../../modules/cashflow/types").Currencies;
    description: string;
    created_note_at: Date;
    amount_of_inflow_for: import("../../modules/cashflow/types").AmountFor;
    keterangan_tambahan: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createPenerimaanWorkflow;
