"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
const utils_1 = require("@medusajs/framework/utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
async function POST(req, res) {
    if (!req.publishable_key_context?.sales_channel_ids.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "At least one sales channel ID is required to be associated with the publishable API key in the request header.");
    }
    const query = req.scope.resolve("query");
    const { data } = await query.graph({
        entity: "wishlist",
        fields: ["*"],
        filters: {
            customer_id: req.auth_context.actor_id,
        }
    });
    if (!data.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "No wishlist found for customer");
    }
    if (data[0].sales_channel_id !== req.publishable_key_context.sales_channel_ids[0]) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Wishlist does not belong to the specified sales channel");
    }
    const { http } = req.scope.resolve("configModule").projectConfig;
    const wishlistToken = jsonwebtoken_1.default.sign({
        wishlist_id: data[0].id
    }, http.jwtSecret, {
        expiresIn: http.jwtExpiresIn
    });
    return res.json({
        token: wishlistToken
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS93aXNobGlzdHMvc2hhcmUvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFJQSxvQkE4Q0M7QUFqREQscURBQXdEO0FBQ3hELGdFQUE4QjtBQUV2QixLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUErQixFQUMvQixHQUFtQjtJQUVuQixJQUFJLENBQUMsR0FBRyxDQUFDLHVCQUF1QixFQUFFLGlCQUFpQixDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQzNELE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQzlCLGdIQUFnSCxDQUNqSCxDQUFBO0lBQ0gsQ0FBQztJQUVELE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBRXhDLE1BQU0sRUFBRSxJQUFJLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDakMsTUFBTSxFQUFFLFVBQVU7UUFDbEIsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsT0FBTyxFQUFFO1lBQ1AsV0FBVyxFQUFFLEdBQUcsQ0FBQyxZQUFZLENBQUMsUUFBUTtTQUN2QztLQUNGLENBQUMsQ0FBQTtJQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDakIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsRUFDM0IsZ0NBQWdDLENBQ2pDLENBQUE7SUFDSCxDQUFDO0lBRUQsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEtBQUssR0FBRyxDQUFDLHVCQUF1QixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDbEYsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFlBQVksRUFDOUIseURBQXlELENBQzFELENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDLGFBQWEsQ0FBQTtJQUVoRSxNQUFNLGFBQWEsR0FBRyxzQkFBRyxDQUFDLElBQUksQ0FBQztRQUM3QixXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7S0FDeEIsRUFBRSxJQUFJLENBQUMsU0FBVSxFQUFFO1FBQ2xCLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWTtLQUM3QixDQUFDLENBQUE7SUFFRixPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDZCxLQUFLLEVBQUUsYUFBYTtLQUNyQixDQUFDLENBQUE7QUFDSixDQUFDIn0=