"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const wishlist_1 = require("../../../../../modules/wishlist");
const utils_1 = require("@medusajs/framework/utils");
async function GET(req, res) {
    const { id } = req.params;
    const query = req.scope.resolve("query");
    const wishlistModuleService = req.scope.resolve(wishlist_1.WISHLIST_MODULE);
    const { data: [product] } = await query.graph({
        entity: "product",
        fields: ["variants.*"],
        filters: {
            id
        }
    });
    if (!product) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, `Product with id: ${id} was not found`);
    }
    const count = await wishlistModuleService.getWishlistsOfVariants(product.variants.map((v) => v.id));
    res.json({
        count
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL3Byb2R1Y3RzL1tpZF0vd2lzaGxpc3Qvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFLQSxrQkFpQ0M7QUFwQ0QsOERBQWtFO0FBQ2xFLHFEQUF3RDtBQUVqRCxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUFrQixFQUNsQixHQUFtQjtJQUVuQixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQTtJQUV6QixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN4QyxNQUFNLHFCQUFxQixHQUEwQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDcEUsMEJBQWUsQ0FDaEIsQ0FBQTtJQUVELE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLEVBQUUsU0FBUztRQUNqQixNQUFNLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdEIsT0FBTyxFQUFFO1lBQ1AsRUFBRTtTQUNIO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2IsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDM0Isb0JBQW9CLEVBQUUsZ0JBQWdCLENBQ3ZDLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxLQUFLLEdBQUcsTUFBTSxxQkFBcUIsQ0FBQyxzQkFBc0IsQ0FDOUQsT0FBTyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FDbEMsQ0FBQTtJQUVELEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxLQUFLO0tBQ04sQ0FBQyxDQUFBO0FBQ0osQ0FBQyJ9