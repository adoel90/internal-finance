/**
 * Nama table: payment_proof
 * - gunakan snake_case untuk nama tabel (dml convention)
 * - Medusa otomatis menambahkan created_at, updated_at, deleted_at
 */
declare const PaymentProof: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    cart_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    file_key: import("@medusajs/framework/utils").TextProperty;
    file_url: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    uploaded_by: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    status: import("@medusajs/framework/utils").EnumProperty<["pending", "verified", "rejected"]>;
    note: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
}>, "payment_proof">;
export default PaymentProof;
