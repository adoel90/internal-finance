"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const awilix_1 = require("awilix");
const midtrans_client_1 = __importDefault(require("midtrans-client"));
const utils_1 = require("@medusajs/framework/utils");
const utils_2 = require("@medusajs/framework/utils");
class PaymentModuleService extends utils_1.AbstractPaymentProvider {
    constructor(container, options) {
        super(container, options);
        //  super(container, options)
        //   this.apiKey = options.apiKey
        //   this.isProduction = options.isProduction ?? false
        this.snap = new midtrans_client_1.default.Snap({
            isProduction: process.env.NODE_ENV === 'production',
            serverKey: process.env.MIDTRANS_SERVER_KEY || "",
        });
        this.logger_ = container.logger;
        this.options_ = options;
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
    async authorizePayment(input) {
        // const externalId = input.data?.id      
        // assuming you have a client that authorizes the payment
        // const paymentData = await this.client.authorizePayment(externalId)
        // return {
        //   // data: paymentData,
        //   status: "authorized"
        // }
        // console.log("Authorize Payment called with input:", input);
        try {
            // TODO: verify to Midtrans
            const authorized = true;
            if (!authorized) {
                return {
                    status: "error",
                    data: { message: "Authorization failed" },
                };
            }
            return {
                status: "authorized",
                data: {
                    transaction_id: "trx_123",
                    fraud_status: "accept",
                },
            };
        }
        catch (err) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.UNEXPECTED_STATE, `Midtrans authorization failed: ${err instanceof Error ? err.message : String(err)}`);
        }
    }
    async cancelPayment(input) {
        const externalId = input.data?.id;
        // assuming you have a client that cancels the payment
        // const paymentData = await this.client.cancelPayment(externalId)
        // return { data: paymentData }
        return {
            // data: paymentData,
            data: {
                result: "canceled"
            }
        };
    }
    async capturePayment(input) {
        // assuming you have a client that captures the payment
        // const externalId = input.data?.id
        // const newData = await this.client.capturePayment(externalId)
        // return {
        //   data: {
        //     ...newData,
        //     id: externalId,
        //   }
        // }
        try {
            // TODO: verify to Midtrans
            const captured = true;
            if (!captured) {
                return {
                    // status: "error",
                    data: { message: "Captured failed" },
                };
            }
            return {
                // status: "captured",
                data: { message: "Captured Success" },
            };
        }
        catch (err) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.UNEXPECTED_STATE, `Midtrans captured failed: ${err instanceof Error ? err.message : String(err)}`);
        }
    }
    async createAccountHolder({ context, data }) {
        const { account_holder, customer } = context;
        if (account_holder?.data?.id) {
            return { id: account_holder.data.id };
        }
        if (!customer) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.INVALID_DATA, "Missing customer data.");
        }
        // assuming you have a client that creates the account holder
        const providerAccountHolder = await this.client.createAccountHolder({
            email: customer.email,
            ...data
        });
        return {
            id: providerAccountHolder.id,
            data: providerAccountHolder
        };
    }
    async deleteAccountHolder({ context }) {
        const { account_holder } = context;
        const accountHolderId = account_holder?.data?.id;
        if (!accountHolderId) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.INVALID_DATA, "Missing account holder ID.");
        }
        // assuming you have a client that deletes the account holder
        await this.client.deleteAccountHolder({
            id: accountHolderId
        });
        return {};
    }
    async deletePayment(input) {
        const externalId = input.data?.id;
        // assuming you have a client that cancels the payment
        await this.client.cancelPayment(externalId);
        return {
            data: input.data
        };
    }
    async getPaymentStatus(input) {
        const externalId = input.data?.id;
        // assuming you have a client that retrieves the payment status
        const status = await this.client.getStatus(externalId);
        switch (status) {
            case "requires_capture":
                return { status: "authorized" };
            case "success":
                return { status: "captured" };
            case "canceled":
                return { status: "canceled" };
            default:
                return { status: "pending" };
        }
    }
    async getWebhookActionAndData(payload) {
        const { data, rawData, headers } = payload;
        try {
            switch (data.event_type) {
                case "authorized_amount":
                    return {
                        action: "authorized",
                        data: {
                            // assuming the session_id is stored in the metadata of the payment
                            // in the third-party provider
                            session_id: data.metadata.session_id,
                            amount: new utils_1.BigNumber(data.amount)
                        }
                    };
                case "success":
                    return {
                        action: "captured",
                        data: {
                            // assuming the session_id is stored in the metadata of the payment
                            // in the third-party provider
                            session_id: data.metadata.session_id,
                            amount: new utils_1.BigNumber(data.amount)
                        }
                    };
                default:
                    return {
                        action: "not_supported",
                        data: {
                            session_id: "",
                            amount: new utils_1.BigNumber(0)
                        }
                    };
            }
        }
        catch (e) {
            return {
                action: "failed",
                data: {
                    // assuming the session_id is stored in the metadata of the payment
                    // in the third-party provider
                    session_id: data.metadata.session_id,
                    amount: new utils_1.BigNumber(data.amount)
                }
            };
        }
    }
    // async initiatePayment(context) {
    //   try {
    //     const response = await axios.post(
    //       `${this.isProduction ? "https://api.midtrans.com" : "https://api.sandbox.midtrans.com"}/v2/charge`,
    //       {
    //         payment_type: "bank_transfer",
    //         transaction_details: {
    //           order_id: context.resource_id,
    //           gross_amount: context.amount / 100,
    //         },
    //       },
    //       {
    //         headers: {
    //           Authorization: `Basic ${Buffer.from(this.apiKey + ":").toString("base64")}`,
    //           "Content-Type": "application/json",
    //         },
    //       }
    //     )
    //     return {
    //       status: PaymentSessionStatus.PENDING,
    //       data: response.data,
    //     }
    //   } catch (err) {
    //     throw new PaymentProcessorError(err.message, err.response?.data || {})
    //   }
    // }
    async initiatePayment(input) {
        const { amount, currency_code, context: customerDetails } = input;
        // assuming you have a client that initializes the payment
        // const response = await this.client.init(
        //   amount, currency_code, customerDetails
        // )
        // this.createTransaction({
        //   orderId: input.context.resource_id,
        //   grossAmount: ammount,
        //   customer: {
        //     first_name: customerDetails?.customer?.first_name || "Customer",
        //     email: customerDetails?.customer?.email || " "
        //   }
        // })
        // return {
        //   id: response.id,
        //   data: response,
        // }
        return "success";
    }
    async listPaymentMethods({ context }) {
        const { account_holder } = context;
        const accountHolderId = account_holder?.data?.id;
        if (!accountHolderId) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.INVALID_DATA, "Missing account holder ID.");
        }
        // assuming you have a client that lists the payment methods
        const paymentMethods = await this.client.listPaymentMethods({
            customer_id: accountHolderId
        });
        return paymentMethods.map((pm) => ({
            id: pm.id,
            data: pm
        }));
    }
    async refundPayment(input) {
        const externalId = input.data?.id;
        // assuming you have a client that refunds the payment
        const newData = await this.client.refund(externalId, input.amount);
        return {
            data: input.data,
        };
    }
    async retrievePayment(input) {
        const externalId = input.data?.id;
        // assuming you have a client that retrieves the payment
        return await this.client.retrieve(externalId);
    }
    async savePaymentMethod({ context, data }) {
        const accountHolderId = context?.account_holder?.data?.id;
        if (!accountHolderId) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.INVALID_DATA, "Missing account holder ID.");
        }
        // assuming you have a client that saves the payment method
        const paymentMethod = await this.client.savePaymentMethod({
            customer_id: accountHolderId,
            ...data
        });
        return {
            id: paymentMethod.id,
            data: paymentMethod
        };
    }
    async updateAccountHolder({ context, data }) {
        const { account_holder, customer } = context;
        if (!account_holder?.data?.id) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.INVALID_DATA, "Missing account holder ID.");
        }
        // assuming you have a client that updates the account holder
        const providerAccountHolder = await this.client.updateAccountHolder({
            id: account_holder.data.id,
            ...data
        });
        return {
            id: providerAccountHolder.id,
            data: providerAccountHolder
        };
    }
    async updatePayment(input) {
        const { amount, currency_code, context } = input;
        const externalId = input.data?.id;
        // Validate context.customer
        if (!context || !context.customer) {
            throw new Error("Context must include a valid customer.");
        }
        // assuming you have a client that updates the payment
        const response = await this.client.update(externalId, {
            amount,
            currency_code,
            customer: context.customer
        });
        return response;
    }
    static validateOptions(options) {
        if (!options.apiKey) {
            throw new utils_2.MedusaError(utils_2.MedusaError.Types.INVALID_DATA, "API key is required in the provider's options.");
        }
    }
}
PaymentModuleService.LIFE_TIME = awilix_1.Lifetime.SCOPED;
PaymentModuleService.identifier = "midtrans";
exports.default = PaymentModuleService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL3BheW1lbnQvc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLG1DQUFrQztBQUNsQyxzRUFBNkM7QUFDN0MscURBQThFO0FBK0M5RSxxREFBdUQ7QUFvQnZELE1BQU0sb0JBQXFCLFNBQVEsK0JBQWdDO0lBYy9ELFlBQ0UsU0FBK0IsRUFDL0IsT0FBZ0I7UUFHaEIsS0FBSyxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQTtRQUV6Qiw2QkFBNkI7UUFDN0IsaUNBQWlDO1FBQ2pDLHNEQUFzRDtRQUV0RCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUkseUJBQWMsQ0FBQyxJQUFJLENBQUM7WUFDbEMsWUFBWSxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxLQUFLLFlBQVk7WUFDbkQsU0FBUyxFQUFFLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLElBQUksRUFBRTtTQUNqRCxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsT0FBTyxHQUFHLFNBQVMsQ0FBQyxNQUFNLENBQUE7UUFDL0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUE7SUFHekIsQ0FBQztJQUtELEtBQUssQ0FBQyxVQUFVO1FBQ1osT0FBTyxrQ0FBa0MsQ0FBQztJQUM5QyxDQUFDO0lBRUQsS0FBSyxDQUFDLGlCQUFpQixDQUFDLElBQXNCO1FBQzVDLE1BQU0sU0FBUyxHQUFHO1lBQ2hCLG1CQUFtQixFQUFFO2dCQUNuQixRQUFRLEVBQUUsSUFBSSxDQUFDLE9BQU87Z0JBQ3RCLFlBQVksRUFBRSxJQUFJLENBQUMsV0FBVzthQUMvQjtZQUNELGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRO1NBQ2hDLENBQUM7UUFFRixNQUFNLFdBQVcsR0FBRyxNQUFNLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsU0FBUyxDQUFDLENB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