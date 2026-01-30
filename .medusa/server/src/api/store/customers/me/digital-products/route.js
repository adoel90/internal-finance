"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [customer] } = await query.graph({
        entity: "customer",
        fields: [
            "orders.digital_product_order.products.*",
            "orders.digital_product_order.products.medias.*",
        ],
        filters: {
            id: req.auth_context.actor_id,
        },
    });
    const digitalProducts = {};
    customer.orders.forEach((order) => {
        order.digital_product_order.products.forEach((product) => {
            digitalProducts[product.id] = product;
        });
    });
    res.json({
        digital_products: Object.values(digitalProducts),
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS9kaWdpdGFsLXByb2R1Y3RzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUVrQztBQUUzQixNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUVoRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDN0MsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFO1lBQ04seUNBQXlDO1lBQ3pDLGdEQUFnRDtTQUNqRDtRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDOUI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLGVBQWUsR0FBRyxFQUFFLENBQUE7SUFFMUIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtRQUNoQyxLQUFLLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ3ZELGVBQWUsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsZ0JBQWdCLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUM7S0FDakQsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBNUJZLFFBQUEsR0FBRyxPQTRCZiJ9