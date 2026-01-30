"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
class PaymentDirectBsiService extends utils_1.AbstractPaymentProvider {
    constructor(container, options) {
        super(container, options);
        this.logger_ = container.logger;
        this.options_ = options;
    }
    async cancelPayment(input) {
        throw new Error("Method not implemented.");
    }
    async initiatePayment(input) {
        const { amount, currency_code, data } = input;
        // Use session_id from data if available, or generate a new one.
        const sessionId = data?.session_id || `bsi_${Date.now()}`;
        return {
            id: sessionId,
            data: {
                ...data,
                session_id: sessionId,
                bank_name: "Bank Syariah Indonesia (BSI)",
                account_number: this.options_.accountNumber || "7000000000",
                account_name: this.options_.accountName || "Internal Finance",
                amount: amount || 500,
                currency: currency_code,
                instructions: "Please transfer the exact amount to the BSI account provided.",
            }
        };
    }
    async deletePayment(input) {
        throw new Error("Method not implemented.");
    }
    async refundPayment(input) {
        throw new Error("Method not implemented.");
    }
    async retrievePayment(input) {
        throw new Error("Method not implemented.");
    }
    async updatePayment(input) {
        throw new Error("Method not implemented.");
    }
    async getWebhookActionAndData(data) {
        throw new Error("Method not implemented.");
    }
    // Langsung tandai ter-**authorize** saat checkout (tanpa panggilan eksternal)
    async authorizePayment(paymentSessionData) {
        return {
            status: utils_1.PaymentSessionStatus.AUTHORIZED,
            data: {
                // manual: true //Tujuannya supaya untuk status order di admin menjadi "pending"
                id: paymentSessionData.id
            },
        };
    }
    // Tangkap pembayaran (setelah bukti transfer dikonfirmasi)
    async capturePayment(input) {
        // Karena manual, cukup kembalikan session_data untuk disimpan
        const data = input.data || {};
        return { data };
    }
    // Periksa status pembayaran (kita anggap selalu ter-**authorized** sebelum capture)
    async getPaymentStatus(input) {
        const data = (input.data || {});
        if (data.captured_at) {
            return { status: "captured" };
        }
        if (data.authorized_at) {
            return { status: "authorized" };
        }
        if (data.canceled_at) {
            return { status: "canceled" };
        }
        return { status: "pending" };
    }
}
PaymentDirectBsiService.identifier = "transfer-bsi";
exports.default = PaymentDirectBsiService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQtZGlyZWN0LWJzaS9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQXlGO0FBZ0N6RixNQUFNLHVCQUF3QixTQUFRLCtCQUFnQztJQU1wRSxZQUFZLFNBQStCLEVBQUUsT0FBZ0I7UUFDM0QsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFDekIsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBeUI7UUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQTJCO1FBQy9DLE1BQU0sRUFBRSxNQUFNLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQztRQUU5QyxnRUFBZ0U7UUFDaEUsTUFBTSxTQUFTLEdBQUksSUFBSSxFQUFFLFVBQXFCLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQztRQUV0RSxPQUFPO1lBQ0wsRUFBRSxFQUFFLFNBQVM7WUFDYixJQUFJLEVBQUU7Z0JBQ0osR0FBRyxJQUFJO2dCQUNQLFVBQVUsRUFBRSxTQUFTO2dCQUNyQixTQUFTLEVBQUUsOEJBQThCO2dCQUN6QyxjQUFjLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLElBQUksWUFBWTtnQkFDM0QsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxJQUFJLGtCQUFrQjtnQkFDN0QsTUFBTSxFQUFFLE1BQU0sSUFBSSxHQUFHO2dCQUNyQixRQUFRLEVBQUUsYUFBYTtnQkFDdkIsWUFBWSxFQUFFLCtEQUErRDthQUM5RTtTQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUF5QjtRQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBeUI7UUFDM0MsTUFBTSxJQUFJLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQTJCO1FBQy9DLE1BQU0sSUFBSSxLQUFLLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUF5QjtRQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxJQUF1QztRQUNuRSxNQUFNLElBQUksS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDhFQUE4RTtJQUM5RSxLQUFLLENBQUMsZ0JBQWdCLENBQUMsa0JBQTJDO1FBQ2hFLE9BQU87WUFDTCxNQUFNLEVBQUUsNEJBQW9CLENBQUMsVUFBVTtZQUN2QyxJQUFJLEVBQUU7Z0JBQ0osZ0ZBQWdGO2dCQUNoRixFQUFFLEVBQUUsa0JBQWtCLENBQUMsRUFBRTthQUMxQjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsMkRBQTJEO0lBQzNELEtBQUssQ0FBQyxjQUFjLENBQUMsS0FBMEI7UUFDN0MsOERBQThEO1FBQzlELE1BQU0sSUFBSSxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFBO1FBQzdCLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQTtJQUNqQixDQUFDO0lBRUQsb0ZBQW9GO0lBQ3BGLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxLQUE0QjtRQUNqRCxNQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLElBQUksRUFBRSxDQUE0QixDQUFDO1FBRTNELElBQUssSUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUNELElBQUssSUFBWSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQ2hDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLENBQUM7UUFDbEMsQ0FBQztRQUNELElBQUssSUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzlCLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLENBQUM7UUFDaEMsQ0FBQztRQUVELE9BQU8sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLENBQUM7SUFDL0IsQ0FBQzs7QUF4Rk0sa0NBQVUsR0FBRyxjQUFjLENBQUE7QUEyRnBDLGtCQUFlLHVCQUF1QixDQUFBIn0=