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
    if (!data.customer_id && data.order_id) {
      const orderModuleService = container.resolve(Modules.ORDER)
      const customerModuleService = container.resolve(Modules.CUSTOMER)
      
      const order = await orderModuleService.retrieveOrder(data.order_id)
      
      if (order.email) {
        const existingCustomers = await customerModuleService.listCustomers({
          email: order.email
        })
        
        if (existingCustomers && existingCustomers.length > 0) {
          data.customer_id = existingCustomers[0].id
        } else {
          const customer = await customerModuleService.createCustomers({
            email: order.email,
            has_account: false,
          })
          data.customer_id = customer.id
        }
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