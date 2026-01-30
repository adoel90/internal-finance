import {
  createStep,
  StepResponse
} from "@medusajs/framework/workflows-sdk"
import { BILLING_MODULE } from "../../../modules/billing"
import BillingModuleService from "../../../modules/billing/service"

export type CreateSubscriptionStepInput = {
  organization_id: string
  plan_id: string
  current_period_start: Date
  current_period_end: Date
  started_at: Date
}

export const createSubscriptionStep = createStep(
  "create-subscription-step",
  async (data: CreateSubscriptionStepInput, { container }) => {
    const billingModuleService: BillingModuleService =
      container.resolve(BILLING_MODULE)

    const subscription = await billingModuleService.createSubscriptions(data)

    return new StepResponse({
      subscription: subscription
    }, {
        subscription: subscription
    })
  },
  async ({ subscription }, { container }) => {
    if (!subscription) {
      return
    }
    const billingModuleService: BillingModuleService =
      container.resolve(BILLING_MODULE)

    await billingModuleService.deleteSubscriptions(
        subscription.id
    )
  }
)
