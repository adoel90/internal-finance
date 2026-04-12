import type {
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/framework"
import { createDomainWorkflow } from "../workflows/create-domain"
import { Modules } from "@medusajs/framework/utils"

export default async function handleRegisteredDomainEvent({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  console.log("=== SUBSCRIBER TRIGGERED: registered-domain-event ===");
  // console.log("Event Data Received:", JSON.stringify(data, null, 2));

  try {
    // If there is no customer associated but we have an order,
    // we should create a new customer (or use an existing one by email).
    // if (!data.customer_id && data.order_id) {
    //   const orderModuleService = container.resolve(Modules.ORDER)
    //   const customerModuleService = container.resolve(Modules.CUSTOMER)
      
    //   const order = await orderModuleService.retrieveOrder(data.order_id)
      
    //   if (order.email) {
    //     const existingCustomers = await customerModuleService.listCustomers({
    //       email: order.email
    //     })
        
    //     if (existingCustomers && existingCustomers.length > 0) {
    //       data.customer_id = existingCustomers[0].id
    //       await customerModuleService.updateCustomers(data.customer_id, {
    //         has_account: true,
    //       })
    //     } else {
    //       const customer = await customerModuleService.createCustomers({
    //         email: order.email,
    //         has_account: false,
    //       })
    //       data.customer_id = customer.id
    //     }
    //   }
    // }



     const customerModuleService = container.resolve(Modules.CUSTOMER)
  const authModuleService = container.resolve(Modules.AUTH)

  const { email, first_name, last_name, customer_id } = data

  console.log("DATA PAYLOAD REGISTRED DOMAIN : ", data);

  // 1. Find existing customers
  let existingCustomers: any[] = []

  if (customer_id) {
    // If a specific customer_id was provided, retrieve that customer directly
    const cust = await customerModuleService
      .retrieveCustomer(customer_id)
      .catch(() => null)

    if (cust) {
      existingCustomers = [cust]
    }
  } else if (email) {
    // Otherwise, try to find customers by email
    existingCustomers = await customerModuleService.listCustomers({
      email,
    })
  }

  let customer

  if (!existingCustomers || existingCustomers.length === 0) {
    // 🆕 Create customer WITH account
    const created = await customerModuleService.createCustomers([
      {
        email,
        first_name,
        last_name,
        has_account: true,
      },
    ])

    customer = created[0]

    console.log(`✅ Customer created with account: ${customer.id}`)
  } else {
    customer = existingCustomers[0]

    console.log(`ℹ️ Customer found: ${customer.id}`)

    // ⚠️ DO NOT update has_account → not allowed
    // Instead, ensure auth identity exists

    // Cast to any to satisfy the expected filter type for listAuthIdentities
    // const selector = { user_id: customer.id } as any
    const selector = {
      app_metadata: {
        customer_id: customer.id,
      },
    }

    const identities = await authModuleService.listAuthIdentities(selector)

    if (!identities || identities.length === 0) {

      // 🔐 Register auth identity (this is the REAL "account creation")
      await authModuleService.createAuthIdentities([
        {
          customer_id: customer.id,
          provider: "emailpass",
          entity_id: email,
          provider_metadata: {
            email,
          },
        },
      ] as any)

      console.log(`🔐 Auth identity created for customer ${customer.id}`)
    } else {
      console.log(`✅ Customer already has auth identity`)
    }
  }

    // We invoke the workflow directly using the container
    // We assume the event `data` matches the expected input of the workflow
    // (e.g., { name, slug, ... })
    const result = await createDomainWorkflow(container).run({
      input: data,
    })
    console.log("=== WORKFLOW SUCCESS ===");
    console.log("Workflow Result:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("=== WORKFLOW FAILED ===");
    console.error("Error details:", error);
  }
}

export const config: SubscriberConfig = {
  event: "registered-domain-event",
}