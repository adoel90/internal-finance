"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = __importDefault(require("../modules/wishlist"));
const sales_channel_1 = __importDefault(require("@medusajs/medusa/sales-channel"));
exports.default = (0, utils_1.defineLink)({
    ...wishlist_1.default.linkable.wishlist.id,
    field: "sales_channel_id"
}, sales_channel_1.default.linkable.salesChannel, {
    readOnly: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3Qtc2FsZXMtY2hhbm5lbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9saW5rcy93aXNobGlzdC1zYWxlcy1jaGFubmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEscURBQXNEO0FBQ3RELG1FQUFnRDtBQUNoRCxtRkFBK0Q7QUFFL0Qsa0JBQWUsSUFBQSxrQkFBVSxFQUN2QjtJQUNFLEdBQUcsa0JBQWMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUU7SUFDdEMsS0FBSyxFQUFFLGtCQUFrQjtDQUMxQixFQUNELHVCQUFrQixDQUFDLFFBQVEsQ0FBQyxZQUFZLEVBQ3hDO0lBQ0UsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUNGLENBQUEifQ==