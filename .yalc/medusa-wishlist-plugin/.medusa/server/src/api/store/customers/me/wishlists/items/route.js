"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const create_wishlist_item_1 = require("../../../../../../workflows/create-wishlist-item");
const utils_1 = require("@medusajs/framework/utils");
async function POST(req, res) {
    if (!req.publishable_key_context?.sales_channel_ids.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "At least one sales channel ID is required to be associated with the publishable API key in the request header.");
    }
    const { result } = await (0, create_wishlist_item_1.createWishlistItemWorkflow)(req.scope)
        .run({
        input: {
            variant_id: req.validatedBody.variant_id,
            customer_id: req.auth_context.actor_id,
            sales_channel_id: req.publishable_key_context?.sales_channel_ids[0]
        }
    });
    res.json({
        wishlist: result.wishlist
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS93aXNobGlzdHMvaXRlbXMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFRQSxvQkFzQkM7QUE3QkQsMkZBQTZGO0FBQzdGLHFEQUF1RDtBQU1oRCxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUFnRSxFQUNoRSxHQUFtQjtJQUVuQixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNELE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLGdIQUFnSCxDQUNqSCxDQUFBO0lBQ0gsQ0FBQztJQUNELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsaURBQTBCLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQztTQUMzRCxHQUFHLENBQUM7UUFDSCxLQUFLLEVBQUU7WUFDTCxVQUFVLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxVQUFVO1lBQ3hDLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7WUFDdEMsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGlCQUFpQixDQUFDLENBQUMsQ0FBQztTQUNwRTtLQUNGLENBQUMsQ0FBQTtJQUVKLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLFFBQVE7S0FDMUIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyJ9