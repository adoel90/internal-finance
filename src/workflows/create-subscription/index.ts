import {
  createWorkflow,
  WorkflowResponse
} from "@medusajs/framework/workflows-sdk"
import { emitEventStep } from "@medusajs/medusa/core-flows"
import {
  createSubscriptionStep,
  CreateSubscriptionStepInput
} from "./steps/create-subscription"

const createSubscriptionWorkflow = createWorkflow(
  "create-subscription",
  (input: CreateSubscriptionStepInput) => {

    const { subscription } = createSubscriptionStep(input)

    emitEventStep({
        eventName: "subscription.created",
        data: subscription
    })

    return new WorkflowResponse({
        subscription
    })
  }
)

export default createSubscriptionWorkflow
