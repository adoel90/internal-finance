import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { uploadFilesWorkflow } from "@medusajs/core-flows"
import { PAYMENT_PROOF_MODULE } from "src/modules/payment-proof/index"
import PaymentProofService from "src/modules/payment-proof/service"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const files = req.files as Express.Multer.File[]

  if (!files || files.length === 0) {
    res.status(400).json({ message: "No files uploaded" })
    return
  }

  const { result } = await uploadFilesWorkflow(req.scope).run({
    input: {
      files: files.map((file) => ({
        filename: file.originalname,
        mimeType: file.mimetype,
        content: file.buffer.toString("base64"),
        access: "public",
      })),
    },
  })

  // Resolve the Payment Proof service to save the record
  const paymentProofService: PaymentProofService = req.scope.resolve(PAYMENT_PROOF_MODULE)
  
  const paymentProofs = await Promise.all(
    result.map(async (file) => {
      return await paymentProofService.createPaymentProofs({
        // file_key: file?.key,
        file_url: file.url,
        // You can add more fields here like cart_id or uploaded_by if available in req.body or req.user
        // uploaded_by: req.user?.id
      })
    })
  )

  res.json({ 
    files: result,
    payment_proofs: paymentProofs
  })
}