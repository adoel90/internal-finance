"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handleProductDeleted;
const delete_product_digital_products_1 = require("../workflows/delete-product-digital-products");
async function handleProductDeleted({ event: { data }, container, }) {
    await (0, delete_product_digital_products_1.deleteProductDigitalProductsWorkflow)(container)
        .run({
        input: data,
    });
}
exports.config = {
    event: "product.deleted",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXByb2R1Y3QtZGVsZXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdWJzY3JpYmVycy9oYW5kbGUtcHJvZHVjdC1kZWxldGVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLHVDQVFDO0FBWkQsa0dBRXNEO0FBRXZDLEtBQUssVUFBVSxvQkFBb0IsQ0FBQyxFQUNqRCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDZixTQUFTLEdBQ3NCO0lBQy9CLE1BQU0sSUFBQSxzRUFBb0MsRUFBQyxTQUFTLENBQUM7U0FDbEQsR0FBRyxDQUFDO1FBQ0gsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDLENBQUE7QUFDTixDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSxpQkFBaUI7Q0FDekIsQ0FBQSJ9