"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
const utils_1 = require("@medusajs/framework/utils");
const jsonwebtoken_1 = require("jsonwebtoken");
async function GET(req, res) {
    if (!req.publishable_key_context?.sales_channel_ids.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "At least one sales channel ID is required to be associated with the publishable API key in the request header.");
    }
    const decodedToken = (0, jsonwebtoken_1.decode)(req.params.token);
    if (!decodedToken.wishlist_id) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Invalid token");
    }
    const query = req.scope.resolve("query");
    const { data } = await query.graph({
        entity: "wishlist",
        fields: ["*", "items.*", "items.product_variant.*"],
        filters: {
            id: decodedToken.wishlist_id
        }
    });
    if (!data.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "No wishlist found");
    }
    if (data[0].sales_channel_id !== req.publishable_key_context.sales_channel_ids[0]) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Wishlist does not belong to the request's sales channel");
    }
    res.json({
        wishlist: data[0]
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3dpc2hsaXN0cy9bdG9rZW5dL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEsa0JBK0NDO0FBbERELHFEQUF3RDtBQUN4RCwrQ0FBaUQ7QUFFMUMsS0FBSyxVQUFVLEdBQUcsQ0FDdkIsR0FBdUIsRUFDdkIsR0FBbUI7SUFFbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUMzRCxNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5QixnSEFBZ0gsQ0FDakgsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLFlBQVksR0FBRyxJQUFBLHFCQUFNLEVBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQWUsQ0FBQTtJQUUzRCxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLGVBQWUsQ0FDaEIsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV4QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUseUJBQXlCLENBQUM7UUFDbkQsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLFlBQVksQ0FBQyxXQUFXO1NBQzdCO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNqQixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUMzQixtQkFBbUIsQ0FDcEIsQ0FBQTtJQUNILENBQUM7SUFFRCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsS0FBSyxHQUFHLENBQUMsdUJBQXVCLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qix5REFBeUQsQ0FDMUQsQ0FBQTtJQUNILENBQUM7SUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDbEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyJ9