"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/links/user-company.ts
const utils_1 = require("@medusajs/framework/utils");
const user_1 = __importDefault(require("@medusajs/medusa/user"));
const billing_1 = __importDefault(require("../modules/billing"));
exports.default = (0, utils_1.defineLink)({
    linkable: user_1.default.linkable.user,
    deleteCascade: true
}, billing_1.default.linkable.company);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci1jb21wYW55LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2xpbmtzL3VzZXItY29tcGFueS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDRCQUE0QjtBQUM1QixxREFBc0Q7QUFDdEQsaUVBQThDO0FBQzlDLGlFQUFxRDtBQUVyRCxrQkFBZSxJQUFBLGtCQUFVLEVBQ3JCO0lBQ0ksUUFBUSxFQUFFLGNBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSTtJQUNsQyxhQUFhLEVBQUUsSUFBSTtDQUN0QixFQUNELGlCQUFvQixDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQ3hDLENBQUEifQ==