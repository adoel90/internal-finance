import { Lifetime } from "awilix";
import midtransClient from "midtrans-client";
import { AbstractPaymentProvider, BigNumber } from "@medusajs/framework/utils"
import { Logger } from "@medusajs/framework/types"
import {
  AuthorizePaymentInput,
  AuthorizePaymentOutput,
  PaymentSessionStatus,
  PaymentProviderContext,
  
  CancelPaymentInput,
  CancelPaymentOutput,

  CapturePaymentInput,
  CapturePaymentOutput,

  CreateAccountHolderInput,
  DeleteAccountHolderInput,

  DeletePaymentInput,
  DeletePaymentOutput,

  GetPaymentStatusInput,
  GetPaymentStatusOutput,
  
  ProviderWebhookPayload,
  WebhookActionResult,

  InitiatePaymentInput,
  InitiatePaymentOutput,

  ListPaymentMethodsInput,


  RefundPaymentInput,
  RefundPaymentOutput,

    RetrievePaymentInput,
  RetrievePaymentOutput,

  SavePaymentMethodInput,

  UpdateAccountHolderInput,

    UpdatePaymentInput,
  UpdatePaymentOutput,
} from "@medusajs/framework/types"


import { MedusaError } from "@medusajs/framework/utils"

type Options = {
  apiKey: string
}

type InjectedDependencies = {
  logger: Logger
}

type TransactionInput = {
  orderId: string;
  grossAmount: number | BigNumber;
  customer: {
    first_name: string;
    email: string;
    phone: string;
  };
};

class PaymentModuleService extends AbstractPaymentProvider<Options>  {


    protected logger_: Logger
    protected options_: Options
    // assuming you're initializing a client
    protected client

    static LIFE_TIME = Lifetime.SCOPED;  
    private snap: midtransClient.Snap;

    static identifier = "midtrans"


    constructor(
      container: InjectedDependencies, 
      options: Options
    ) {

      super(container, options)

      //  super(container, options)
      //   this.apiKey = options.apiKey
      //   this.isProduction = options.isProduction ?? false

      this.snap = new midtransClient.Snap({
        isProduction: process.env.NODE_ENV === 'production',
        serverKey: process.env.MIDTRANS_SERVER_KEY || "",
      });

      this.logger_ = container.logger
      this.options_ = options

      
    }



    
    async getMessage(): Promise<string> {
        return "Hello from PaymentModuleService!";
    }
  
    async createTransaction(data: TransactionInput) {
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

    async authorizePayment(
      input: AuthorizePaymentInput
    ): Promise<AuthorizePaymentOutput> {

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
        const authorized = true

        if (!authorized) {
          return {
            status: "error",
            data: { message: "Authorization failed" },
          }
        }

        return {
          status: "authorized",
          data: {
            transaction_id: "trx_123",
            fraud_status: "accept",
          },
        }
      } catch (err) {
        throw new MedusaError(
          MedusaError.Types.UNEXPECTED_STATE,
          `Midtrans authorization failed: ${err instanceof Error ? err.message : String(err)}`
        )
      }
    }

  
    async cancelPayment(
      input: CancelPaymentInput
    ): Promise<CancelPaymentOutput> {
      const externalId = input.data?.id

      // assuming you have a client that cancels the payment
      // const paymentData = await this.client.cancelPayment(externalId)
      // return { data: paymentData }
            return {
              // data: paymentData,
              data: {
                result: "canceled"
              }
            }
    }


    async capturePayment(
        input: CapturePaymentInput
      ): Promise<CapturePaymentOutput> {
        
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
        const captured = true

        if (!captured) {
          return {
            // status: "error",
            data: { message: "Captured failed" },
          }
        }

        return {
          // status: "captured",
          data: { message: "Captured Success" },
          
        }
      } catch (err) {
        throw new MedusaError(
          MedusaError.Types.UNEXPECTED_STATE,
          `Midtrans captured failed: ${err instanceof Error ? err.message : String(err)}`
        )
      }
    }

    async createAccountHolder({ context, data }: CreateAccountHolderInput) {
        const { account_holder, customer } = context

        if (account_holder?.data?.id) {
          return { id: account_holder.data.id as string }
        }

        if (!customer) {
          throw new MedusaError(
            MedusaError.Types.INVALID_DATA,
            "Missing customer data."
          )
        }

        // assuming you have a client that creates the account holder
        const providerAccountHolder = await this.client.createAccountHolder({
          email: customer.email,
        ...data
        })

        return {
          id: providerAccountHolder.id,
          data: providerAccountHolder as unknown as Record<string, unknown>
        }
      }


      async deleteAccountHolder({ context }: DeleteAccountHolderInput) {
        const { account_holder } = context
        const accountHolderId = account_holder?.data?.id as string | undefined
        if (!accountHolderId) {
          throw new MedusaError(
            MedusaError.Types.INVALID_DATA,
            "Missing account holder ID."
          )
        }

        // assuming you have a client that deletes the account holder
        await this.client.deleteAccountHolder({
          id: accountHolderId
        })

        return {}
      }

    async deletePayment(
        input: DeletePaymentInput
      ): Promise<DeletePaymentOutput> {
        const externalId = input.data?.id

        // assuming you have a client that cancels the payment
        await this.client.cancelPayment(externalId)
        return {
          data: input.data
        }
      }
    

  async getPaymentStatus(
    input: GetPaymentStatusInput
  ): Promise<GetPaymentStatusOutput> {
    const externalId = input.data?.id

    // assuming you have a client that retrieves the payment status
    const status = await this.client.getStatus(externalId)

    switch (status) {
      case "requires_capture":
          return {status: "authorized"}
        case "success":
          return {status: "captured"}
        case "canceled":
          return {status: "canceled"}
        default:
          return {status: "pending"}
     }
  }


