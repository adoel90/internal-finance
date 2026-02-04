"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/core-flows");
const index_1 = require("src/modules/payment-proof/index");
const POST = async (req, res) => {
    const files = req.files;
    if (!files || files.length === 0) {
        res.status(400).json({ message: "No files uploaded" });
        return;
    }
    const { result } = await (0, core_flows_1.uploadFilesWorkflow)(req.scope).run({
        input: {
            files: files.map((file) => ({
                filename: file.originalname,
                mimeType: file.mimetype,
                content: file.buffer.toString("base64"),
                access: "public",
            })),
        },
    });
    // Resolve the Payment Proof service to save the record
    const paymentProofService = req.scope.resolve(index_1.PAYMENT_PROOF_MODULE);
    const paymentProofs = await Promise.all(result.map(async (file) => {
        return await paymentProofService.createPaymentProofs({
            // file_key: file?.key,
            file_url: file.url,
            // You can add more fields here like cart_id or uploaded_by if available in req.body or req.user
            // uploaded_by: req.user?.id
        });
    }));
    res.json({
        files: result,
        payment_proofs: paymentProofs
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3BheW1lbnQvdXBsb2FkLXBheW1lbnQtcHJvb2Yvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQTBEO0FBQzFELDJEQUFzRTtBQUcvRCxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDcEUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQThCLENBQUE7SUFFaEQsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQTtRQUN0RCxPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsZ0NBQW1CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDMUIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZDLE1BQU0sRUFBRSxRQUFRO2FBQ2pCLENBQUMsQ0FBQztTQUNKO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsdURBQXVEO0lBQ3ZELE1BQU0sbUJBQW1CLEdBQXdCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDRCQUFvQixDQUFDLENBQUE7SUFFeEYsTUFBTSxhQUFhLEdBQUcsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUNyQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUN4QixPQUFPLE1BQU0sbUJBQW1CLENBQUMsbUJBQW1CLENBQUM7WUFDbkQsdUJBQXVCO1lBQ3ZCLFFBQVEsRUFBRSxJQUFJLENBQUMsR0FBRztZQUNsQixnR0FBZ0c7WUFDaEcsNEJBQTRCO1NBQzdCLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUNILENBQUE7SUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsS0FBSyxFQUFFLE1BQU07UUFDYixjQUFjLEVBQUUsYUFBYTtLQUM5QixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFyQ1ksUUFBQSxJQUFJLFFBcUNoQiJ9