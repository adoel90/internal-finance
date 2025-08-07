import { Currencies } from "src/modules/cashflow/types";
declare const SaldoAllbank: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    nama_bank: import("@medusajs/framework/utils").TextProperty;
    no_rek: import("@medusajs/framework/utils").NumberProperty;
    atas_nama: import("@medusajs/framework/utils").TextProperty;
    keterangan: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    allowed_see: import("@medusajs/framework/utils").NullableModifier<boolean, import("@medusajs/framework/utils").BooleanProperty>;
    currency_code: import("@medusajs/framework/utils").NullableModifier<Currencies, import("@medusajs/framework/utils").EnumProperty<typeof Currencies>>;
    amount_saldo: import("@medusajs/framework/utils").NumberProperty;
    updated_saldo_at: import("@medusajs/framework/utils").DateTimeProperty;
}>, "saldo_allbank">;
export default SaldoAllbank;
