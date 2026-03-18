"use strict";
/**
 *
 *
 *
 * TODO: WILL BE REMOVE DUE TO DEPRECATED
 *
 *
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8tYXZhaWxhYmxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvc2FsZG8vbW9kZWxzL3NhbGRvLWF2YWlsYWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7Ozs7R0FPRzs7QUFFSCxxREFBaUQ7QUFDakQsc0RBQXVEO0FBRXZELE1BQU0sY0FBYyxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUU7SUFDbkQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsTUFBTSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7SUFDdEIsYUFBYSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsa0JBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNoRCxlQUFlLEVBQUUsYUFBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUMvQyxDQUFDLENBQUE7QUFFRixrQkFBZSxjQUFjLENBQUEifQ==