"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const payment_direct_midtrans_1 = require("../../../modules/payment-direct-midtrans");
const utils_1 = require("@medusajs/utils");
const POST = async (req, res) => {
    const paymentService = req.scope.resolve(payment_direct_midtrans_1.PAYMENT_DIRECT_MIDTRANS_MODULE);
    const paymentMedusaService = req.scope.resolve(utils_1.Modules.PAYMENT);
    // paymentService.getMessage();
    const { orderId, grossAmount, customer, paymentCollection } = req.body;
    // Authorize payment session
    const sessionId = paymentCollection?.payment_sessions?.[0]?.id;
    if (!sessionId) {
        return res.status(400).json({ message: "Missing payment session ID" });
    }
    const paymentAutorizedResult = await paymentMedusaService.authorizePaymentSession(sessionId, {});
    // console.log("Payment after authorize: ", paymentAutorizedResult)
    if (!paymentAutorizedResult.data) {
        return res.status(500).json({ message: "Payment authorization failed" });
    }
    try {
        const result = await paymentService.createTransaction({
            orderId,
            grossAmount,
            customer,
            // paymentCollection
        });
        // Check if result and token exist before accessing
        if (!result || !result.token) {
            console.error('Midtrans returned null or invalid response:', result);
            res.status(500).json({
                message: "Payment token generation failed",
                detail: "Invalid response from payment gateway"
            });
            return;
        }
        res.json({ token: result.token });
    }
    catch (err) {
        console.error('Payment service error:', err);
        res.status(500).json({ message: "Midtrans error", detail: err.message });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3BheW1lbnQvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsc0ZBQXlGO0FBRXpGLDJDQUEwQztBQUluQyxNQUFNLElBQUksR0FBRyxLQUFLLEVBQ3ZCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLEVBQUU7SUFFRixNQUFNLGNBQWMsR0FBd0MsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsd0RBQThCLENBQWtELENBQUM7SUFDL0osTUFBTSxvQkFBb0IsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxlQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7SUFFaEUsK0JBQStCO0lBQ2hDLE1BQU0sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEdBQUcsQ0FBQyxJQUs5RCxDQUFDO0lBR0YsNEJBQTRCO0lBQzVCLE1BQU0sU0FBUyxHQUFHLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO0lBQy9ELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsQ0FBQyxDQUFDO0lBQ3pFLENBQUM7SUFDRCxNQUFNLHNCQUFzQixHQUFHLE1BQU0sb0JBQW9CLENBQUMsdUJBQXVCLENBQUMsU0FBbUIsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUUzRyxtRUFBbUU7SUFDbkUsSUFBSSxDQUFDLHNCQUFzQixDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2pDLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsOEJBQThCLEVBQUUsQ0FBQyxDQUFDO0lBQzNFLENBQUM7SUFFRCxJQUFJLENBQUM7UUFDSCxNQUFNLE1BQU0sR0FBRyxNQUFNLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQztZQUNwRCxPQUFPO1lBQ1AsV0FBVztZQUNYLFFBQVE7WUFDUixvQkFBb0I7U0FDckIsQ0FBQyxDQUFDO1FBRUgsbURBQW1EO1FBQ25ELElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7WUFFN0IsT0FBTyxDQUFDLEtBQUssQ0FBQyw2Q0FBNkMsRUFBRSxNQUFNLENBQUMsQ0FBQztZQUVyRSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFDbkIsT0FBTyxFQUFFLGlDQUFpQztnQkFDMUMsTUFBTSxFQUFFLHVDQUF1QzthQUNoRCxDQUFDLENBQUM7WUFFSCxPQUFPO1FBQ1QsQ0FBQztRQUVELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFFcEMsQ0FBQztJQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFYixPQUFPLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBekRZLFFBQUEsSUFBSSxRQXlEaEIifQ==