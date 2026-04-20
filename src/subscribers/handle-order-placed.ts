import { SubscriberArgs, type SubscriberConfig } from "@medusajs/framework"
import { Modules } from "@medusajs/framework/utils"
import { CreateDomainInput } from "../workflows/create-domain"
import { sendOrderConfirmationWorkflow } from "../workflows/send-order-confirmation"

export default async function orderPlacedHandler({
  event: { data },
  container,
}: SubscriberArgs<{ id: string }>) {
  const logger = container.resolve("logger")

  console.log("=== SUBSCRIBER TRIGGERED: order.placed ===")
  console.log("Payload data order.placed : ", data)

  logger.info(`Processing order.placed event for order ID: ${data.id}`)

  // 1. Resolve the Order Module Service
  const orderModuleService = container.resolve(Modules.ORDER)

  // 2. Retrieve the full order details, including line items.
  const order = await orderModuleService.retrieveOrder(data.id, {
    relations: ["items"]
  })

  // 3. Extract Domain details
  // Here we assume the domain metadata is attached to the order's metadata.
  // E.g., { domain_name: "example.com", domain_slug: "example-com" }
  const domainName = order.metadata?.domain_name as string | undefined
  const domainSlug = order.metadata?.domain_slug as string | undefined

  if (!domainName || !domainSlug) {
    logger.info(`Skipping domain registration: Order ${data.id} does not contain domain metadata.`)
    return
  }

  logger.info(`Found domain details on order ${data.id}: ${domainName}`)

  // 4. Construct the payload for the CreateDomainInput
  // We assume the first line item in the order is the one related to this domain registration.
  const firstItem = order.items?.[0]

  const domainPayload: CreateDomainInput = {
    name: domainName,
    slug: domainSlug,
    order_id: data.id,
    customer_id: order.customer_id,
    product_id: firstItem?.product_id,
    variant_id: firstItem?.variant_id,
  }

  // 5. Resolve the Event Bus to emit your custom domain event
  const eventBus = container.resolve(Modules.EVENT_BUS)

  // 6. Emit the custom event
  await eventBus.emit({
    name: "registered-domain-event",
    data: domainPayload
  })

  logger.info(`Successfully emitted registered-domain-event for order ${data.id}`)



  /**
   * 
   * 
   * * OPTIONAL: Trigger the sendOrderConfirmationWorkflow to send an email confirmation to the customer.
   *   - This assumes that the order.placed event does not already trigger an email, or you want to send a custom email.
   *   - If your Medusa setup already sends an order confirmation email on order.placed, you can skip this step to avoid duplicate emails.
   */
  await sendOrderConfirmationWorkflow(container)
    .run({
      input: {
        id: data.id,
      },
    })
   
}

export const config: SubscriberConfig = {
  event: `order.placed`,
}