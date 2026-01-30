"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillingCompany = void 0;
// src/modules/company-info/models/company.ts
const utils_1 = require("@medusajs/framework/utils");
exports.BillingCompany = utils_1.model.define("company", {
    id: utils_1.model.id().primaryKey(),
    user_id: utils_1.model.text(), // foreign-key ke user
    company_name: utils_1.model.text(),
    company_logo: utils_1.model.text().nullable(),
});
exports.default = exports.BillingCompany;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGFueS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2JpbGxpbmcvbW9kZWxzL2NvbXBhbnkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsNkNBQTZDO0FBQzdDLHFEQUFpRDtBQUVwQyxRQUFBLGNBQWMsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRTtJQUNwRCxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixPQUFPLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxFQUFpQixzQkFBc0I7SUFDNUQsWUFBWSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDMUIsWUFBWSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7Q0FDdEMsQ0FBQyxDQUFBO0FBR0Ysa0JBQWUsc0JBQWMsQ0FBQyJ9