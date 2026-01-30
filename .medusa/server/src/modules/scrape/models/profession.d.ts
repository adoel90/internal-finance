export interface Profession {
    id: string;
    name: string;
}
export declare const Profession: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    name: import("@medusajs/framework/utils").TextProperty;
}>, "profession">;
export default Profession;
