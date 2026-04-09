"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handleRegisteredDomainEvent;
const create_domain_1 = require("../workflows/create-domain");
const utils_1 = require("@medusajs/framework/utils");
async function handleRegisteredDomainEvent({ event: { data }, container, }) {
    console.log("=== SUBSCRIBER TRIGGERED: registered-domain-event ===");
    // console.log("Event Data Received:", JSON.stringify(data, null, 2));
    try {
        // If there is no customer associated but we have an order,
        // we should create a new customer (or use an existing one by email).
        // if (!data.customer_id && data.order_id) {
        //   const orderModuleService = container.resolve(Modules.ORDER)
        //   const customerModuleService = container.resolve(Modules.CUSTOMER)
        //   const order = await orderModuleService.retrieveOrder(data.order_id)
        //   if (order.email) {
        //     const existingCustomers = await customerModuleService.listCustomers({
        //       email: order.email
        //     })
        //     if (existingCustomers && existingCustomers.length > 0) {
        //       data.customer_id = existingCustomers[0].id
        //       await customerModuleService.updateCustomers(data.customer_id, {
        //         has_account: true,
        //       })
        //     } else {
        //       const customer = await customerModuleService.createCustomers({
        //         email: order.email,
        //         has_account: false,
        //       })
        //       data.customer_id = customer.id
        //     }
        //   }
        // }
        const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
        const authModuleService = container.resolve(utils_1.Modules.AUTH);
        const { email, first_name, last_name } = data;
        // 1. Find existing customers
        const existingCustomers = await customerModuleService.listCustomers({
            email,
        });
        let customer;
        if (!existingCustomers || existingCustomers.length === 0) {
            // 🆕 Create customer WITH account
            const created = await customerModuleService.createCustomers([
                {
                    email,
                    first_name,
                    last_name,
                    has_account: true,
                },
            ]);
            customer = created[0];
            console.log(`✅ Customer created with account: ${customer.id}`);
        }
        else {
            customer = existingCustomers[0];
            console.log(`ℹ️ Customer found: ${customer.id}`);
            // ⚠️ DO NOT update has_account → not allowed
            // Instead, ensure auth identity exists
            // Cast to any to satisfy the expected filter type for listAuthIdentities
            const selector = { user_id: customer.id };
            const identities = await authModuleService.listAuthIdentities(selector);
            if (!identities || identities.length === 0) {
                // 🔐 Register auth identity (this is the REAL "account creation")
                await authModuleService.createAuthIdentities([
                    {
                        user_id: customer.id,
                        provider: "emailpass",
                        entity_id: email,
                        provider_metadata: {
                            email,
                        },
                    },
                ]);
                console.log(`🔐 Auth identity created for customer ${customer.id}`);
            }
            else {
                console.log(`✅ Customer already has auth identity`);
            }
        }
        // We invoke the workflow directly using the container
        // We assume the event `data` matches the expected input of the workflow
        // (e.g., { name, slug, ... })
        const result = await (0, create_domain_1.createDomainWorkflow)(container).run({
            input: data,
        });
        console.log("=== WORKFLOW SUCCESS ===");
        console.log("Workflow Result:", JSON.stringify(result, null, 2));
    }
    catch (error) {
        console.error("=== WORKFLOW FAILED ===");
        console.error("Error details:", error);
    }
}
exports.config = {
    event: "registered-domain-event",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXJlZ2lzdGVyZWQtZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2hhbmRsZS1yZWdpc3RlcmVkLWRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSw4Q0EyR0M7QUE5R0QsOERBQWlFO0FBQ2pFLHFEQUFtRDtBQUVwQyxLQUFLLFVBQVUsMkJBQTJCLENBQUMsRUFDeEQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ2YsU0FBUyxHQUNXO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUNyRSxzRUFBc0U7SUFFdEUsSUFBSSxDQUFDO1FBQ0gsMkRBQTJEO1FBQzNELHFFQUFxRTtRQUNyRSw0Q0FBNEM7UUFDNUMsZ0VBQWdFO1FBQ2hFLHNFQUFzRTtRQUV0RSx3RUFBd0U7UUFFeEUsdUJBQXVCO1FBQ3ZCLDRFQUE0RTtRQUM1RSwyQkFBMkI7UUFDM0IsU0FBUztRQUVULCtEQUErRDtRQUMvRCxtREFBbUQ7UUFDbkQsd0VBQXdFO1FBQ3hFLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsZUFBZTtRQUNmLHVFQUF1RTtRQUN2RSw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLFdBQVc7UUFDWCx1Q0FBdUM7UUFDdkMsUUFBUTtRQUNSLE1BQU07UUFDTixJQUFJO1FBSUgsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRSxNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXpELE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxHQUFHLElBQUksQ0FBQTtRQUU3Qyw2QkFBNkI7UUFDN0IsTUFBTSxpQkFBaUIsR0FBRyxNQUFNLHFCQUFxQixDQUFDLGFB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