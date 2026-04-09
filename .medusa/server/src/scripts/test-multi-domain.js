"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_domain_1 = require("../workflows/create-domain");
const utils_1 = require("@medusajs/framework/utils");
async function default_1({ container }) {
    console.log("--- Testing Multiple Domain Registrations per Customer ---");
    try {
        const customerId = "cus_01KMPNRH82BVHJ856NVN6RSCDC"; // using a dummy ID, or I should create a dummy customer if needed
        // Let's create a dummy customer first using customer module service.
        const customerModuleService = container.resolve(utils_1.Modules.CUSTOMER);
        // Create a customer
        const customer = await customerModuleService.createCustomers({
            email: `test-multi-domain-${Date.now()}@example.com`,
            first_name: "Test",
            last_name: "Multi-Domain",
        });
        console.log("Created test customer:", customer.id);
        // Register Domain 1
        const input1 = {
            name: "multi-test-domain-1-" + Date.now() + ".com",
            slug: "multi-test-domain-1-" + Date.now() + "-com",
            customer_id: customer.id,
        };
        console.log("Registering domain 1:", input1.name);
        const { result: domain1 } = await (0, create_domain_1.createDomainWorkflow)(container).run({ input: input1 });
        console.log("Success Domain 1 ID:", domain1.id);
        // Register Domain 2
        const input2 = {
            name: "multi-test-domain-2-" + Date.now() + ".com",
            slug: "multi-test-domain-2-" + Date.now() + "-com",
            customer_id: customer.id,
        };
        console.log("Registering domain 2:", input2.name);
        const { result: domain2 } = await (0, create_domain_1.createDomainWorkflow)(container).run({ input: input2 });
        console.log("Success Domain 2 ID:", domain2.id);
        // Query via GraphQL to see what the customer holds
        const query = container.resolve("query");
        const { data: queryResult } = await query.graph({
            entity: "customer",
            fields: ["id", "email", "domains.*"],
            filters: {
                id: customer.id
            }
        });
        const queriedCustomer = queryResult[0];
        console.log("\n--- Query Result ---");
        console.log(`Customer ${queriedCustomer.id} has domains:`);
        console.log(JSON.stringify(queriedCustomer.domains, null, 2));
        console.log("\nIs customer.domains an array?", Array.isArray(queriedCustomer.domains));
        console.log("Number of domains:", Array.isArray(queriedCustomer.domains) ? queriedCustomer.domains.length : (queriedCustomer.domains ? 1 : 0));
    }
    catch (e) {
        console.error("❌ Failed to run multiple domain registration test:", e.message);
        console.error(e.stack);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1tdWx0aS1kb21haW4uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc2NyaXB0cy90ZXN0LW11bHRpLWRvbWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLDRCQXlEQztBQTVERCw4REFBaUU7QUFDakUscURBQW1EO0FBRXBDLEtBQUssb0JBQVcsRUFBRSxTQUFTLEVBQVk7SUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0REFBNEQsQ0FBQyxDQUFBO0lBQ3pFLElBQUksQ0FBQztRQUNILE1BQU0sVUFBVSxHQUFHLGdDQUFnQyxDQUFBLENBQUMsa0VBQWtFO1FBQ3RILHFFQUFxRTtRQUNyRSxNQUFNLHFCQUFxQixHQUFHLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBRWpFLG9CQUFvQjtRQUNwQixNQUFNLFFBQVEsR0FBRyxNQUFNLHFCQUFxQixDQUFDLGVBQWUsQ0FBQztZQUMzRCxLQUFLLEVBQUUscUJBQXFCLElBQUksQ0FBQyxHQUFHLEVBQUUsY0FBYztZQUNwRCxVQUFVLEVBQUUsTUFBTTtZQUNsQixTQUFTLEVBQUUsY0FBYztTQUMxQixDQUFDLENBQUE7UUFDRixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixFQUFFLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtRQUVsRCxvQkFBb0I7UUFDcEIsTUFBTSxNQUFNLEdBQUc7WUFDYixJQUFJLEVBQUUsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU07WUFDbEQsSUFBSSxFQUFFLHNCQUFzQixHQUFHLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxNQUFNO1lBQ2xELFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRTtTQUN6QixDQUFBO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1QkFBdUIsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDakQsTUFBTSxFQUFFLE1BQU0s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