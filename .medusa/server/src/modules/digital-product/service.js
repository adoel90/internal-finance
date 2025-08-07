"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const digital_product_1 = __importDefault(require("./models/digital-product"));
const digital_product_order_1 = __importDefault(require("./models/digital-product-order"));
const digital_product_media_1 = __importDefault(require("./models/digital-product-media"));
class DigitalProductModuleService extends (0, utils_1.MedusaService)({
    DigitalProduct: digital_product_1.default,
    DigitalProductMedia: digital_product_media_1.default,
    DigitalProductOrder: digital_product_order_1.default
}) {
}
exports.default = DigitalProductModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2RpZ2l0YWwtcHJvZHVjdC9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXlEO0FBQ3pELCtFQUFzRDtBQUN0RCwyRkFBaUU7QUFDakUsMkZBQWlFO0FBRWpFLE1BQU0sMkJBQTRCLFNBQVEsSUFBQSxxQkFBYSxFQUFDO0lBQ3RELGNBQWMsRUFBZCx5QkFBYztJQUNkLG1CQUFtQixFQUFuQiwrQkFBbUI7SUFDbkIsbUJBQW1CLEVBQW5CLCtCQUFtQjtDQUNwQixDQUFDO0NBRUQ7QUFFRCxrQkFBZSwyQkFBMkIsQ0FBQSJ9