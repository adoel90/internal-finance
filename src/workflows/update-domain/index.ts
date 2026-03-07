import {
  createStep,
  StepResponse,
  WorkflowResponse,
  createWorkflow,
} from "@medusajs/framework/workflows-sdk"
import { DOMAIN_MODULE } from "../../modules/domain"

export type UpdateDomainInput = {
  id: string
  name?: string
  slug?: string
  is_active?: boolean
  is_premium?: boolean
  metadata?: Record<string, unknown>
}

export const updateDomainStep = createStep(
  "update-domain-step",
  async (input: UpdateDomainInput, { container }) => {
    const domainModuleService: any = container.resolve(DOMAIN_MODULE)
    const originalDomain = await domainModuleService.retrieveDomain(input.id)
    const updatedDomain = await domainModuleService.updateDomains(input)
    return new StepResponse(updatedDomain, originalDomain)
  },
  async (originalDomain, { container }) => {
    if (originalDomain) {
        const domainModuleService: any = container.resolve(DOMAIN_MODULE)
        await domainModuleService.updateDomains(originalDomain)
    }
  }
)

export const updateDomainWorkflow = createWorkflow(
  "update-domain",
  (input: UpdateDomainInput) => {
    const domain = updateDomainStep(input)
    return new WorkflowResponse(domain)
  }
)
