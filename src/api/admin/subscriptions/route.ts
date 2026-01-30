import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import createSubscriptionWorkflow from "../../../workflows/create-subscription"
import { BILLING_MODULE } from "../../../modules/billing"
import BillingModuleService from "../../../modules/billing/service"

export const GET = async (req: MedusaRequest, res: MedusaResponse) => {
  const billingModuleService: BillingModuleService = req.scope.resolve(BILLING_MODULE)
  const subscriptions = await billingModuleService.listSubscriptions()
  res.json({ subscriptions })
}

interface CreateSubscriptionBody {
  organization_id: string
  plan_id: string
  current_period_start: string | Date
  current_period_end: string | Date
  started_at?: string | Date
}

export const POST = async (req: MedusaRequest, res: MedusaResponse) => {
  const {
    organization_id,
    plan_id,
    current_period_start,
    current_period_end,
    started_at
  } = req.body as CreateSubscriptionBody

  const { result, errors } = await createSubscriptionWorkflow.run({
    input: {
        organization_id,
        plan_id,
        current_period_start: new Date(current_period_start),
        current_period_end: new Date(current_period_end),
        started_at: started_at ? new Date(started_at) : undefined
    }
  })

  if (Array.isArray(errors) && errors.length > 0) {
    throw errors[0].error
  }

  res.json(result)
}
