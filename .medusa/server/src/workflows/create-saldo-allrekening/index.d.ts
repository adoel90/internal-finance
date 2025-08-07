import { ISaldoAllRekeningInput } from "src/modules/saldo/types";
import { Currencies } from "src/modules/cashflow/types";
export declare const createSaldoAllRekeningStep1: import("@medusajs/framework/workflows-sdk").StepFunction<ISaldoAllRekeningInput, {
    id: string;
    nama_bank: string;
    no_rek: number;
    atas_nama: string;
    keterangan: string;
    allowed_see: boolean;
    histories: {
        id: string;
        currency_code: Currencies;
        amountSaldo: /*elided*/ any;
        amount: number;
        updated_saldo_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        amountSaldo_id: string;
    }[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
interface CreateSaldoHistoryStepInput {
    saldoRekening: any;
    payload: {
        amount_saldo: number;
        updated_saldo_at: Date;
    };
}
export declare const createSaldoHistoryStep: import("@medusajs/framework/workflows-sdk").StepFunction<CreateSaldoHistoryStepInput, import("@medusajs/framework/workflows-sdk").WorkflowResult<{
    id: string;
    currency_code: Currencies;
    amountSaldo: {
        id: string;
        nama_bank: string;
        no_rek: number;
        atas_nama: string;
        keterangan: string;
        allowed_see: boolean;
        histories: /*elided*/ any[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    };
    amount: number;
    updated_saldo_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    amountSaldo_id: string;
}>>;
export declare const createSaldoAllRekeningWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ISaldoAllRekeningInput, {
    id: string;
    nama_bank: string;
    no_rek: number;
    atas_nama: string;
    keterangan: string;
    allowed_see: boolean;
    histories: {
        id: string;
        currency_code: Currencies;
        amountSaldo: /*elided*/ any;
        amount: number;
        updated_saldo_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        amountSaldo_id: string;
    }[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createSaldoAllRekeningWorkflow;
