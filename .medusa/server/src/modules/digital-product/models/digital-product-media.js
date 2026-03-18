"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../types");
const digital_product_1 = __importDefault(require("./digital-product"));
const DigitalProductMedia = utils_1.model.define("digital_product_media", {
    id: utils_1.model.id().primaryKey(),
    type: utils_1.model.enum(types_1.MediaType),
    fileId: utils_1.model.text(),
    mimeType: utils_1.model.text(),
    digitalProduct: utils_1.model.belongsTo(() => digital_product_1.default, {
        mappedBy: "medias"
    })
});
exports.default = DigitalProductMedia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlnaXRhbC1wcm9kdWN0LW1lZGlhLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvZGlnaXRhbC1wcm9kdWN0L21vZGVscy9kaWdpdGFsLXByb2R1Y3QtbWVkaWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsb0NBQW9DO0FBQ3BDLHdFQUE4QztBQUU5QyxNQUFNLG1CQUFtQixHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsdUJBQXVCLEVBQUU7SUFDaEUsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsSUFBSSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsaUJBQVMsQ0FBQztJQUMzQixNQUFNLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUNwQixRQUFRLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN0QixjQUFjLEVBQUUsYUFBSyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyx5QkFBYyxFQUFFO1FBQ3BELFFBQVEsRUFBRSxRQUFRO0tBQ25CLENBQUM7Q0FDSCxDQUFDLENBQUE7QUFFRixrQkFBZSxtQkFBbUIsQ0FBQSJ9