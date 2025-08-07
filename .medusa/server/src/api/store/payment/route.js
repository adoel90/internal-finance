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
        res.json({ token: result.token });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ message: "Midtrans error", detail: err.message });
    }
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3BheW1lbnQvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBTUEsc0RBQXlEO0FBR2xELE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUVGLE1BQU0sY0FBYyxHQUEwQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyx3QkFBYyxDQUFvQyxDQUFDO0lBRW5ILGNBQWMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUU1QixNQUFNLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxRQUFRLEVBQUUsR0FBRyxHQUFHLENBQUMsSUFJOUMsQ0FBQztJQUNBLElBQUksQ0FBQztRQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sY0FBYyxDQUFDLGlCQUFpQixDQUFDO1lBQ3BELE9BQU87WUFDUCxXQUFXO1lBQ1gsUUFBUTtTQUNULENBQUMsQ0FBQztRQUVILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFFYixPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sRUFBRSxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQztJQUMzRSxDQUFDO0FBQ0wsQ0FBQyxDQUFBO0FBM0JZLFFBQUEsSUFBSSxRQTJCaEIifQ==