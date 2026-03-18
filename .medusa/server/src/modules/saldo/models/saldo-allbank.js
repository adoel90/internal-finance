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
const SaldoAllbank = utils_1.model.define("saldo_allbank", {
    id: utils_1.model.id().primaryKey(),
    nama_bank: utils_1.model.text(),
    no_rek: utils_1.model.number(),
    atas_nama: utils_1.model.text(),
    keterangan: utils_1.model.text().nullable(),
    allowed_see: utils_1.model.boolean().nullable(),
    currency_code: utils_1.model.enum(types_1.Currencies).nullable(),
    amount_saldo: utils_1.model.number(),
    updated_saldo_at: utils_1.model.dateTime()
});
exports.default = SaldoAllbank;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8tYWxsYmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NhbGRvL21vZGVscy9zYWxkby1hbGxiYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7OztHQU9HOztBQUdILHFEQUFpRDtBQUNqRCxzREFBdUQ7QUFFdkQsTUFBTSxZQUFZLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7SUFDL0MsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsU0FBUyxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdEIsTUFBTSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7SUFDdEIsU0FBUyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdkIsVUFBVSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbkMsV0FBVyxFQUFFLGFBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDdkMsYUFBYSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsa0JBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRTtJQUNoRCxZQUFZLEVBQUMsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUMzQixnQkFBZ0IsRUFBRSxhQUFLLENBQUMsUUFBUSxFQUFFO0NBQ3JDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLFlBQVksQ0FBQSJ9