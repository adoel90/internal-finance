import type {
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/framework"
import { createDomainWorkflow } from "../workflows/create-domain"

export default async function handleRegisteredDomainEvent({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  // We invoke the workflow directly using the container
  // We assume the event `data` matches the expected input of the workflow
  // (e.g., { name, slug, ... })
  await createDomainWorkflow(container).run({
    input: data,
  })
}

export const config: SubscriberConfig = {
  event: "registered-domain-event",
}