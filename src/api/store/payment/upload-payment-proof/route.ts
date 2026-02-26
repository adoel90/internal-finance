import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { uploadFilesWorkflow } from "@medusajs/medusa/core-flows"
import { PAYMENT_PROOF_MODULE } from "src/modules/payment-proof/index"
import PaymentProofService from "src/modules/payment-proof/service"

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  // console.log("Req headers:", req.headers)
  // console.log("Req files:", req.files)
  // console.log("Req body:", req.body)
  const files = req.files as Express.Multer.File[]

  console.log("Received files:", req.files)

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

  console.log("Upload result:", result);

  // Resolve the Payment Proof service to save the record
  const paymentProofService: PaymentProofService = req.scope.resolve(PAYMENT_PROOF_MODULE)
  
  // Provide a typed view of req.body to avoid 'unknown' property access
  type UploadPaymentProofBody = {
    cart_id?: string
    user_email: string
  }
  const body = req.body as UploadPaymentProofBody

  const paymentProofs = await Promise.all(
    result.map(async (file) => {
      return await paymentProofService.createPaymentProofs({
        file_key: file.id, // Using ID as key for now, will verify with logs
        file_url: file.url,
        cart_id: body.cart_id as string,
        uploaded_by: body.user_email,
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