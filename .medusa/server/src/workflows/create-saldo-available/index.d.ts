import { ISaldoAvailableInput } from "src/modules/cashflow/types";
export declare const createSaldoAvailableStep1: import("@medusajs/framework/workflows-sdk").StepFunction<ISaldoAvailableInput, {
    id: string;
    amount: number;
    currency_code: import("src/modules/cashflow/types").Currencies;
    created_note_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createSaldoAvailableWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ISaldoAvailableInput, {
    id: string;
    amount: number;
    currency_code: import("src/modules/cashflow/types").Currencies;
    created_note_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createSaldoAvailableWorkflow;
