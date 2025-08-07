import { ISaldoAllRekeningInput, ISaldoTersediaInput } from "src/modules/saldo/types";
export declare const createSaldoTersediaStep1: import("@medusajs/framework/workflows-sdk").StepFunction<ISaldoTersediaInput, {
    id: string;
    nama_bank: string;
    no_rek: number;
    atas_nama: string;
    keterangan: string;
    allowed_see: boolean;
    histories_saldo_tersedia: {
        id: string;
        currency_code: import("../../modules/cashflow/types").Currencies;
        amountSaldoHistoryTersedia: /*elided*/ any;
        amount: number;
        updated_saldo_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        amountSaldoHistoryTersedia_id: string;
    }[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}>;
export declare const createSaldoTersediaWorkflow: import("@medusajs/framework/workflows-sdk").ReturnWorkflow<ISaldoAllRekeningInput, {
    id: string;
    nama_bank: string;
    no_rek: number;
    atas_nama: string;
    keterangan: string;
    allowed_see: boolean;
    histories_saldo_tersedia: {
        id: string;
        currency_code: import("../../modules/cashflow/types").Currencies;
        amountSaldoHistoryTersedia: /*elided*/ any;
        amount: number;
        updated_saldo_at: Date;
        created_at: Date;
        updated_at: Date;
        deleted_at: Date;
        amountSaldoHistoryTersedia_id: string;
    }[];
    created_at: Date;
    updated_at: Date;
    deleted_at: Date;
}, []>;
export default createSaldoTersediaWorkflow;
