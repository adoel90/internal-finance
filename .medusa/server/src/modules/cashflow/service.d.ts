declare const CashflowModuleService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly Penerimaan: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        payment_method: import("@medusajs/framework/utils").TextProperty;
        amount: import("@medusajs/framework/utils").NumberProperty;
        currency_code: import("@medusajs/framework/utils").NullableModifier<import("./types").Currencies, import("@medusajs/framework/utils").EnumProperty<typeof import("./types").Currencies>>;
        description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        created_note_at: import("@medusajs/framework/utils").DateTimeProperty;
        amount_of_inflow_for: import("@medusajs/framework/utils").NullableModifier<import("./types").AmountFor, import("@medusajs/framework/utils").EnumProperty<typeof import("./types").AmountFor>>;
        keterangan_tambahan: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    }>, "penerimaan">;
    readonly Pengeluaran: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        payment_method: import("@medusajs/framework/utils").TextProperty;
        amount: import("@medusajs/framework/utils").NumberProperty;
        currency_code: import("@medusajs/framework/utils").NullableModifier<import("./types").Currencies, import("@medusajs/framework/utils").EnumProperty<typeof import("./types").Currencies>>;
        description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        created_note_at: import("@medusajs/framework/utils").DateTimeProperty;
        amount_of_outflow_for: import("@medusajs/framework/utils").NullableModifier<import("./types").AmountForPengeluaran, import("@medusajs/framework/utils").EnumProperty<typeof import("./types").AmountForPengeluaran>>;
        keterangan_tambahan: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    }>, "pengeluaran">;
    readonly PengeluaranProyeksiCashcall: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        created_note_at: import("@medusajs/framework/utils").DateTimeProperty;
        amount_of_inflow_for: import("@medusajs/framework/utils").NullableModifier<import("./types").AmountFor, import("@medusajs/framework/utils").EnumProperty<typeof import("./types").AmountFor>>;
        amount: import("@medusajs/framework/utils").NumberProperty;
    }>, "pengeluaran_proyeksi_cashcall">;
}>>;
declare class CashflowModuleService extends CashflowModuleService_base {
    getTotalSummaryPenerimaan(listPenerimaan: {
        amount?: number;
    }[]): Promise<number>;
    getTotalSummaryPengeluaran(listPengeluaran: {
        amount?: number;
    }[]): Promise<number>;
}
export default CashflowModuleService;
