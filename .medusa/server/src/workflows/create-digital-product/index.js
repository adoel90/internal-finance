"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const create_digital_product_1 = __importDefault(require("./steps/create-digital-product"));
const create_digital_product_medias_1 = __importDefault(require("./steps/create-digital-product-medias"));
const digital_product_1 = require("../../modules/digital-product");
const createDigitalProductWorkflow = (0, workflows_sdk_1.createWorkflow)("create-digital-product", (input) => {
    const { medias, ...digitalProductData } = input.digital_product;
    const product = core_flows_1.createProductsWorkflow.runAsStep({
        input: {
            products: [input.product]
        }
    });
    const { digital_product } = (0, create_digital_product_1.default)(digitalProductData);
    const { digital_product_medias } = (0, create_digital_product_medias_1.default)((0, workflows_sdk_1.transform)({
        digital_product,
        medias
    }, (data) => ({
        medias: data.medias.map((media) => ({
            ...media,
            digital_product_id: data.digital_product.id
        }))
    })));
    (0, core_flows_1.createRemoteLinkStep)([{
            [digital_product_1.DIGITAL_PRODUCT_MODULE]: {
                digital_product_id: digital_product.id
            },
            [utils_1.Modules.PRODUCT]: {
                product_variant_id: product[0].variants[0].id
            }
        }]);
    return new workflows_sdk_1.WorkflowResponse({
        digital_product: {
            ...digital_product,
            medias: digital_product_medias
        }
    });
});
exports.default = createDigitalProductWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1kaWdpdGFsLXByb2R1Y3QvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxRUFJMEM7QUFJMUMsNERBR29DO0FBQ3BDLHFEQUVrQztBQUNsQyw0RkFFdUM7QUFDdkMsMEdBRThDO0FBQzlDLG1FQUFzRTtBQVN0RSxNQUFNLDRCQUE0QixHQUFHLElBQUEsOEJBQWMsRUFDakQsd0JBQXdCLEVBQ3hCLENBQUMsS0FBd0MsRUFBRSxFQUFFO0lBQzNDLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxrQkFBa0IsRUFBRSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUE7SUFFL0QsTUFBTSxPQUFPLEdBQUcsbUNBQXNCLENBQUMsU0FBUyxDQUFDO1FBQy9DLEtBQUssRUFBRTtZQUNMLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7U0FDMUI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsSUFBQSxnQ0FBd0IsRUFDbEQsa0JBQWtCLENBQ25CLENBQUE7SUFFRCxNQUFNLEVBQUUsc0JBQXNCLEVBQUUsR0FBRyxJQUFBLHVDQUE4QixFQUMvRCxJQUFBLHlCQUFTLEVBQUM7UUFDUixlQUFlO1FBQ2YsTUFBTTtLQUNQLEVBQ0QsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDVCxNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDbEMsR0FBRyxLQUFLO1lBQ1Isa0JBQWtCLEVBQUUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1NBQzVDLENBQUMsQ0FBQztLQUNKLENBQUMsQ0FDRCxDQUNGLENBQUE7SUFFRCxJQUFBLGlDQUFvQixFQUFDLENBQUM7WUFDcEIsQ0FBQyx3Q0FBc0IsQ0FBQyxFQUFFO2dCQUN4QixrQkFBa0IsRUFBRSxlQUFlLENBQUMsRUFBRTthQUN2QztZQUNELENBQUMsZUFBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNqQixrQkFBa0IsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7YUFDOUM7U0FDRixDQUFDLENBQUMsQ0FBQTtJQUVILE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQztRQUMxQixlQUFlLEVBQUU7WUFDZixHQUFHLGVBQWU7WUFDbEIsTUFBTSxFQUFFLHNCQUFzQjtTQUMvQjtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FDRixDQUFBO0FBRUQsa0JBQWUsNEJBQTRCLENBQUEifQ==