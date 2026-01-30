import { AmountForPengeluaran, Currencies } from "../types";
declare const Pengeluaran: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    payment_method: import("@medusajs/framework/utils").TextProperty;
    amount: import("@medusajs/framework/utils").NumberProperty;
    currency_code: import("@medusajs/framework/utils").NullableModifier<Currencies, import("@medusajs/framework/utils").EnumProperty<typeof Currencies>>;
    description: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    created_note_at: import("@medusajs/framework/utils").DateTimeProperty;
    amount_of_outflow_for: import("@medusajs/framework/utils").NullableModifier<AmountForPengeluaran, import("@medusajs/framework/utils").EnumProperty<typeof AmountForPengeluaran>>;
    keterangan_tambahan: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
}>, "pengeluaran">;
export default Pengeluaran;
