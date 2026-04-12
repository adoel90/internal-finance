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
        console.log("DATA PAYLOAD REGISTRED DOMAIN : ", data);
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
            // const selector = { user_id: customer.id } as any
            const selector = {
                app_metadata: {
                    customer_id: customer.id,
                },
            };
            const identities = await authModuleService.listAuthIdentities(selector);
            if (!identities || identities.length === 0) {
                // 🔐 Register auth identity (this is the REAL "account creation")
                await authModuleService.createAuthIdentities([
                    {
                        customer_id: customer.id,
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXJlZ2lzdGVyZWQtZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2hhbmRsZS1yZWdpc3RlcmVkLWRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSw4Q0FrSUM7QUFySUQsOERBQWlFO0FBQ2pFLHFEQUFtRDtBQUVwQyxLQUFLLFVBQVUsMkJBQTJCLENBQUMsRUFDeEQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ2YsU0FBUyxHQUNXO0lBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsdURBQXVELENBQUMsQ0FBQztJQUNyRSxzRUFBc0U7SUFFdEUsSUFBSSxDQUFDO1FBQ0gsMkRBQTJEO1FBQzNELHFFQUFxRTtRQUNyRSw0Q0FBNEM7UUFDNUMsZ0VBQWdFO1FBQ2hFLHNFQUFzRTtRQUV0RSx3RUFBd0U7UUFFeEUsdUJBQXVCO1FBQ3ZCLDRFQUE0RTtRQUM1RSwyQkFBMkI7UUFDM0IsU0FBUztRQUVULCtEQUErRDtRQUMvRCxtREFBbUQ7UUFDbkQsd0VBQXdFO1FBQ3hFLDZCQUE2QjtRQUM3QixXQUFXO1FBQ1gsZUFBZTtRQUNmLHVFQUF1RTtRQUN2RSw4QkFBOEI7UUFDOUIsOEJBQThCO1FBQzlCLFdBQVc7UUFDWCx1Q0FBdUM7UUFDdkMsUUFBUTtRQUNSLE1BQU07UUFDTixJQUFJO1FBSUgsTUFBTSxxQkFBcUIsR0FBRyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUNwRSxNQUFNLGlCQUFpQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLElBQUksQ0FBQyxDQUFBO1FBRXpELE1BQU0sRUFBRSxLQUFLLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsR0FBRyxJQUFJLENBQUE7UUFFMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsRUFBRSxJQUFJLENB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