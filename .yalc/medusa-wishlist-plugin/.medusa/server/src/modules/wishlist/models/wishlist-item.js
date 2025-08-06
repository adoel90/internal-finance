"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishlistItem = void 0;
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("./wishlist");
exports.WishlistItem = utils_1.model.define("wishlist_item", {
    id: utils_1.model.id().primaryKey(),
    product_variant_id: utils_1.model.text(),
    wishlist: utils_1.model.belongsTo(() => wishlist_1.Wishlist, {
        mappedBy: "items"
    })
})
    .indexes([
    {
        on: ["product_variant_id", "wishlist_id"],
        unique: true
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QtaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3dpc2hsaXN0L21vZGVscy93aXNobGlzdC1pdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFpRDtBQUNqRCx5Q0FBcUM7QUFFeEIsUUFBQSxZQUFZLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7SUFDeEQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0Isa0JBQWtCLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNoQyxRQUFRLEVBQUUsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxtQkFBUSxFQUFFO1FBQ3hDLFFBQVEsRUFBRSxPQUFPO0tBQ2xCLENBQUM7Q0FDSCxDQUFDO0tBQ0QsT0FBTyxDQUFDO0lBQ1A7UUFDRSxFQUFFLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxhQUFhLENBQUM7UUFDekMsTUFBTSxFQUFFLElBQUk7S0FDYjtDQUNGLENBQUMsQ0FBQSJ9