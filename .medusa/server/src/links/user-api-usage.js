"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const user_1 = __importDefault(require("@medusajs/medusa/user"));
const billing_1 = __importDefault(require("../modules/billing"));
exports.default = (0, utils_1.defineLink)({
    linkable: user_1.default.linkable.user,
    deleteCascade: true
}, billing_1.default.linkable.apiUsage);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1hcGktdXNhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvdXNlci1hcGktdXNhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBc0Q7QUFDdEQsaUVBQThDO0FBQzlDLGlFQUFzRDtBQUV0RCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCO0lBQ0UsUUFBUSxFQUFFLGNBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUNsQyxhQUFhLEVBQUUsSUFBSTtDQUNwQixFQUNELGlCQUFxQixDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3hDLENBQUEifQ==