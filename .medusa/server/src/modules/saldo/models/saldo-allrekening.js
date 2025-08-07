"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
const saldo_history_1 = __importDefault(require("./saldo-history"));
const SaldoAllrekening = utils_1.model.define("saldo_allrekening", {
    id: utils_1.model.id().primaryKey(),
    nama_bank: utils_1.model.text(),
    no_rek: utils_1.model.number(),
    atas_nama: utils_1.model.text(),
    keterangan: utils_1.model.text().nullable(),
    allowed_see: utils_1.model.boolean().nullable(),
    histories: utils_1.model.hasMany(() => saldo_history_1.default, {
        mappedBy: "amountSaldo"
    })
}).cascades({
    delete: ["histories"]
});
exports.default = SaldoAllrekening;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FsZG8tYWxscmVrZW5pbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvbW9kdWxlcy9zYWxkby9tb2RlbHMvc2FsZG8tYWxscmVrZW5pbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxREFBaUQ7QUFDakQsb0VBQTBDO0FBRzFDLE1BQU0sZ0JBQWdCLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxtQkFBbUIsRUFBRTtJQUN2RCxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixTQUFTLEVBQUMsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN0QixNQUFNLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRTtJQUN0QixTQUFTLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRTtJQUN2QixVQUFVLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUNuQyxXQUFXLEVBQUUsYUFBSyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRTtJQUN2QyxTQUFTLEVBQUcsYUFBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyx1QkFBWSxFQUFFO1FBRTFDLFFBQVEsRUFBRSxhQUFhO0tBQzFCLENBQUM7Q0FDTCxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ1gsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDO0NBQ3JCLENBQUMsQ0FBQTtBQUdGLGtCQUFlLGdCQUFnQixDQUFBIn0=