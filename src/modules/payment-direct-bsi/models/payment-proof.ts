// https://chatgpt.com/share/697e98f7-67ec-8000-bee2-2282e55a080e
// https://docs.medusajs.com/resources/references/js-sdk/admin/upload#upload---js-sdk-admin-reference
// https://docs.medusajs.com/api/admin#uploads_getuploadsid

import { model } from "@medusajs/framework/utils";

/**
 * Nama table: payment_proof
 * - gunakan snake_case untuk nama tabel (dml convention)
 * - Medusa otomatis menambahkan created_at, updated_at, deleted_at
 */
const PaymentProof = model.define("payment_proof", {
  id: model.id().primaryKey(),

  // referensi id (simpan sebagai text untuk kemudahan; untuk link silang gunakan Module Links)
  cart_id: model.text().nullable(),            // jika ingin hubungkan ke cart sebelum complete
//   order_id: model.text().nullable(),           // jika ingin hubungkan setelah order dibuat
//   payment_session_id: model.text().nullable(), // bila ingin hubungkan ke payment session

  // informasi file (simpan key/path + optional public url)
  file_key: model.text(),   // mis. uploads/payment-proofs/<uuid>.jpg
  file_url: model.text().nullable(),  // optional, kalau ingin langsung simpan url

  // metadata tambahan
  uploaded_by: model.text().nullable(), // id pengguna/admin yang mengunggah
  status: model.enum(["pending", "verified", "rejected"]).default("pending"),
  note: model.text().nullable()
});

export default PaymentProof;
