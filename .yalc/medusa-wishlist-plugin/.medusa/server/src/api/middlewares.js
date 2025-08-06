"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
const validators_1 = require("./store/customers/me/wishlists/items/validators");
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/store/customers/me/wishlists/items",
            method: "POST",
            middlewares: [
                (0, http_1.validateAndTransformBody)(validators_1.PostStoreCreateWishlistItem),
            ],
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBR2lDO0FBQ2pDLGdGQUE2RjtBQUU3RixrQkFBZSxJQUFBLHdCQUFpQixFQUFDO0lBQy9CLE1BQU0sRUFBRTtRQUNOO1lBQ0UsT0FBTyxFQUFFLHFDQUFxQztZQUM5QyxNQUFNLEVBQUUsTUFBTTtZQUNkLFdBQVcsRUFBRTtnQkFDWCxJQUFBLCtCQUF3QixFQUFDLHdDQUEyQixDQUFDO2FBQ3REO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQSJ9