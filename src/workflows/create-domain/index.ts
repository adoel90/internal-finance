import {
  createStep,
  StepResponse,
  WorkflowResponse,
  createWorkflow,
  transform,
} from "@medusajs/framework/workflows-sdk"
import { DOMAIN_MODULE } from "../../modules/domain"
import { Modules, ContainerRegistrationKeys } from "@medusajs/framework/utils"

export type CreateDomainInput = {
  name: string
  slug: string
  is_active?: boolean
  is_premium?: boolean
  metadata?: Record<string, unknown>
  customer_id?: string
  product_id?: string
  variant_id?: string
  order_id?: string
}

export const createDomainStep = createStep(
  "create-domain-step",
  async (input: CreateDomainInput, { container }) => {
    const domainModuleService: any = container.resolve(DOMAIN_MODULE)
    const domain = await domainModuleService.createDomains({
      name: input.name,
      slug: input.slug,
      is_active: input.is_active,
      is_premium: input.is_premium,
      metadata: input.metadata || {},
    })
    return new StepResponse(domain, domain.id)
  },

  async (id: string, { container }) => {
    const domainModuleService: any = container.resolve(DOMAIN_MODULE)
    await domainModuleService.deleteDomains(id)
  }
)

export const linkDomainToCustomerStep = createStep(
  "link-domain-to-customer-step",
  async (input: { domain_id: string; customer_id?: string }, { container }) => {
    if (!input.customer_id) {
      return new StepResponse(undefined, null)
    }

    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.create({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.CUSTOMER]: {
        customer_id: input.customer_id,
      },
    })
    
    return new StepResponse(undefined, input)
  },
  async (input, { container }) => {
    if (!input) return
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.dismiss({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.CUSTOMER]: {
        customer_id: input.customer_id,
      },
    })
  }
)

export const linkDomainToProductStep = createStep(
  "link-domain-to-product-step",
  async (input: { domain_id: string; product_id?: string }, { container }) => {
    if (!input.product_id) {
      return new StepResponse(undefined, null)
    }

    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.create({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.PRODUCT]: {
        product_id: input.product_id,
      },
    })
    
    return new StepResponse(undefined, input)
  },
  async (input, { container }) => {
    if (!input) return
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.dismiss({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.PRODUCT]: {
        product_id: input.product_id,
      },
    })
  }
)

export const linkDomainToVariantStep = createStep(
  "link-domain-to-variant-step",
  async (input: { domain_id: string; variant_id?: string }, { container }) => {
    if (!input.variant_id) {
      return new StepResponse(undefined, null)
    }

    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.create({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.PRODUCT]: {
        product_variant_id: input.variant_id,
      },
    })
    
    return new StepResponse(undefined, input)
  },
  async (input, { container }) => {
    if (!input) return
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.dismiss({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.PRODUCT]: {
        product_variant_id: input.variant_id,
      },
    })
  }
)

export const linkDomainToOrderStep = createStep(
  "link-domain-to-order-step",
  async (input: { domain_id: string; order_id?: string }, { container }) => {
    if (!input.order_id) {
      return new StepResponse(undefined, null)
    }

    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.create({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.ORDER]: {
        order_id: input.order_id,
      },
    })
    
    return new StepResponse(undefined, input)
  },
  async (input, { container }) => {
    if (!input) return
    const remoteLink = container.resolve(ContainerRegistrationKeys.REMOTE_LINK)
    
    await remoteLink.dismiss({
      [DOMAIN_MODULE]: {
        domain_id: input.domain_id,
      },
      [Modules.ORDER]: {
        order_id: input.order_id,
      },
    })
  }
)

export const createDomainWorkflow = createWorkflow(
  "create-domain",
  (input: CreateDomainInput) => {
    const domain = createDomainStep(input)
    
    linkDomainToCustomerStep(
      transform({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        customer_id: data.input.customer_id
      }))
    )

    linkDomainToProductStep(
      transform({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        product_id: data.input.product_id
      }))
    )

    linkDomainToVariantStep(
      transform({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        variant_id: data.input.variant_id
      }))
    )

    linkDomainToOrderStep(
      transform({ domain, input }, (data) => ({
        domain_id: data.domain.id,
        order_id: data.input.order_id
      }))
    )

    return new WorkflowResponse(domain)
  }
)