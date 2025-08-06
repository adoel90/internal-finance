"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const wishlist_1 = require("./models/wishlist");
const wishlist_item_1 = require("./models/wishlist-item");
class WishlistModuleService extends (0, utils_1.MedusaService)({
    Wishlist: wishlist_1.Wishlist,
    WishlistItem: wishlist_item_1.WishlistItem
}) {
    async getWishlistsOfVariants(variantIds, context = {}) {
        return (await context.manager?.createQueryBuilder("wishlist_item", "wi")
            .select(["wi.wishlist_id"], true)
            .where("wi.product_variant_id IN (?)", [variantIds])
            .execute())?.length || 0;
    }
}
exports.default = WishlistModuleService;
__decorate([
    (0, utils_1.InjectManager)(),
    __param(1, (0, utils_1.MedusaContext)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], WishlistModuleService.prototype, "getWishlistsOfVariants", null);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3dpc2hsaXN0L3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxREFBdUY7QUFDdkYsZ0RBQTZDO0FBQzdDLDBEQUFzRDtBQUl0RCxNQUFxQixxQkFBc0IsU0FBUSxJQUFBLHFCQUFhLEVBQUM7SUFDL0QsUUFBUSxFQUFSLG1CQUFRO0lBQ1IsWUFBWSxFQUFaLDRCQUFZO0NBQ2IsQ0FBQztJQUVNLEFBQU4sS0FBSyxDQUFDLHNCQUFzQixDQUMxQixVQUFvQixFQUNILFVBQWtDLEVBQUU7UUFFckQsT0FBTyxDQUFDLE1BQU0sT0FBTyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsSUFBSSxDQUFDO2FBQ3JFLE1BQU0sQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxDQUFDO2FBQ2hDLEtBQUssQ0FBQyw4QkFBOEIsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ25ELE9BQU8sRUFBRSxDQUFDLEVBQUUsTUFBTSxJQUFJLENBQUMsQ0FBQTtJQUM1QixDQUFDO0NBQ0Y7QUFkRCx3Q0FjQztBQVRPO0lBREwsSUFBQSxxQkFBYSxHQUFFO0lBR2IsV0FBQSxJQUFBLHFCQUFhLEdBQUUsQ0FBQTs7OzttRUFNakIifQ==