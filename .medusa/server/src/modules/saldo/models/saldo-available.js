"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const types_1 = require("src/modules/cashflow/types");
const SaldoAvailable = utils_1.model.define("saldo_available", {
    id: utils_1.model.id().primaryKey(),
    amount: utils_1.model.number(),
    currency_code: utils_1.model.enum(types_1.Currencies).nullable(),
    created_note_at: utils_1.model.dateTime().nullable(),
});
exports.default = SaldoAvailable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8tYXZhaWxhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2FsZG8vbW9kZWxzL3NhbGRvLWF2YWlsYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFEQUFpRDtBQUNqRCxzREFBdUQ7QUFFdkQsTUFBTSxjQUFjLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRTtJQUNuRCxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixNQUFNLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUN0QixhQUFhLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFDLENBQUMsUUFBUSxFQUFFO0lBQ2hELGVBQWUsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQy9DLENBQUMsQ0FBQTtBQUVGLGtCQUFlLGNBQWMsQ0FBQSJ9