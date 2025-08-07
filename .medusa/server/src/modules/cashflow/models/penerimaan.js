"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("../types");
const Penerimaan = utils_1.model.define("penerimaan", {
    id: utils_1.model.id().primaryKey(),
    payment_method: utils_1.model.text(),
    amount: utils_1.model.number(),
    currency_code: utils_1.model.enum(types_1.Currencies).nullable(),
    description: utils_1.model.text().nullable(),
    created_note_at: utils_1.model.dateTime(),
    amount_of_inflow_for: utils_1.model.enum(types_1.AmountFor).nullable(),
    keterangan_tambahan: utils_1.model.text().nullable(),
});
exports.default = Penerimaan;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGVuZXJpbWFhbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2Nhc2hmbG93L21vZGVscy9wZW5lcmltYWFuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQWlEO0FBQ2pELG9DQUFnRDtBQUVoRCxNQUFNLFVBQVUsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRTtJQUMxQyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixjQUFjLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUM1QixNQUFNLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUN0QixhQUFhLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFDLENBQUMsUUFBUSxFQUFFO0lBQ2hELFdBQVcsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBQ3BDLGVBQWUsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFO0lBQ2pDLG9CQUFvQixFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsaUJBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUN0RCxtQkFBbUIsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQy9DLENBQUMsQ0FBQTtBQUVGLGtCQUFlLFVBQVUsQ0FBQSJ9