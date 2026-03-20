"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const domain_1 = __importDefault(require("../modules/domain"));
const product_1 = __importDefault(require("@medusajs/medusa/product"));
exports.default = (0, utils_1.defineLink)({
    linkable: domain_1.default.linkable.domain,
    isList: true,
}, product_1.default.linkable.product);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tYWluLXByb2R1Y3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvbGlua3MvZG9tYWluLXByb2R1Y3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBc0Q7QUFDdEQsK0RBQTRDO0FBQzVDLHVFQUFvRDtBQUVwRCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3ZCO0lBQ0UsUUFBUSxFQUFFLGdCQUFZLENBQUMsUUFBUSxDQUFDLE1BQU07SUFDdEMsTUFBTSxFQUFFLElBQUk7Q0FDYixFQUNELGlCQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDL0IsQ0FBQSJ9