import type {
  SubscriberArgs,
  SubscriberConfig,
} from "@medusajs/framework"
import { createDomainWorkflow } from "../workflows/create-domain"

export default async function handleRegisteredDomainEvent({
  event: { data },
  container,
}: SubscriberArgs<any>) {
  console.log("=== SUBSCRIBER TRIGGERED: registered-domain-event ===");
  console.log("Event Data Received:", JSON.stringify(data, null, 2));

  try {
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