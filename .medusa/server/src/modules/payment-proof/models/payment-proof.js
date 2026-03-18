"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
/**
 * Nama table: payment_proof
 * - gunakan snake_case untuk nama tabel (dml convention)
 * - Medusa otomatis menambahkan created_at, updated_at, deleted_at
 */
const PaymentProof = utils_1.model.define("payment_proof", {
    id: utils_1.model.id().primaryKey(),
    // referensi id (simpan sebagai text untuk kemudahan; untuk link silang gunakan Module Links)
    cart_id: utils_1.model.text().nullable(), // jika ingin hubungkan ke cart sebelum complete
    //   order_id: model.text().nullable(),           // jika ingin hubungkan setelah order dibuat
    //   payment_session_id: model.text().nullable(), // bila ingin hubungkan ke payment session
    // informasi file (simpan key/path + optional public url)
    file_key: utils_1.model.text(), // mis. uploads/payment-proofs/<uuid>.jpg
    file_url: utils_1.model.text().nullable(), // optional, kalau ingin langsung simpan url
    // metadata tambahan
    uploaded_by: utils_1.model.text().nullable(), // id pengguna/admin yang mengunggah
    status: utils_1.model.enum(["pending", "verified", "rejected"]).default("pending"),
    note: utils_1.model.text().nullable()
});
exports.default = PaymentProof;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1wcm9vZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtcHJvb2YvbW9kZWxzL3BheW1lbnQtcHJvb2YudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxxREFBa0Q7QUFFbEQ7Ozs7R0FJRztBQUNILE1BQU0sWUFBWSxHQUFHLGFBQUssQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFO0lBQ2pELEVBQUUsRUFBRSxhQUFLLENBQUMsRUFBRSxFQUFFLENBQUMsVUFBVSxFQUFFO0lBRTNCLDZGQUE2RjtJQUM3RixPQUFPLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFhLGdEQUFnRDtJQUMvRiw4RkFBOEY7SUFDOUYsNEZBQTRGO0lBRTFGLHlEQUF5RDtJQUN6RCxRQUFRLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxFQUFJLHlDQUF5QztJQUNuRSxRQUFRLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFHLDRDQUE0QztJQUVoRixvQkFBb0I7SUFDcEIsV0FBVyxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFBRSxvQ0FBb0M7SUFDMUUsTUFBTSxFQUFFLGFBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQztJQUMxRSxJQUFJLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRTtDQUM5QixDQUFDLENBQUM7QUFFSCxrQkFBZSxZQUFZLENBQUMifQ==