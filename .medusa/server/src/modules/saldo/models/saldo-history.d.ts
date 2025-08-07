import { Currencies } from "src/modules/cashflow/types";
declare const SaldoHistory: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    currency_code: import("@medusajs/framework/utils").NullableModifier<Currencies, import("@medusajs/framework/utils").EnumProperty<typeof Currencies>>;
    amountSaldo: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        nama_bank: import("@medusajs/framework/utils").TextProperty;
        no_rek: import("@medusajs/framework/utils").NumberProperty;
        atas_nama: import("@medusajs/framework/utils").TextProperty;
        keterangan: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        allowed_see: import("@medusajs/framework/utils").NullableModifier<boolean, import("@medusajs/framework/utils").BooleanProperty>;
        histories: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "saldo_history">>;
    }>, "saldo_allrekening">, undefined>;
    amount: import("@medusajs/framework/utils").NumberProperty;
    updated_saldo_at: import("@medusajs/framework/utils").NullableModifier<Date, import("@medusajs/framework/utils").DateTimeProperty>;
}>, "saldo_history">;
export default SaldoHistory;
