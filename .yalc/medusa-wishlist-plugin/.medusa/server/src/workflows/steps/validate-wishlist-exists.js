"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateWishlistExistsStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateWishlistExistsStep = (0, workflows_sdk_1.createStep)("validate-wishlist-exists", async (input) => {
    if (!input.wishlists?.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "No wishlist found for this customer");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtd2lzaGxpc3QtZXhpc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zdGVwcy92YWxpZGF0ZS13aXNobGlzdC1leGlzdHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXVEO0FBQ3ZELHFFQUE4RDtBQVFqRCxRQUFBLDBCQUEwQixHQUFHLElBQUEsMEJBQVUsRUFDbEQsMEJBQTBCLEVBQzFCLEtBQUssRUFBRSxLQUFZLEVBQUUsRUFBRTtJQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUM3QixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMzQixxQ0FBcUMsQ0FDdEMsQ0FBQTtJQUNILENBQUM7QUFDSCxDQUFDLENBQ0YsQ0FBQSJ9