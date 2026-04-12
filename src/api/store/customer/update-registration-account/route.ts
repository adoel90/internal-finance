import type { AuthenticatedMedusaRequest, MedusaResponse } from "@medusajs/framework/http"
import { Modules, ContainerRegistrationKeys, generateJwtToken, MedusaError } from "@medusajs/framework/utils"
import type { ICustomerModuleService, IAuthModuleService } from "@medusajs/framework/types"

type RequestBody = {
  email: string
  first_name?: string
  last_name?: string
  company_name?: string
  phone?: string
  password?: string
}

export const POST = async (
  req: AuthenticatedMedusaRequest<RequestBody>,
  res: MedusaResponse
) => {
  const { email, first_name, last_name, company_name, phone, password } = req.body

  console.log("Received update registration request with body:", req.body)
  if (!email) {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "Email is required")
  }

  const customerModuleService: ICustomerModuleService = req.scope.resolve(Modules.CUSTOMER)
  const authModuleService: IAuthModuleService = req.scope.resolve(Modules.AUTH)
  const configModule = req.scope.resolve(ContainerRegistrationKeys.CONFIG_MODULE)

  // 1. Get customer_id (from auth context if available, otherwise by email)
  let customerId = req.auth_context?.actor_id
  let customer

  if (customerId) {
    customer = await customerModuleService.retrieveCustomer(customerId).catch(() => null)
  }

  if (!customer) {
    const customers = await customerModuleService.listCustomers({ email })
    if (!customers.length) {
      throw new MedusaError(MedusaError.Types.NOT_FOUND, "Customer not found with the provided email")
    }
    customer = customers[0]
    customerId = customer.id
  }

  // 2. Update profile of customer
  await customerModuleService.updateCustomers(customer.id, {
    first_name,
    last_name,
    company_name,
    phone,
    // has_account: true,
  })

  // 3. Check whether have auth identity or not
  const identities = await authModuleService.listAuthIdentities({
    app_metadata: {
      customer_id: customer.id
    }
  } as any)

  let token: string | undefined

  if (!identities.length) {
    if (!password) {
      throw new MedusaError(MedusaError.Types.INVALID_DATA, "Password is required to create a new authentication identity")
    }

    // 4. If not yet -> make email+password auth
    const authData = {
      url: req.url,
      headers: req.headers,
      query: req.query,
      body: { email, password },
      protocol: req.protocol,
    }

    const { success, error, authIdentity } = await authModuleService.register("emailpass", authData as any)

    if (success && authIdentity) {
      // Link the new identity to the customer
      await authModuleService.updateAuthIdentities({
        id: authIdentity.id,
        app_metadata: { customer_id: customer.id },
      })

      // Generate token
      const { http } = configModule.projectConfig
      token = generateJwtToken(
        {
          actor_id: customer.id,
          actor_type: "customer",
          auth_identity_id: authIdentity.id,
          app_metadata: {
            customer_id: customer.id,
          },
        },
        {
          secret: http.jwtSecret,
          expiresIn: http.jwtExpiresIn,
        }
      )
    } else {
      throw new MedusaError(MedusaError.Types.UNEXPECTED_STATE, error || "Failed to create auth identity")
    }
  }

  console.log({
    customer: customer ,
    customerId: customerId,
    identities: identities
    })

  // 5. Return success + (optional) token
  return res.status(200).json({ 
    success: true, 
    token, 
    customer_id: customer.id 
  })
}
