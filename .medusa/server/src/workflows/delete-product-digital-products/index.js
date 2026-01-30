"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProductDigitalProductsWorkflow = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const delete_digital_products_1 = require("./steps/delete-digital-products");
const retrieve_digital_products_to_delete_1 = require("./steps/retrieve-digital-products-to-delete");
exports.deleteProductDigitalProductsWorkflow = (0, workflows_sdk_1.createWorkflow)("delete-product-digital-products", (input) => {
    const digitalProductsToDelete = (0, retrieve_digital_products_to_delete_1.retrieveDigitalProductsToDeleteStep)({
        product_id: input.id
    });
    (0, delete_digital_products_1.deleteDigitalProductsSteps)({
        ids: digitalProductsToDelete
    });
    return new workflows_sdk_1.WorkflowResponse({});
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2RlbGV0ZS1wcm9kdWN0LWRpZ2l0YWwtcHJvZHVjdHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBQXFGO0FBQ3JGLDZFQUE2RTtBQUM3RSxxR0FBa0c7QUFNckYsUUFBQSxvQ0FBb0MsR0FBRyxJQUFBLDhCQUFjLEVBQ2hFLGlDQUFpQyxFQUNqQyxDQUFDLEtBQXdDLEVBQUUsRUFBRTtJQUMzQyxNQUFNLHVCQUF1QixHQUFHLElBQUEseUVBQW1DLEVBQUM7UUFDbEUsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFO0tBQ3JCLENBQUMsQ0FBQTtJQUVGLElBQUEsb0RBQTBCLEVBQUM7UUFDekIsR0FBRyxFQUFFLHVCQUF1QjtLQUM3QixDQUFDLENBQUE7SUFFRixPQUFPLElBQUksZ0NBQWdCLENBQUMsRUFBRSxDQUFDLENBQUE7QUFDakMsQ0FBQyxDQUNGLENBQUEifQ==