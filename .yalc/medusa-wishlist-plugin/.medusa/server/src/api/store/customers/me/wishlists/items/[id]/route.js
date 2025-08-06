"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = DELETE;
const delete_wishlist_item_1 = require("../../../../../../../workflows/delete-wishlist-item");
async function DELETE(req, res) {
    const { result } = await (0, delete_wishlist_item_1.deleteWishlistItemWorkflow)(req.scope)
        .run({
        input: {
            wishlist_item_id: req.params.id,
            customer_id: req.auth_context.actor_id
        }
    });
    res.json({
        wishlist: result.wishlist
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS93aXNobGlzdHMvaXRlbXMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLHdCQWVDO0FBakJELDhGQUFpRztBQUUxRixLQUFLLFVBQVUsTUFBTSxDQUMxQixHQUErQixFQUMvQixHQUFtQjtJQUVuQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLGlEQUEwQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUM7U0FDM0QsR0FBRyxDQUFDO1FBQ0gsS0FBSyxFQUFFO1lBQ0wsZ0JBQWdCLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQy9CLFdBQVcsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDdkM7S0FDRixDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxRQUFRO0tBQzFCLENBQUMsQ0FBQTtBQUNKLENBQUMifQ==