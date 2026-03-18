"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handleRegisteredDomainEvent;
const create_domain_1 = require("../workflows/create-domain");
async function handleRegisteredDomainEvent({ event: { data }, container, }) {
    console.log("=== SUBSCRIBER TRIGGERED: registered-domain-event ===");
    console.log("Event Data Received:", JSON.stringify(data, null, 2));
    try {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXJlZ2lzdGVyZWQtZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2hhbmRsZS1yZWdpc3RlcmVkLWRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSw4Q0FvQkM7QUF0QkQsOERBQWlFO0FBRWxELEtBQUssVUFBVSwyQkFBMkIsQ0FBQyxFQUN4RCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDZixTQUFTLEdBQ1c7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQ3JFLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbkUsSUFBSSxDQUFDO1FBQ0gsc0RBQXNEO1FBQ3RELHdFQUF3RTtRQUN4RSw4QkFBOEI7UUFDOUIsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFBLG9DQUFvQixFQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUN2RCxLQUFLLEVBQUUsSUFBSTtTQUNaLENBQUMsQ0FBQTtRQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDekMsQ0FBQztBQUNILENBQUM7QUFFWSxRQUFBLE1BQU0sR0FBcUI7SUFDdEMsS0FBSyxFQUFFLHlCQUF5QjtDQUNqQyxDQUFBIn0=