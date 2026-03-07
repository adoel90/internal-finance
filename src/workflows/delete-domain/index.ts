import {
  createStep,
  StepResponse,
  WorkflowResponse,
  createWorkflow,
} from "@medusajs/framework/workflows-sdk"
import { DOMAIN_MODULE } from "../../modules/domain"

export const deleteDomainStep = createStep(
  "delete-domain-step",
  async (id: string, { container }) => {
    const domainModuleService: any = container.resolve(DOMAIN_MODULE)
    const domain = await domainModuleService.retrieveDomain(id).catch(() => null)
    if (domain) {
      await domainModuleService.deleteDomains(id)
    }
    return new StepResponse(id, domain)
  },
  async (domain, { container }) => {
    if (domain) {
      const domainModuleService: any = container.resolve(DOMAIN_MODULE)
      await domainModuleService.createDomains(domain)
    }
  }
)

export const deleteDomainWorkflow = createWorkflow(
  "delete-domain",
  (id: string) => {
    const deletedId = deleteDomainStep(id)
    return new WorkflowResponse(deletedId)
  }
)