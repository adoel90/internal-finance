"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../types");
const Pengeluaran = utils_1.model.define("pengeluaran", {
    id: utils_1.model.id().primaryKey(),
    payment_method: utils_1.model.text(),
    amount: utils_1.model.number(),
    currency_code: utils_1.model.enum(types_1.Currencies).nullable(),
    description: utils_1.model.text().nullable(),
    created_note_at: utils_1.model.dateTime(),
    amount_of_outflow_for: utils_1.model.enum(types_1.AmountForPengeluaran).nullable(),
    keterangan_tambahan: utils_1.model.text().nullable(),
});
exports.default = Pengeluaran;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZ2VsdWFyYW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jYXNoZmxvdy9tb2RlbHMvcGVuZ2VsdWFyYW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFDakQsb0NBQTJEO0FBRTNELE1BQU0sV0FBVyxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFO0lBQzVDLEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBQzNCLGNBQWMsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFO0lBQzVCLE1BQU0sRUFBRSxhQUFLLENBQUMsTUFBTSxFQUFFO0lBQ3RCLGFBQWEsRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLGtCQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDaEQsV0FBVyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDcEMsZUFBZSxFQUFFLGFBQUssQ0FBQyxRQUFRLEVBQUU7SUFDakMscUJBQXFCLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyw0QkFBb0IsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNsRSxtQkFBbUIsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQy9DLENBQUMsQ0FBQTtBQUVGLGtCQUFlLFdBQVcsQ0FBQSJ9