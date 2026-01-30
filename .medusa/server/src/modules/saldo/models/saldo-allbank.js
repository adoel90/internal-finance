"use strict";
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8tYWxsYmFuay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3NhbGRvL21vZGVscy9zYWxkby1hbGxiYW5rLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQWlEO0FBQ2pELHNEQUF1RDtBQUV2RCxNQUFNLFlBQVksR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRTtJQUMvQyxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixTQUFTLEVBQUMsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN0QixNQUFNLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUN0QixTQUFTLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN2QixVQUFVLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNuQyxXQUFXLEVBQUUsYUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN2QyxhQUFhLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyxrQkFBVSxDQUFDLENBQUMsUUFBUSxFQUFFO0lBQ2hELFlBQVksRUFBQyxhQUFLLENBQUMsTUFBTSxFQUFFO0lBQzNCLGdCQUFnQixFQUFFLGFBQUssQ0FBQyxRQUFRLEVBQUU7Q0FDckMsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsWUFBWSxDQUFBIn0=