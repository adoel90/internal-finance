import { OrderStatus } from "../types";
declare const DigitalProductOrder: import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
    id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
    status: import("@medusajs/framework/utils").EnumProperty<typeof OrderStatus>;
    products: import("@medusajs/framework/utils").ManyToMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
        id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
        name: import("@medusajs/framework/utils").TextProperty;
        medias: import("@medusajs/framework/utils").HasMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder<{
            id: import("@medusajs/framework/utils").PrimaryKeyModifier<string, import("@medusajs/framework/utils").IdProperty>;
            type: import("@medusajs/framework/utils").EnumProperty<typeof import("../types").MediaType>;
            fileId: import("@medusajs/framework/utils").TextProperty;
            mimeType: import("@medusajs/framework/utils").TextProperty;
            digitalProduct: import("@medusajs/framework/utils").BelongsTo<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "digital_product">, undefined>;
        }>, "digital_product_media">>;
        orders: import("@medusajs/framework/utils").ManyToMany<() => import("@medusajs/framework/utils").DmlEntity<import("@medusajs/framework/utils").DMLEntitySchemaBuilder</*elided*/ any>, "digital_product_order">>;
    }>, "digital_product">>;
}>, "digital_product_order">;
export default DigitalProductOrder;
