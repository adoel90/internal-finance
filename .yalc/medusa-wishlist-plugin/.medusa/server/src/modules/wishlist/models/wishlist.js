"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wishlist = void 0;
const utils_1 = require("@medusajs/framework/utils");
const wishlist_item_1 = require("./wishlist-item");
exports.Wishlist = utils_1.model.define("wishlist", {
    id: utils_1.model.id().primaryKey(),
    customer_id: utils_1.model.text(),
    sales_channel_id: utils_1.model.text(),
    items: utils_1.model.hasMany(() => wishlist_item_1.WishlistItem),
})
    .indexes([
    {
        on: ["customer_id", "sales_channel_id"],
        unique: true
    }
]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy93aXNobGlzdC9tb2RlbHMvd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscURBQWlEO0FBQ2pELG1EQUE4QztBQUVqQyxRQUFBLFFBQVEsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtJQUMvQyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixXQUFXLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN6QixnQkFBZ0IsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQzlCLEtBQUssRUFBRSxhQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLDRCQUFZLENBQUM7Q0FDekMsQ0FBQztLQUNELE9BQU8sQ0FBQztJQUNQO1FBQ0UsRUFBRSxFQUFFLENBQUMsYUFBYSxFQUFFLGtCQUFrQixDQUFDO1FBQ3ZDLE1BQU0sRUFBRSxJQUFJO0tBQ2I7Q0FDRixDQUFDLENBQUEifQ==