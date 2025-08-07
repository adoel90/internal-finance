import { AmountFor } from "../types";
declare const PengeluaranProyeksiCashcall: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    created_note_at: import("@medusajs/framework/utils").DateTimeProperty;
    amount_of_inflow_for: import("@medusajs/framework/utils").NullableModifier<AmountFor, import("@medusajs/framework/utils").EnumProperty<typeof AmountFor>>;
    amount: import("@medusajs/framework/utils").NumberProperty;
}>, "pengeluaran_proyeksi_cashcall">;
export default PengeluaranProyeksiCashcall;