async getWebhookActionAndData(
    payload: ProviderWebhookPayload["payload"]
  ): Promise<WebhookActionResult> {
    const {
      data,
      rawData,
      headers
    } = payload

    try {
      switch(data.event_type) {
        case "authorized_amount":
          return {
            action: "authorized",
            data: {
              // assuming the session_id is stored in the metadata of the payment
              // in the third-party provider
              session_id: (data.metadata as Record<string, any>).session_id,
              amount: new BigNumber(data.amount as number)
            }
          }
        case "success":
          return {
            action: "captured",
            data: {
              // assuming the session_id is stored in the metadata of the payment
              // in the third-party provider
              session_id: (data.metadata as Record<string, any>).session_id,
              amount: new BigNumber(data.amount as number)
            }
          }
        default:
          return {
            action: "not_supported",
            data: {
              session_id: "",
              amount: new BigNumber(0)
            }
          }
      }
    } catch (e) {
      return {
        action: "failed",
        data: {
          // assuming the session_id is stored in the metadata of the payment
          // in the third-party provider
          session_id: (data.metadata as Record<string, any>).session_id,
          amount: new BigNumber(data.amount as number)
        }
      }
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

      async initiatePayment(
        input: InitiatePaymentInput
      ): Promise<InitiatePaymentOutput> {
        const {
          amount,
          currency_code,
          context: customerDetails
        } = input


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

        return "success" as unknown as InitiatePaymentOutput
      }

        async listPaymentMethods({ context }: ListPaymentMethodsInput) {
    const { account_holder } = context
    const accountHolderId = account_holder?.data?.id as string | undefined

    if (!accountHolderId) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Missing account holder ID."
      )
    }

   // assuming you have a client that lists the payment methods
   const paymentMethods = await this.client.listPaymentMethods({
     customer_id: accountHolderId
   })

   return paymentMethods.map((pm) => ({
     id: pm.id,
     data: pm as unknown as Record<string, unknown>
   }))
 }


 async refundPayment(
    input: RefundPaymentInput
  ): Promise<RefundPaymentOutput> {
    const externalId = input.data?.id

    // assuming you have a client that refunds the payment
    const newData = await this.client.refund(
        externalId,
        input.amount
      )

    return {
      data: input.data,
    }
  }

  async retrievePayment(
    input: RetrievePaymentInput
  ): Promise<RetrievePaymentOutput> {
    const externalId = input.data?.id

    // assuming you have a client that retrieves the payment
    return await this.client.retrieve(externalId)
  }


async savePaymentMethod({ context, data }: SavePaymentMethodInput) {   
    const accountHolderId = context?.account_holder?.data?.id as
      | string
      | undefined

    if (!accountHolderId) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Missing account holder ID."
      )
    }

   // assuming you have a client that saves the payment method
   const paymentMethod = await this.client.savePaymentMethod({
     customer_id: accountHolderId,
     ...data
   })

  return {
    id: paymentMethod.id,
    data: paymentMethod as unknown as Record<string, unknown>
  }
 }


  async updateAccountHolder({ context, data }: UpdateAccountHolderInput) {
    const { account_holder, customer } = context

    if (!account_holder?.data?.id) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "Missing account holder ID."
      )
    }

    // assuming you have a client that updates the account holder
    const providerAccountHolder = await this.client.updateAccountHolder({
        id: account_holder.data.id,
      ...data
      })

      return {
        id: providerAccountHolder.id,
        data: providerAccountHolder as unknown as Record<string, unknown>
      }
  }

   async updatePayment(
    input: UpdatePaymentInput
  ): Promise<UpdatePaymentOutput> {
    const { amount, currency_code, context } = input
    const externalId = input.data?.id

    // Validate context.customer
    if (!context || !context.customer) {
      throw new Error("Context must include a valid customer.");
    }

    // assuming you have a client that updates the payment
    const response = await this.client.update(
      externalId,
        {
          amount,
          currency_code,
          customer: context.customer
        }
      )

    return response
  }

    static validateOptions(options: Record<any, any>) {
    if (!options.apiKey) {
      throw new MedusaError(
        MedusaError.Types.INVALID_DATA,
        "API key is required in the provider's options."
      )
    }
  }

}




export default PaymentModuleService