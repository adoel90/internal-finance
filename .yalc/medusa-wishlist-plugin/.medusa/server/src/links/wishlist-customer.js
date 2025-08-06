"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = __importDefault(require("../modules/wishlist"));
const customer_1 = __importDefault(require("@medusajs/medusa/customer"));
exports.default = (0, utils_1.defineLink)({
    ...wishlist_1.default.linkable.wishlist.id,
    field: "customer_id"
}, customer_1.default.linkable.customer.id, {
    readOnly: true
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QtY3VzdG9tZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3Mvd2lzaGxpc3QtY3VzdG9tZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBc0Q7QUFDdEQsbUVBQWdEO0FBQ2hELHlFQUFzRDtBQUV0RCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCO0lBQ0UsR0FBRyxrQkFBYyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtJQUN0QyxLQUFLLEVBQUUsYUFBYTtDQUNyQixFQUNELGtCQUFjLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQ25DO0lBQ0UsUUFBUSxFQUFFLElBQUk7Q0FDZixDQUNGLENBQUEifQ==