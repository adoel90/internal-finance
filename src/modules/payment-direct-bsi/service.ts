import { AbstractPaymentProvider, PaymentSessionStatus } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import { 
  CancelPaymentInput, 
  CancelPaymentOutput, 
  InitiatePaymentInput, 
  InitiatePaymentOutput, 
  DeletePaymentInput, 
  DeletePaymentOutput, 
  RefundPaymentInput, 
  RefundPaymentOutput, 
  RetrievePaymentInput, 
  RetrievePaymentOutput, 
  UpdatePaymentInput, 
  UpdatePaymentOutput, 
  CapturePaymentInput, 
  CapturePaymentOutput, 
  GetPaymentStatusInput, 
  GetPaymentStatusOutput, 
  ProviderWebhookPayload, 
  WebhookActionResult 
} from "@medusajs/types";

type Options = {
  accountNumber?: string;
  accountName?: string;
}

type InjectedDependencies = {
  logger: Logger
}

class PaymentDirectBsiService extends AbstractPaymentProvider<Options> {

  static identifier = "transfer-bsi" 
  protected logger_: Logger
  protected options_: Options

  constructor(container: InjectedDependencies, options: Options) {
    super(container, options)
    this.logger_ = container.logger
    this.options_ = options
  }

  async cancelPayment(input: CancelPaymentInput): Promise<CancelPaymentOutput> {
    throw new Error("Method not implemented.");
  }

  async initiatePayment(input: InitiatePaymentInput): Promise<InitiatePaymentOutput> {
    const { amount, currency_code, data } = input;

    // Use session_id from data if available, or generate a new one.
    const sessionId = (data?.session_id as string) || `bsi_${Date.now()}`;

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

  async deletePayment(input: DeletePaymentInput): Promise<DeletePaymentOutput> {
    throw new Error("Method not implemented.");
  }

  async refundPayment(input: RefundPaymentInput): Promise<RefundPaymentOutput> {
    throw new Error("Method not implemented.");
  }

  async retrievePayment(input: RetrievePaymentInput): Promise<RetrievePaymentOutput> {
    throw new Error("Method not implemented.");
  }

  async updatePayment(input: UpdatePaymentInput): Promise<UpdatePaymentOutput> {
    throw new Error("Method not implemented.");
  }

  async getWebhookActionAndData(data: ProviderWebhookPayload["payload"]): Promise<WebhookActionResult> {
    throw new Error("Method not implemented.");
  }
  
  // Langsung tandai ter-**authorize** saat checkout (tanpa panggilan eksternal)
  async authorizePayment(paymentSessionData: Record<string, unknown>) {
    return {
      status: PaymentSessionStatus.AUTHORIZED,
      data: { 
        // manual: true //Tujuannya supaya untuk status order di admin menjadi "pending"
        id: paymentSessionData.id 
      },
    }
  }

  // Tangkap pembayaran (setelah bukti transfer dikonfirmasi)
  async capturePayment(input: CapturePaymentInput): Promise<CapturePaymentOutput> {
    // Karena manual, cukup kembalikan session_data untuk disimpan
    const data = input.data || {}
    return { data }
  }

  // Periksa status pembayaran (kita anggap selalu ter-**authorized** sebelum capture)
  async getPaymentStatus(input: GetPaymentStatusInput): Promise<GetPaymentStatusOutput> {
    const data = (input.data || {}) as Record<string, unknown>;

    if ((data as any).captured_at) {
      return { status: "captured" };
    }
    if ((data as any).authorized_at) {
      return { status: "authorized" };
    }
    if ((data as any).canceled_at) {
      return { status: "canceled" };
    }

    return { status: "pending" };
  }
}

export default PaymentDirectBsiService