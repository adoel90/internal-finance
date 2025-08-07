"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDigitalProductsSchema = void 0;
const validators_1 = require("@medusajs/medusa/api/admin/products/validators");
const zod_1 = require("zod");
const types_1 = require("../modules/digital-product/types");
exports.createDigitalProductsSchema = zod_1.z.object({
    name: zod_1.z.string(),
    medias: zod_1.z.array(zod_1.z.object({
        type: zod_1.z.nativeEnum(types_1.MediaType),
        file_id: zod_1.z.string(),
        mime_type: zod_1.z.string()
    })),
    product: (0, validators_1.AdminCreateProduct)()
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFsaWRhdGlvbi1zY2hlbWFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FwaS92YWxpZGF0aW9uLXNjaGVtYXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsK0VBRXVEO0FBQ3ZELDZCQUF1QjtBQUN2Qiw0REFBNEQ7QUFFL0MsUUFBQSwyQkFBMkIsR0FBRyxPQUFDLENBQUMsTUFBTSxDQUFDO0lBQ2xELElBQUksRUFBRSxPQUFDLENBQUMsTUFBTSxFQUFFO0lBQ2hCLE1BQU0sRUFBRSxPQUFDLENBQUMsS0FBSyxDQUFDLE9BQUMsQ0FBQyxNQUFNLENBQUM7UUFDdkIsSUFBSSxFQUFFLE9BQUMsQ0FBQyxVQUFVLENBQUMsaUJBQVMsQ0FBQztRQUM3QixPQUFPLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtRQUNuQixTQUFTLEVBQUUsT0FBQyxDQUFDLE1BQU0sRUFBRTtLQUN0QixDQUFDLENBQUM7SUFDSCxPQUFPLEVBQUUsSUFBQSwrQkFBa0IsR0FBRTtDQUM5QixDQUFDLENBQUEifQ==