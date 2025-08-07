"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../types");
const digital_product_1 = __importDefault(require("./digital-product"));
const DigitalProductOrder = utils_1.model.define("digital_product_order", {
    id: utils_1.model.id().primaryKey(),
    status: utils_1.model.enum(types_1.OrderStatus),
    products: utils_1.model.manyToMany(() => digital_product_1.default, {
        mappedBy: "orders",
        pivotTable: "digitalproduct_digitalproductorders"
    })
});
exports.default = DigitalProductOrder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXRhbC1wcm9kdWN0LW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGlnaXRhbC1wcm9kdWN0L21vZGVscy9kaWdpdGFsLXByb2R1Y3Qtb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsb0NBQXNDO0FBQ3RDLHdFQUE4QztBQUU5QyxNQUFNLG1CQUFtQixHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUU7SUFDaEUsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsbUJBQVcsQ0FBQztJQUMvQixRQUFRLEVBQUUsYUFBSyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBYyxFQUFFO1FBQy9DLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLFVBQVUsRUFBRSxxQ0FBcUM7S0FDbEQsQ0FBQztDQUNILENBQUMsQ0FBQTtBQUVGLGtCQUFlLG1CQUFtQixDQUFBIn0=