declare const PaymentProofService_base: import("@medusajs/framework/utils").MedusaServiceReturnType<import("@medusajs/framework/utils").ModelConfigurationsToConfigTemplate<{
    readonly PaymentProof: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        cart_id: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        file_key: import("@medusajs/framework/utils").TextProperty;
        file_url: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        uploaded_by: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
        status: import("@medusajs/framework/utils").EnumProperty<["pending", "verified", "rejected"]>;
        note: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
    }>, "payment_proof">;
}>>;
declare class PaymentProofService extends PaymentProofService_base {
}
export default PaymentProofService;
