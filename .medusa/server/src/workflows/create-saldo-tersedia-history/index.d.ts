import { ISaldoHistoryInput } from "src/modules/saldo/types";
export declare const creatStep1: import("@medusajs/framework/workflows-sdk").StepFunction<ISaldoHistoryInput, {
    id: string;
    currency_code: import("../../modules/cashflow/types").Currencies;
    amountSaldoHistoryTersedia: {
        id: string;
        nama_bank: string;
        no_rek: number;
        atas_nama: string;
        keterangan: string;
        allowed_see: boolean;
        histories_saldo_tersedia: /*elided*/ any[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    };
    amount: number;
    updated_saldo_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    amountSaldoHistoryTersedia_id: string;
}>;
export declare const createSaldoHistoryTersediaWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ISaldoHistoryInput, {
    id: string;
    currency_code: import("../../modules/cashflow/types").Currencies;
    amountSaldoHistoryTersedia: {
        id: string;
        nama_bank: string;
        no_rek: number;
        atas_nama: string;
        keterangan: string;
        allowed_see: boolean;
        histories_saldo_tersedia: /*elided*/ any[];
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
    };
    amount: number;
    updated_saldo_at: Date;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
    amountSaldoHistoryTersedia_id: string;
}, []>;
export default createSaldoHistoryTersediaWorkflow;
