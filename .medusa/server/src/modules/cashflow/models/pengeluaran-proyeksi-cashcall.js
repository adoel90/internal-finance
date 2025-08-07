"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../types");
const PengeluaranProyeksiCashcall = utils_1.model.define("pengeluaran_proyeksi_cashcall", {
    id: utils_1.model.id().primaryKey(),
    created_note_at: utils_1.model.dateTime(),
    amount_of_inflow_for: utils_1.model.enum(types_1.AmountFor).nullable(),
    amount: utils_1.model.number(),
});
exports.default = PengeluaranProyeksiCashcall;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZ2VsdWFyYW4tcHJveWVrc2ktY2FzaGNhbGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9jYXNoZmxvdy9tb2RlbHMvcGVuZ2VsdWFyYW4tcHJveWVrc2ktY2FzaGNhbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBaUQ7QUFDakQsb0NBQXFDO0FBRXJDLE1BQU0sMkJBQTJCLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQywrQkFBK0IsRUFBRTtJQUM5RSxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixlQUFlLEVBQUUsYUFBSyxDQUFDLFFBQVEsRUFBRTtJQUNqQyxvQkFBb0IsRUFBRSxhQUFLLENBQUMsSUFBSSxDQUFDLGlCQUFTLENBQUMsQ0FBQyxRQUFRLEVBQUU7SUFDdEQsTUFBTSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7Q0FDekIsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsMkJBQTJCLENBQUMifQ==