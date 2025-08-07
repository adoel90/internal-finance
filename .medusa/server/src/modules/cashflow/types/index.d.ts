export declare enum AmountFor {
    STT_MAHASISWA_BERBAYAR = "STT (Mahasiswa berbayar)",
    STT_HIBAH_BEASTUDI = "STT (Hibah beastudi)",
    STT_MAHASISWA_BARU = "STT (Mahasiswa baru)",
    NF_ACADEMY = "NF Academy",
    OTHER_STT = "OTHER (STT)",
    OTHER_NF_ACADEMY = "OTHER (NF Academy)"
}
export declare enum AmountForPengeluaran {
    STT_PENGGAJIAN_AND_THR = "STT (Penggajian Dan THR)",
    NF_PENGGAJIAN_AND_THR = "NF Academy (Penggajian Dan THR)",
    STT_OPERASIONAL = "STT (Operasional)",
    NF_OPERASIONAL = "NF Academy (Operasional)",
    STT_PENGEMBALIAN = "STT (Pengembalian)",
    NF_PENGEMBALIAN = "NF Academy (Pengembalian)",
    OTHER_STT = "OTHER (STT)",
    OTHER_NF_ACADEMY = "OTHER (NF Academy)"
}
export declare enum Currencies {
    ID = "Rp",
    US = "$"
}
export type PenerimaanInput = {
    description: string | null;
    payment_method: string | null;
    amount: number | null;
    currency_code: Currencies | null;
    amount_of_inflow_for: AmountFor | null;
    created_note_at: Date | null;
    keterangan_tambahan?: string | null;
};
export type PengeluaranInput = {
    description: string | null;
    amount: number | null;
    created_note_at: Date | null;
};
export type PengeluaranProyeksiCashcallInput = {
    amount: number | null;
    created_note_at: Date | null;
    amount_of_inflow_for?: AmountFor | null;
};
export type SummaryPenerimaanInput = {
    total_penerimaan: number | null;
};
export type ISaldoAvailableInput = {
    amount: number | null;
};
