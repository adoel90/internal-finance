export declare const BillingCompany: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    user_id: import("@medusajs/framework/utils").TextProperty;
    company_name: import("@medusajs/framework/utils").TextProperty;
    company_logo: import("@medusajs/framework/utils").NullableModifier<string, import("@medusajs/framework/utils").TextProperty>;
}>, "company">;
export default BillingCompany;
