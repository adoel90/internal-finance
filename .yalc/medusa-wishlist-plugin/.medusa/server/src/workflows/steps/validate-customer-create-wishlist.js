"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateCustomerCreateWishlistStep = void 0;
const utils_1 = require("@medusajs/framework/utils");
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
exports.validateCustomerCreateWishlistStep = (0, workflows_sdk_1.createStep)("validate-customer-create-wishlist", async ({ customer_id }, { container }) => {
    const query = container.resolve("query");
    const { data } = await query.graph({
        entity: "wishlist",
        fields: ["*"],
        filters: {
            customer_id: customer_id
        }
    });
    if (data.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Customer already has a wishlist");
    }
    // check that customer exists
    const { data: customers } = await query.graph({
        entity: "customer",
        fields: ["*"],
        filters: {
            id: customer_id
        }
    });
    if (customers.length === 0) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Specified customer was not found");
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGUtY3VzdG9tZXItY3JlYXRlLXdpc2hsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9zdGVwcy92YWxpZGF0ZS1jdXN0b21lci1jcmVhdGUtd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQXVEO0FBQ3ZELHFFQUE4RDtBQU1qRCxRQUFBLGtDQUFrQyxHQUFHLElBQUEsMEJBQVUsRUFDMUQsbUNBQW1DLEVBQ25DLEtBQUssRUFBRSxFQUFFLFdBQVcsRUFBMkMsRUFBRSxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUU7SUFDaEYsTUFBTSxLQUFLLEdBQUcsU0FBUyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV4QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNiLE9BQU8sRUFBRTtZQUNQLFdBQVcsRUFBRSxXQUFXO1NBQ3pCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDM0IsaUNBQWlDLENBQ2xDLENBQUE7SUFDSCxDQUFDO0lBRUQsNkJBQTZCO0lBQzdCLE1BQU0sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzVDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQztRQUNiLE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxXQUFXO1NBQ2hCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzNCLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLGtDQUFrQyxDQUNuQyxDQUFBO0lBQ0gsQ0FBQztBQUNILENBQUMsQ0FDRixDQUFBIn0=