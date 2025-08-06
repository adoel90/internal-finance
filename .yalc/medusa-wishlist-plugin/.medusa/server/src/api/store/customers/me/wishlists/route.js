"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
exports.GET = GET;
const create_wishlist_1 = require("../../../../../workflows/create-wishlist");
const utils_1 = require("@medusajs/framework/utils");
async function POST(req, res) {
    if (!req.publishable_key_context?.sales_channel_ids.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "At least one sales channel ID is required to be associated with the publishable API key in the request header.");
    }
    const { result } = await (0, create_wishlist_1.createWishlistWorkflow)(req.scope)
        .run({
        input: {
            customer_id: req.auth_context.actor_id,
            sales_channel_id: req.publishable_key_context?.sales_channel_ids[0]
        }
    });
    res.json({
        wishlist: result.wishlist
    });
}
async function GET(req, res) {
    const query = req.scope.resolve("query");
    const { data } = await query.graph({
        entity: "wishlist",
        fields: ["*", "items.*", "items.product_variant.*"],
        filters: {
            customer_id: req.auth_context.actor_id
        }
    });
    if (!data.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "No wishlist found for customer");
    }
    return res.json({
        wishlist: data[0]
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS93aXNobGlzdHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxvQkFxQkM7QUFFRCxrQkF3QkM7QUFsREQsOEVBQWtGO0FBQ2xGLHFEQUF3RDtBQUVqRCxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNELE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLGdIQUFnSCxDQUNqSCxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsd0NBQXNCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUN2RCxHQUFHLENBQUM7UUFDSCxLQUFLLEVBQUU7WUFDTCxXQUFXLEVBQUUsR0FBRyxDQUFDLFlBQVksQ0FBQyxRQUFRO1lBQ3RDLGdCQUFnQixFQUFFLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7U0FDcEU7S0FDRixDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO0tBQzFCLENBQUMsQ0FBQTtBQUNKLENBQUM7QUFFTSxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUV4QyxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ2pDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRSxDQUFDLEdBQUcsRUFBRSxTQUFTLEVBQUUseUJBQXlCLENBQUM7UUFDbkQsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUN2QztLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDM0IsZ0NBQWdDLENBQ2pDLENBQUE7SUFDSCxDQUFDO0lBRUQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2QsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7S0FDbEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyJ9