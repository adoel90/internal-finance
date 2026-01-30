"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const digital_product_1 = __importDefault(require("../modules/digital-product"));
const order_1 = __importDefault(require("@medusajs/medusa/order"));
const utils_1 = require("@medusajs/framework/utils");
exports.default = (0, utils_1.defineLink)({
    linkable: digital_product_1.default.linkable.digitalProductOrder,
    deleteCascade: true
}, order_1.default.linkable.order);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXRhbC1wcm9kdWN0LW9yZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL2RpZ2l0YWwtcHJvZHVjdC1vcmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLGlGQUE2RDtBQUM3RCxtRUFBZ0Q7QUFDaEQscURBQXNEO0FBRXRELGtCQUFlLElBQUEsa0JBQVUsRUFDdkI7SUFDRSxRQUFRLEVBQUUseUJBQW9CLENBQUMsUUFBUSxDQUFDLG1CQUFtQjtJQUMzRCxhQUFhLEVBQUUsSUFBSTtDQUNwQixFQUNELGVBQVcsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUMzQixDQUFBIn0=