"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const midtrans_client_1 = __importDefault(require("midtrans-client"));
class PaymentModuleService {
    constructor() {
        this.snap = new midtrans_client_1.default.Snap({
            isProduction: process.env.NODE_ENV === 'production',
            serverKey: process.env.MIDTRANS_SERVER_KEY || "",
        });
    }
    async getMessage() {
        return "Hello from PaymentModuleService!";
    }
    async createTransaction(data) {
        const parameter = {
            transaction_details: {
                order_id: data.orderId,
                gross_amount: data.grossAmount,
            },
            customer_details: data.customer,
        };
        const transaction = await this.snap.createTransaction(parameter);
        return transaction;
    }
}
PaymentModuleService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
exports.default = PaymentModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzRUFBNkM7QUFjN0MsTUFBTSxvQkFBb0I7SUFLdEI7UUFFRSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUkseUJBQWMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVk7WUFDbkQsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLElBQUksRUFBRTtTQUNqRCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFVBQVU7UUFDWixPQUFPLGtDQUFrQyxDQUFDO0lBQzlDLENBQUM7SUFFRCxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBc0I7UUFDNUMsTUFBTSxTQUFTLEdBQUc7WUFDaEIsbUJBQW1CLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxJQUFJLENBQUMsT0FBTztnQkFDdEIsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXO2FBQy9CO1lBQ0QsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVE7U0FDaEMsQ0FBQztRQUVGLE1BQU0sV0FBVyxHQUFHLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxPQUFPLFdBQVcsQ0FBQztJQUNyQixDQUFDOztBQTFCTSw4QkFBUyxHQUFHLGlCQUFRLENBQUMsTUFBTSxDQUFDO0FBNkJ2QyxrQkFBZSxvQkFBb0IsQ0FBQSJ9