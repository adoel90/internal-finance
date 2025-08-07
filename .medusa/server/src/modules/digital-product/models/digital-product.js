"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const digital_product_media_1 = __importDefault(require("./digital-product-media"));
const digital_product_order_1 = __importDefault(require("./digital-product-order"));
const DigitalProduct = utils_1.model.define("digital_product", {
    id: utils_1.model.id().primaryKey(),
    name: utils_1.model.text(),
    medias: utils_1.model.hasMany(() => digital_product_media_1.default, {
        mappedBy: "digitalProduct"
    }),
    orders: utils_1.model.manyToMany(() => digital_product_order_1.default, {
        mappedBy: "products"
    })
})
    .cascades({
    delete: ["medias"]
});
exports.default = DigitalProduct;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXRhbC1wcm9kdWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGlnaXRhbC1wcm9kdWN0L21vZGVscy9kaWdpdGFsLXByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsb0ZBQXlEO0FBQ3pELG9GQUF5RDtBQUV6RCxNQUFNLGNBQWMsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFO0lBQ3JELEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQ2xCLE1BQU0sRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLCtCQUFtQixFQUFFO1FBQy9DLFFBQVEsRUFBRSxnQkFBZ0I7S0FDM0IsQ0FBQztJQUNGLE1BQU0sRUFBRSxhQUFLLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLCtCQUFtQixFQUFFO1FBQ2xELFFBQVEsRUFBRSxVQUFVO0tBQ3JCLENBQUM7Q0FDSCxDQUFDO0tBQ0QsUUFBUSxDQUFDO0lBQ1IsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDO0NBQ25CLENBQUMsQ0FBQTtBQUVGLGtCQUFlLGNBQWMsQ0FBQSJ9