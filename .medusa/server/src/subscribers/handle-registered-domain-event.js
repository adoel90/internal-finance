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
        const { email, first_name, last_name, customer_id } = data;
        // 1. Find existing customers
        let existingCustomers = [];
        if (customer_id) {
            // If a specific customer_id was provided, retrieve that customer directly
            const cust = await customerModuleService
                .retrieveCustomer(customer_id)
                .catch(() => null);
            if (cust) {
                existingCustomers = [cust];
            }
        }
        else if (email) {
            // Otherwise, try to find customers by email
            existingCustomers = await customerModuleService.listCustomers({
                email,
            });
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXJlZ2lzdGVyZWQtZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2hhbmRsZS1yZWdpc3RlcmVkLWRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSw4Q0F5SEM7QUE1SEQsOERBQWlFO0FBQ2pFLHFEQUFtRDtBQUVwQyxLQUFLLFVBQVUsMkJBQTJCLENBQUMsRUFDeEQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ2YsU0FBUyxHQUNXO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUNyRSxzRUFBc0U7SUFFdEUsSUFBSSxDQUFDO1FBQ0gsMkRBQTJEO1FBQzNELHFFQUFxRTtRQUNyRSw0Q0FBNEM7UUFDNUMsZ0VBQWdFO1FBQ2hFLHNFQUFzRTtRQUV0RSx3RUFBd0U7UUFFeEUsdUJBQXVCO1FBQ3ZCLDRFQUE0RTtRQUM1RSwyQkFBMkI7UUFDM0IsU0FBUztRQUVULCtEQUErRDtRQUMvRCxtREFBbUQ7UUFDbkQsd0VBQXdFO1FBQ3hFLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsZUFBZTtRQUNmLHVFQUF1RTtRQUN2RSw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLFdBQVc7UUFDWCx1Q0FBdUM7UUFDdkMsUUFBUTtRQUNSLE1BQU07UUFDTixJQUFJO1FBSUgsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRSxNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXpELE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFFMUQsNkJBQTZCO1FBQzdCLElBQUksaUJBQWlCLEdBQVUsRUFBRSxDQUFB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