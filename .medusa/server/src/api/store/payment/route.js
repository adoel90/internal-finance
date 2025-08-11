"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const payment_1 = require("../../../modules/payment");
const POST = async (req, res) => {
    const paymentService = req.scope.resolve(payment_1.PAYMENT_MODULE);
    paymentService.getMessage();
    const { orderId, grossAmount, customer } = req.body;
    try {
        const result = await paymentService.createTransaction({
            orderId,
            grossAmount,
            customer,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3BheW1lbnQvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsc0RBQXlEO0FBR2xELE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUVGLE1BQU0sY0FBYyxHQUEwQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyx3QkFBYyxDQUFvQyxDQUFDO0lBRW5ILGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU1QixNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFJOUMsQ0FBQztJQUNBLElBQUksQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLGlCQUFpQixDQUFDO1lBQ3BELE9BQU87WUFDUCxXQUFXO1lBQ1gsUUFBUTtTQUNULENBQUMsQ0FBQztRQUVILG1EQUFtRDtRQUNuRCxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUMsNkNBQTZDLEVBQUUsTUFBTSxDQUFDLENBQUM7WUFDckUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxpQ0FBaUM7Z0JBQzFDLE1BQU0sRUFBRSx1Q0FBdUM7YUFDaEQsQ0FBQyxDQUFDO1lBQ0gsT0FBTztRQUNULENBQUM7UUFFRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBRWIsT0FBTyxDQUFDLEtBQUssQ0FBQyx3QkFBd0IsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM3QyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDM0UsQ0FBQztBQUNMLENBQUMsQ0FBQTtBQXJDWSxRQUFBLElBQUksUUFxQ2hCIn0=