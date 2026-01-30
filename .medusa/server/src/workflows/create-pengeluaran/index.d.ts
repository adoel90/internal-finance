import { PengeluaranInput } from '../../modules/cashflow/types';
export declare const createPengeluaranStep1: import("@medusajs/framework/workflows-sdk").StepFunction<PengeluaranInput, {
    id: string;
    payment_method: string;
    amount: number;
    currency_code: import("../../modules/cashflow/types").Currencies;
    description: string;
    created_note_at: Date;
    amount_of_outflow_for: import("../../modules/cashflow/types").AmountForPengeluaran;
    keterangan_tambahan: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createPengeluaranWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<PengeluaranInput, {
    id: string;
    payment_method: string;
    amount: number;
    currency_code: import("../../modules/cashflow/types").Currencies;
    description: string;
    created_note_at: Date;
    amount_of_outflow_for: import("../../modules/cashflow/types").AmountForPengeluaran;
    keterangan_tambahan: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createPengeluaranWorkflow;
