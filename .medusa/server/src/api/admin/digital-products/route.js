"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_digital_product_1 = __importDefault(require("../../../workflows/create-digital-product"));
const GET = async (req, res) => {
    const { fields, limit = 20, offset = 0, } = req.validatedQuery || {};
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: digitalProducts, metadata: { count, take, skip }, } = await query.graph({
        entity: "digital_product",
        fields: [
            "*",
            "medias.*",
            "product_variant.*",
            ...(fields || []),
        ],
        pagination: {
            skip: offset,
            take: limit,
        },
    });
    res.json({
        digital_products: digitalProducts,
        count,
        limit: take,
        offset: skip,
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [shippingProfile] } = await query.graph({
        entity: "shipping_profile",
        fields: ["id"],
    });
    const { result } = await (0, create_digital_product_1.default)(req.scope).run({
        input: {
            digital_product: {
                name: req.validatedBody.name,
                medias: req.validatedBody.medias.map((media) => ({
                    fileId: media.file_id,
                    mimeType: media.mime_type,
                    ...media
                }))
            },
            product: {
                ...req.validatedBody.product,
                shipping_profile_id: shippingProfile.id,
            }
        }
    });
    res.json({
        digital_product: result.digital_product
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2RpZ2l0YWwtcHJvZHVjdHMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBSUEscURBQXFFO0FBRXJFLHVHQUFvRjtBQUk3RSxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3RCLEdBQStCLEVBQy9CLEdBQW1CLEVBQ25CLEVBQUU7SUFDRixNQUFNLEVBQ0osTUFBTSxFQUNOLEtBQUssR0FBRyxFQUFFLEVBQ1YsTUFBTSxHQUFHLENBQUMsR0FDWCxHQUFHLEdBQUcsQ0FBQyxjQUFjLElBQUksRUFBRSxDQUFBO0lBQzVCLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFDSixJQUFJLEVBQUUsZUFBZSxFQUNyQixRQUFRLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxHQUNoQyxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUNwQixNQUFNLEVBQUUsaUJBQWlCO1FBQ3pCLE1BQU0sRUFBRTtZQUNOLEdBQUc7WUFDSCxVQUFVO1lBQ1YsbUJBQW1CO1lBQ25CLEdBQUcsQ0FBQyxNQUFNLElBQUksRUFBRSxDQUFDO1NBQ2xCO1FBQ0QsVUFBVSxFQUFFO1lBQ1YsSUFBSSxFQUFFLE1BQU07WUFDWixJQUFJLEVBQUUsS0FBSztTQUNaO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLGdCQUFnQixFQUFFLGVBQWU7UUFDakMsS0FBSztRQUNMLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFLElBQUk7S0FDYixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFsQ1ksUUFBQSxHQUFHLE9Ba0NmO0FBTU0sTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFrRCxFQUNsRCxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDaEUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLGVBQWUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQ3BELE1BQU0sRUFBRSxrQkFBa0I7UUFDMUIsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDO0tBQ2YsQ0FBQyxDQUFBO0lBQ0YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxnQ0FBNEIsRUFDbkQsR0FBRyxDQUFDLEtBQUssQ0FDVixDQUFDLEdBQUcsQ0FBQztRQUNKLEtBQUssRUFBRTtZQUNMLGVBQWUsRUFBRTtnQkFDZixJQUFJLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxJQUFJO2dCQUM1QixNQUFNLEVBQUUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxNQUFNLEVBQUUsS0FBSyxDQUFDLE9BQU87b0JBQ3JCLFFBQVEsRUFBRSxLQUFLLENBQUMsU0FBUztvQkFDekIsR0FBRyxLQUFLO2lCQUNULENBQUMsQ0FBaUU7YUFDcEU7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsR0FBRyxHQUFHLENBQUMsYUFBYSxDQUFDLE9BQU87Z0JBQzVCLG1CQUFtQixFQUFFLGVBQWUsQ0FBQyxFQUFFO2FBQ3hDO1NBQ0Y7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsZUFBZSxFQUFFLE1BQU0sQ0FBQyxlQUFlO0tBQ3hDLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQS9CWSxRQUFBLElBQUksUUErQmhCIn0=