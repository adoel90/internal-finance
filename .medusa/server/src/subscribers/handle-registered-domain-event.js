"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handleRegisteredDomainEvent;
const create_domain_1 = require("../workflows/create-domain");
async function handleRegisteredDomainEvent({ event: { data }, container, }) {
    console.log("=== SUBSCRIBER TRIGGERED: registered-domain-event ===");
    // console.log("Event Data Received:", JSON.stringify(data, null, 2));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXJlZ2lzdGVyZWQtZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2hhbmRsZS1yZWdpc3RlcmVkLWRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSw4Q0FvQkM7QUF0QkQsOERBQWlFO0FBRWxELEtBQUssVUFBVSwyQkFBMkIsQ0FBQyxFQUN4RCxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDZixTQUFTLEdBQ1c7SUFDcEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx1REFBdUQsQ0FBQyxDQUFDO0lBQ3JFLHNFQUFzRTtJQUV0RSxJQUFJLENBQUM7UUFDSCxzREFBc0Q7UUFDdEQsd0VBQXdFO1FBQ3hFLDhCQUE4QjtRQUM5QixNQUFNLE1BQU0sR0FBRyxNQUFNLElBQUEsb0NBQW9CLEVBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDO1lBQ3ZELEtBQUssRUFBRSxJQUFJO1NBQ1osQ0FBQyxDQUFBO1FBQ0YsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO1FBQ3hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsS0FBSyxDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6QyxDQUFDO0FBQ0gsQ0FBQztBQUVZLFFBQUEsTUFBTSxHQUFxQjtJQUN0QyxLQUFLLEVBQUUseUJBQXlCO0NBQ2pDLENBQUEifQ==