"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const midtrans_client_1 = __importDefault(require("midtrans-client"));
class PaymentDirectMidtransModuleService {
    constructor() {
        this.snap = new midtrans_client_1.default.Snap({
            isProduction: process.env.NODE_ENV === 'production' ? true : false,
            serverKey: process.env.MIDTRANS_SERVER_KEY || "",
        });
    }
    async createTransaction(data) {
        const parameter = {
            transaction_details: {
                order_id: data.orderId,
                gross_amount: data.grossAmount,
            },
            customer_details: data.customer,
            // paymentCollection: data.paymentCollection
        };
        const transaction = await this.snap.createTransaction(parameter);
        return transaction;
    }
}
exports.default = PaymentDirectMidtransModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtZGlyZWN0LW1pZHRyYW5zL3NlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSxzRUFBNkM7QUFnQjdDLE1BQU0sa0NBQWtDO0lBSXBDO1FBRUksSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLHlCQUFjLENBQUMsSUFBSSxDQUFDO1lBQ2hDLFlBQVksRUFBRSxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSztZQUNsRSxTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsSUFBSSxFQUFFO1NBQ25ELENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBc0I7UUFFeEMsTUFBTSxTQUFTLEdBQUc7WUFDaEIsbUJBQW1CLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQy9CO1lBQ0QsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDL0IsNENBQTRDO1NBQzdDLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakUsT0FBTyxXQUFXLENBQUM7SUFDekIsQ0FBQztDQUVKO0FBRUQsa0JBQWUsa0NBQWtDLENBQUEifQ==