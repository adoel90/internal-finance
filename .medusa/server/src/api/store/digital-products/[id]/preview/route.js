"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const digital_product_1 = require("../../../../../modules/digital-product");
const types_1 = require("../../../../../modules/digital-product/types");
const GET = async (req, res) => {
    const fileModuleService = req.scope.resolve(utils_1.Modules.FILE);
    const digitalProductModuleService = req.scope.resolve(digital_product_1.DIGITAL_PRODUCT_MODULE);
    const medias = await digitalProductModuleService.listDigitalProductMedias({
        digital_product_id: req.params.id,
        type: types_1.MediaType.PREVIEW
    });
    const normalizedMedias = await Promise.all(medias.map(async (media) => {
        const { fileId, ...mediaData } = media;
        const fileData = await fileModuleService.retrieveFile(fileId);
        return {
            ...mediaData,
            url: fileData.url
        };
    }));
    res.json({
        previews: normalizedMedias
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2RpZ2l0YWwtcHJvZHVjdHMvW2lkXS9wcmV2aWV3L3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLHFEQUVrQztBQUNsQyw0RUFFZ0Q7QUFFaEQsd0VBQXlFO0FBRWxFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0saUJBQWlCLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3pDLGVBQU8sQ0FBQyxJQUFJLENBQ2IsQ0FBQTtJQUVELE1BQU0sMkJBQTJCLEdBQy9CLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUNmLHdDQUFzQixDQUN2QixDQUFBO0lBRUgsTUFBTSxNQUFNLEdBQUcsTUFBTSwyQkFBMkIsQ0FBQyx3QkFBd0IsQ0FBQztRQUN4RSxrQkFBa0IsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7UUFDakMsSUFBSSxFQUFFLGlCQUFTLENBQUMsT0FBTztLQUN4QixDQUFDLENBQUE7SUFFRixNQUFNLGdCQUFnQixHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FDeEMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEVBQUU7UUFDekIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLFNBQVMsRUFBRSxHQUFHLEtBQUssQ0FBQTtRQUN0QyxNQUFNLFFBQVEsR0FBRyxNQUFNLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUU3RCxPQUFPO1lBQ0wsR0FBRyxTQUFTO1lBQ1osR0FBRyxFQUFFLFFBQVEsQ0FBQyxHQUFHO1NBQ2xCLENBQUE7SUFDSCxDQUFDLENBQUMsQ0FDSCxDQUFBO0lBRUQsR0FBRyxDQUFDLElBQUksQ0FBQztRQUNQLFFBQVEsRUFBRSxnQkFBZ0I7S0FDM0IsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFBO0FBakNZLFFBQUEsR0FBRyxPQWlDZiJ9