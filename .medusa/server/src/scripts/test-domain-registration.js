"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;
const create_domain_1 = require("../workflows/create-domain");
async function default_1({ container }) {
    console.log("--- Testing Domain Registration ---");
    try {
        const input = {
            name: "test-domain-" + Date.now() + ".com",
            slug: "test-domain-" + Date.now() + "-com",
            is_active: true,
            is_premium: false,
        };
        console.log("Attempting to register domain:", input.name);
        const { result } = await (0, create_domain_1.createDomainWorkflow)(container).run({
            input: input,
        });
        console.log("Successfully registered domain!");
        console.log(JSON.stringify(result, null, 2));
        console.log("\nAttempting to register the SAME domain again (Should Fail):");
        try {
            await (0, create_domain_1.createDomainWorkflow)(container).run({
                input: input,
            });
            console.error("❌ ERROR: Domain was registered twice! The bug is still present.");
        }
        catch (duplicateError) {
            console.log("✅ SUCCESS: Duplicate domain registration blocked as expected.");
            console.log("Error message received:", duplicateError.message);
        }
    }
    catch (e) {
        console.error("❌ Failed to run domain registration test:", e.message);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdC1kb21haW4tcmVnaXN0cmF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3NjcmlwdHMvdGVzdC1kb21haW4tcmVnaXN0cmF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBR0EsNEJBaUNDO0FBbkNELDhEQUFpRTtBQUVsRCxLQUFLLG9CQUFXLEVBQUUsU0FBUyxFQUFZO0lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQXFDLENBQUMsQ0FBQTtJQUNsRCxJQUFJLENBQUM7UUFDSCxNQUFNLEtBQUssR0FBRztZQUNaLElBQUksRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLE1BQU07WUFDMUMsSUFBSSxFQUFFLGNBQWMsR0FBRyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsTUFBTTtZQUMxQyxTQUFTLEVBQUUsSUFBSTtZQUNmLFVBQVUsRUFBRSxLQUFLO1NBQ2xCLENBQUE7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUV6RCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLG9DQUFvQixFQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUMzRCxLQUFLLEVBQUUsS0FBSztTQUNiLENBQUMsQ0FBQTtRQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQTtRQUM5QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBRTVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0RBQStELENBQUMsQ0FBQTtRQUM1RSxJQUFJLENBQUM7WUFDSCxNQUFNLElBQUEsb0NBQW9CLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO2dCQUN4QyxLQUFLLEVBQUUsS0FBSzthQUNiLENBQUMsQ0FBQTtZQUNGLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQTtRQUNsRixDQUFDO1FBQUMsT0FBTyxjQUFtQixFQUFFLENBQUM7WUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQywrREFBK0QsQ0FBQyxDQUFBO1lBQzVFLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2hFLENBQUM7SUFFSCxDQUFDO0lBQUMsT0FBTyxDQUFNLEVBQUUsQ0FBQztRQUNoQixPQUFPLENBQUMsS0FBSyxDQUFDLDJDQUEyQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUN2RSxDQUFDO0FBQ0gsQ0FBQyJ9