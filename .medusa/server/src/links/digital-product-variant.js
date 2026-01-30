"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const digital_product_1 = __importDefault(require("../modules/digital-product"));
const product_1 = __importDefault(require("@medusajs/medusa/product"));
const utils_1 = require("@medusajs/framework/utils");
exports.default = (0, utils_1.defineLink)({
    linkable: digital_product_1.default.linkable.digitalProduct,
    deleteCascade: true
}, product_1.default.linkable.productVariant);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXRhbC1wcm9kdWN0LXZhcmlhbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvZGlnaXRhbC1wcm9kdWN0LXZhcmlhbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxpRkFBNkQ7QUFDN0QsdUVBQW9EO0FBQ3BELHFEQUFzRDtBQUV0RCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCO0lBQ0UsUUFBUSxFQUFFLHlCQUFvQixDQUFDLFFBQVEsQ0FBQyxjQUFjO0lBQ3RELGFBQWEsRUFBRSxJQUFJO0NBQ3BCLEVBQ0QsaUJBQWEsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUN0QyxDQUFBIn0=