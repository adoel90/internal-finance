"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.default = handleRegisteredDomainEvent;
const create_domain_1 = require("../workflows/create-domain");
async function handleRegisteredDomainEvent({ event: { data }, container, }) {
    // We invoke the workflow directly using the container
    // We assume the event `data` matches the expected input of the workflow
    // (e.g., { name, slug, ... })
    await (0, create_domain_1.createDomainWorkflow)(container).run({
        input: data,
    });
}
exports.config = {
    event: "registered-domain-event",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLXJlZ2lzdGVyZWQtZG9tYWluLWV2ZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL3N1YnNjcmliZXJzL2hhbmRsZS1yZWdpc3RlcmVkLWRvbWFpbi1ldmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFNQSw4Q0FVQztBQVpELDhEQUFpRTtBQUVsRCxLQUFLLFVBQVUsMkJBQTJCLENBQUMsRUFDeEQsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQ2YsU0FBUyxHQUNXO0lBQ3BCLHNEQUFzRDtJQUN0RCx3RUFBd0U7SUFDeEUsOEJBQThCO0lBQzlCLE1BQU0sSUFBQSxvQ0FBb0IsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDeEMsS0FBSyxFQUFFLElBQUk7S0FDWixDQUFDLENBQUE7QUFDSixDQUFDO0FBRVksUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSx5QkFBeUI7Q0FDakMsQ0FBQSJ9