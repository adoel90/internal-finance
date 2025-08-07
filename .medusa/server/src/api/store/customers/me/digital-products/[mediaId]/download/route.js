"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const fileModuleService = req.scope.resolve(utils_1.Modules.FILE);
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [customer] } = await query.graph({
        entity: "customer",
        fields: [
            "orders.digital_product_order.*",
        ],
        filters: {
            id: req.auth_context.actor_id,
        },
    });
    const customerDigitalOrderIds = customer.orders
        .filter((order) => order.digital_product_order !== undefined)
        .map((order) => order.digital_product_order.id);
    const { data: dpoResult } = await query.graph({
        entity: "digital_product_order",
        fields: [
            "products.medias.*",
        ],
        filters: {
            id: customerDigitalOrderIds,
        },
    });
    if (!dpoResult.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Customer didn't purchase digital product.");
    }
    let foundMedia = undefined;
    dpoResult[0].products.some((product) => {
        return product.medias.some((media) => {
            foundMedia = media.id === req.params.mediaId ? media : undefined;
            return foundMedia !== undefined;
        });
    });
    if (!foundMedia) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_ALLOWED, "Customer didn't purchase digital product.");
    }
    const fileData = await fileModuleService.retrieveFile(foundMedia.fileId);
    res.json({
        url: fileData.url,
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVycy9tZS9kaWdpdGFsLXByb2R1Y3RzL1ttZWRpYUlkXS9kb3dubG9hZC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxxREFJa0M7QUFFM0IsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUErQixFQUMvQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxpQkFBaUIsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FDekMsZUFBTyxDQUFDLElBQUksQ0FDYixDQUFBO0lBQ0QsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFaEUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzdDLE1BQU0sRUFBRSxVQUFVO1FBQ2xCLE1BQU0sRUFBRTtZQUNOLGdDQUFnQztTQUNqQztRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsWUFBWSxDQUFDLFFBQVE7U0FDOUI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLHVCQUF1QixHQUFHLFFBQVEsQ0FBQyxNQUFNO1NBQzVDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLHFCQUFxQixLQUFLLFNBQVMsQ0FBQztTQUM1RCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUVqRCxNQUFNLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUM1QyxNQUFNLEVBQUUsdUJBQXVCO1FBQy9CLE1BQU0sRUFBRTtZQUNOLG1CQUFtQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSx1QkFBdUI7U0FDNUI7S0FDRixDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLE1BQU0sSUFBSSxtQkFBVyxDQUNuQixtQkFBVyxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQzdCLDJDQUEyQyxDQUM1QyxDQUFBO0lBQ0gsQ0FBQztJQUVELElBQUksVUFBVSxHQUFHLFNBQVMsQ0FBQTtJQUUxQixTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3JDLE9BQU8sT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNuQyxVQUFVLEdBQUcsS0FBSyxDQUFDLEVBQUUsS0FBSyxHQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUE7WUFFaEUsT0FBTyxVQUFVLEtBQUssU0FBUyxDQUFBO1FBQ2pDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDaEIsTUFBTSxJQUFJLG1CQUFXLENBQ25CLG1CQUFXLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFDN0IsMkNBQTJDLENBQzVDLENBQUE7SUFDSCxDQUFDO0lBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBRXhFLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxHQUFHLEVBQUUsUUFBUSxDQUFDLEdBQUc7S0FDbEIsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBOURZLFFBQUEsSUFBSSxRQThEaEIifQ==