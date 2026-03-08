"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const index_1 = require("src/modules/payment-proof/index");
const POST = async (req, res) => {
    const files = req.files;
    console.log("Received files:", req.files);
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
    console.log("Upload result:", result);
    // Resolve the Payment Proof service to save the record
    const paymentProofService = req.scope.resolve(index_1.PAYMENT_PROOF_MODULE);
    const body = req.body;
    const paymentProofs = await Promise.all(result.map(async (file) => {
        return await paymentProofService.createPaymentProofs({
            file_key: file.id, // Using ID as key for now, will verify with logs
            file_url: file.url,
            cart_id: body.cart_id,
            uploaded_by: body.user_email,
            // You can add more fields here like cart_id or uploaded_by if available in req.body or req.user
            // uploaded_by: req.user?.id
        });
    }));
    // Resolve the Event Bus to emit the domain registration event
    // const eventBus = req.scope.resolve(Modules.EVENT_BUS)
    // Emit the event to trigger the background domain creation.
    // We pass the `body` so the subscriber receives the fields (like `name` and `slug`) 
    // that the frontend sent in the form data.
    // await eventBus.emit({
    //   name: "registered-domain-event",
    //   data: body
    // })
    res.json({
        files: result,
        payment_proofs: paymentProofs
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3BheW1lbnQvdXBsb2FkLXBheW1lbnQtcHJvb2Yvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsNERBQWlFO0FBQ2pFLDJEQUFzRTtBQUsvRCxNQUFNLElBQUksR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDcEUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQThCLENBQUE7SUFFaEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFekMsSUFBSSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLENBQUMsQ0FBQTtRQUN0RCxPQUFNO0lBQ1IsQ0FBQztJQUVELE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxNQUFNLElBQUEsZ0NBQW1CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMxRCxLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDMUIsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZO2dCQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7Z0JBQ3ZCLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7Z0JBQ3ZDLE1BQU0sRUFBRSxRQUFRO2FBQ2pCLENBQUMsQ0FBQztTQUNKO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsRUFBRSxNQUFNLENBQUMsQ0FBQztJQUV0Qyx1REFBdUQ7SUFDdkQsTUFBTSxtQkFBbUIsR0FBd0IsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsNEJBQW9CLENBQUMsQ0FBQTtJQVF4RixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsSUFBOEIsQ0FBQTtJQUUvQyxNQUFNLGFBQWEsR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxFQUFFO1FBQ3hCLE9BQU8sTUFBTSxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQztZQUNuRCxRQUFRLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxpREFBaUQ7WUFDcEUsUUFBUSxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2xCLE9BQU8sRUFBRSxJQUFJLENBQUMsT0FBaUI7WUFDL0IsV0FBVyxFQUFFLElBQUksQ0FBQyxVQUFVO1lBQzVCLGdHQUFnRztZQUNoRyw0QkFBNEI7U0FDN0IsQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQ0gsQ0FBQTtJQUVELDhEQUE4RDtJQUM5RCx3REFBd0Q7SUFFeEQsNERBQTREO0lBQzVELHFGQUFxRjtJQUNyRiwyQ0FBMkM7SUFDM0Msd0JBQXdCO0lBQ3hCLHFDQUFxQztJQUNyQyxlQUFlO0lBQ2YsS0FBSztJQUVMLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCxLQUFLLEVBQUUsTUFBTTtRQUNiLGNBQWMsRUFBRSxhQUFhO0tBQzlCLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQTlEWSxRQUFBLElBQUksUUE4RGhCIn0=