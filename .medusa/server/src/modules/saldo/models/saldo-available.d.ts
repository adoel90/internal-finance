import { Currencies } from "src/modules/cashflow/types";
declare const SaldoAvailable: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    amount: import("@medusajs/framework/utils").NumberProperty;
    currency_code: import("@medusajs/framework/utils").NullableModifier<Currencies, import("@medusajs/framework/utils").EnumProperty<typeof Currencies>>;
    created_note_at: import("@medusajs/framework/utils").NullableModifier<Date, import("@medusajs/framework/utils").DateTimeProperty>;
}>, "saldo_available">;
export default SaldoAvailable;
