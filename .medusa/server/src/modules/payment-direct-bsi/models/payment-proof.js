"use strict";
// https://chatgpt.com/share/697e98f7-67ec-8000-bee2-2282e55a080e
// https://docs.medusajs.com/resources/references/js-sdk/admin/upload#upload---js-sdk-admin-reference
// https://docs.medusajs.com/api/admin#uploads_getuploadsid
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudC1wcm9vZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtZGlyZWN0LWJzaS9tb2RlbHMvcGF5bWVudC1wcm9vZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsaUVBQWlFO0FBQ2pFLHFHQUFxRztBQUNyRywyREFBMkQ7O0FBRTNELHFEQUFrRDtBQUVsRDs7OztHQUlHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsYUFBSyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUU7SUFDakQsRUFBRSxFQUFFLGFBQUssQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLEVBQUU7SUFFM0IsNkZBQTZGO0lBQzdGLE9BQU8sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQWEsZ0RBQWdEO0lBQy9GLDhGQUE4RjtJQUM5Riw0RkFBNEY7SUFFMUYseURBQXlEO0lBQ3pELFFBQVEsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLEVBQUkseUNBQXlDO0lBQ25FLFFBQVEsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUcsNENBQTRDO0lBRWhGLG9CQUFvQjtJQUNwQixXQUFXLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUFFLG9DQUFvQztJQUMxRSxNQUFNLEVBQUUsYUFBSyxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDO0lBQzFFLElBQUksRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQzlCLENBQUMsQ0FBQztBQUVILGtCQUFlLFlBQVksQ0FBQyJ9