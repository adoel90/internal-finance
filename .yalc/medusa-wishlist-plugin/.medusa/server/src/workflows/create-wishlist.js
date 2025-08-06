"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWishlistWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const validate_customer_create_wishlist_1 = require("./steps/validate-customer-create-wishlist");
const create_wishlist_1 = require("./steps/create-wishlist");
exports.createWishlistWorkflow = (0, workflows_sdk_1.createWorkflow)("create-wishlist", (input) => {
    (0, validate_customer_create_wishlist_1.validateCustomerCreateWishlistStep)({
        customer_id: input.customer_id
    });
    const wishlist = (0, create_wishlist_1.createWishlistStep)(input);
    return new workflows_sdk_1.WorkflowResponse({
        wishlist
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlLXdpc2hsaXN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3dvcmtmbG93cy9jcmVhdGUtd2lzaGxpc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQW9GO0FBQ3BGLGlHQUE4RjtBQUM5Riw2REFBNEQ7QUFPL0MsUUFBQSxzQkFBc0IsR0FBRyxJQUFBLDhCQUFjLEVBQ2xELGlCQUFpQixFQUNqQixDQUFDLEtBQWtDLEVBQUUsRUFBRTtJQUNyQyxJQUFBLHNFQUFrQyxFQUFDO1FBQ2pDLFdBQVcsRUFBRSxLQUFLLENBQUMsV0FBVztLQUMvQixDQUFDLENBQUE7SUFFRixNQUFNLFFBQVEsR0FBRyxJQUFBLG9DQUFrQixFQUFDLEtBQUssQ0FBQyxDQUFBO0lBRTFDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQztRQUMxQixRQUFRO0tBQ1QsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUNGLENBQUEifQ==