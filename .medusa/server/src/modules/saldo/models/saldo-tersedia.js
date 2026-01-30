"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const saldo_history_tersedia_1 = __importDefault(require("./saldo-history-tersedia"));
const SaldoTersedia = utils_1.model.define("saldo_tersedia", {
    id: utils_1.model.id().primaryKey(),
    nama_bank: utils_1.model.text(),
    no_rek: utils_1.model.number(),
    atas_nama: utils_1.model.text(),
    keterangan: utils_1.model.text().nullable(),
    allowed_see: utils_1.model.boolean().nullable(),
    histories_saldo_tersedia: utils_1.model.hasMany(() => saldo_history_tersedia_1.default, {
        mappedBy: "amountSaldoHistoryTersedia"
    })
}).cascades({
    delete: ["histories_saldo_tersedia"]
});
exports.default = SaldoTersedia;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8tdGVyc2VkaWEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zYWxkby9tb2RlbHMvc2FsZG8tdGVyc2VkaWEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsc0ZBQTJEO0FBRzNELE1BQU0sYUFBYSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsZ0JBQWdCLEVBQUU7SUFDakQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFDM0IsU0FBUyxFQUFDLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdEIsTUFBTSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUU7SUFDdEIsU0FBUyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFDdkIsVUFBVSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDbkMsV0FBVyxFQUFFLGFBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUU7SUFDdkMsd0JBQXdCLEVBQUcsYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxnQ0FBb0IsRUFBRTtRQUVqRSxRQUFRLEVBQUUsNEJBQTRCO0tBQ3pDLENBQUM7Q0FDTCxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ1IsTUFBTSxFQUFFLENBQUMsMEJBQTBCLENBQUM7Q0FDdkMsQ0FBQyxDQUFBO0FBR0Ysa0JBQWUsYUFBYSxDQUFBIn0=