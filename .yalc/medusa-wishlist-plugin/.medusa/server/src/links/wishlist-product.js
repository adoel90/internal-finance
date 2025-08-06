"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = __importDefault(require("../modules/wishlist"));
const product_1 = __importDefault(require("@medusajs/medusa/product"));
exports.default = (0, utils_1.defineLink)({
    ...wishlist_1.default.linkable.wishlistItem.id,
    field: "product_variant_id"
}, product_1.default.linkable.productVariant, {
    readOnly: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QtcHJvZHVjdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy93aXNobGlzdC1wcm9kdWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXNEO0FBQ3RELG1FQUFnRDtBQUNoRCx1RUFBb0Q7QUFFcEQsa0JBQWUsSUFBQSxrQkFBVSxFQUN2QjtJQUNFLEdBQUcsa0JBQWMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUU7SUFDMUMsS0FBSyxFQUFFLG9CQUFvQjtDQUM1QixFQUNELGlCQUFhLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFDckM7SUFDRSxRQUFRLEVBQUUsSUFBSTtDQUNmLENBQ0YsQ0FBQSJ9