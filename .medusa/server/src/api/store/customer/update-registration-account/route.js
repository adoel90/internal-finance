"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const { email, first_name, last_name, company_name, phone, password } = req.body;
    console.log("Received update registration request with body:", req.body);
    if (!email) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Email is required");
    }
    const customerModuleService = req.scope.resolve(utils_1.Modules.CUSTOMER);
    const authModuleService = req.scope.resolve(utils_1.Modules.AUTH);
    const configModule = req.scope.resolve(utils_1.ContainerRegistrationKeys.CONFIG_MODULE);
    // 1. Get customer_id (from auth context if available, otherwise by email)
    let customerId = req.auth_context?.actor_id;
    let customer;
    if (customerId) {
        customer = await customerModuleService.retrieveCustomer(customerId).catch(() => null);
    }
    if (!customer) {
        const customers = await customerModuleService.listCustomers({ email });
        if (!customers.length) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.NOT_FOUND, "Customer not found with the provided email");
        }
        customer = customers[0];
        customerId = customer.id;
    }
    // 2. Update profile of customer
    await customerModuleService.updateCustomers(customer.id, {
        first_name,
        last_name,
        company_name,
        phone,
        // has_account: true,
    });
    // 3. Check whether have auth identity or not
    const identities = await authModuleService.listAuthIdentities({
        app_metadata: {
            customer_id: customer.id
        }
    });
    let token;
    if (!identities.length) {
        if (!password) {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "Password is required to create a new authentication identity");
        }
        // 4. If not yet -> make email+password auth
        const authData = {
            url: req.url,
            headers: req.headers,
            query: req.query,
            body: { email, password },
            protocol: req.protocol,
        };
        const { success, error, authIdentity } = await authModuleService.register("emailpass", authData);
        if (success && authIdentity) {
            // Link the new identity to the customer
            await authModuleService.updateAuthIdentities({
                id: authIdentity.id,
                app_metadata: { customer_id: customer.id },
            });
            // Generate token
            const { http } = configModule.projectConfig;
            token = (0, utils_1.generateJwtToken)({
                actor_id: customer.id,
                actor_type: "customer",
                auth_identity_id: authIdentity.id,
                app_metadata: {
                    customer_id: customer.id,
                },
            }, {
                secret: http.jwtSecret,
                expiresIn: http.jwtExpiresIn,
            });
        }
        else {
            throw new utils_1.MedusaError(utils_1.MedusaError.Types.UNEXPECTED_STATE, error || "Failed to create auth identity");
        }
    }
    console.log({
        customer: customer,
        customerId: customerId,
        identities: identities
    });
    // 5. Return success + (optional) token
    return res.status(200).json({
        success: true,
        token,
        customer_id: customer.id
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2N1c3RvbWVyL3VwZGF0ZS1yZWdpc3RyYXRpb24tYWNjb3VudC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFDQSxxREFBNkc7QUFZdEcsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUE0QyxFQUM1QyxHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtJQUVoRixPQUFPLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUN4RSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDWCxNQUFNLElBQUksbUJBQVcsQ0FBQyxtQkFBVyxDQUFDLEtBQUssQ0FBQyxZQUFZLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtJQUM1RSxDQUFDO0lBRUQsTUFBTSxxQkFBcUIsR0FBMkIsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3pGLE1BQU0saUJBQWlCLEdBQXVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3RSxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxhQUFhLENBQUMsQ0FBQTtJQUUvRSwwRUFBMEU7SUFDMUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLFlBQVksRUFBRSxRQUFRLENBQUE7SUFDM0MsSUFBSSxRQUFRLENBQUE7SUFFWixJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ2YsUUFBUSxHQUFHLE1BQU0scUJBQXFCLENBQUMsZ0JB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