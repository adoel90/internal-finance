"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDomainWorkflow = exports.updateDomainStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const domain_1 = require("../../modules/domain");
exports.updateDomainStep = (0, workflows_sdk_1.createStep)("update-domain-step", async (input, { container }) => {
    const domainModuleService = container.resolve(domain_1.DOMAIN_MODULE);
    const originalDomain = await domainModuleService.retrieveDomain(input.id);
    const updatedDomain = await domainModuleService.updateDomains(input);
    return new workflows_sdk_1.StepResponse(updatedDomain, originalDomain);
}, async (originalDomain, { container }) => {
    if (originalDomain) {
        const domainModuleService = container.resolve(domain_1.DOMAIN_MODULE);
        await domainModuleService.updateDomains(originalDomain);
    }
});
exports.updateDomainWorkflow = (0, workflows_sdk_1.createWorkflow)("update-domain", (input) => {
    const domain = (0, exports.updateDomainStep)(input);
    return new workflows_sdk_1.WorkflowResponse(domain);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL3VwZGF0ZS1kb21haW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLGlEQUFvRDtBQVd2QyxRQUFBLGdCQUFnQixHQUFHLElBQUEsMEJBQVUsRUFDeEMsb0JBQW9CLEVBQ3BCLEtBQUssRUFBRSxLQUF3QixFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNoRCxNQUFNLG1CQUFtQixHQUFRLFNBQVMsQ0FBQyxPQUFPLENBQUMsc0JBQWEsQ0FBQyxDQUFBO0lBQ2pFLE1BQU0sY0FBYyxHQUFHLE1BQU0sbUJBQW1CLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUN6RSxNQUFNLGFBQWEsR0FBRyxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNwRSxPQUFPLElBQUksNEJBQVksQ0FBQyxhQUFhLEVBQUUsY0FBYyxDQUFDLENBQUE7QUFDeEQsQ0FBQyxFQUNELEtBQUssRUFBRSxjQUFjLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ3RDLElBQUksY0FBYyxFQUFFLENBQUM7UUFDakIsTUFBTSxtQkFBbUIsR0FBUSxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFhLENBQUMsQ0FBQTtRQUNqRSxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUE7QUFFWSxRQUFBLG9CQUFvQixHQUFHLElBQUEsOEJBQWMsRUFDaEQsZUFBZSxFQUNmLENBQUMsS0FBd0IsRUFBRSxFQUFFO0lBQzNCLE1BQU0sTUFBTSxHQUFHLElBQUEsd0JBQWdCLEVBQUMsS0FBSyxDQUFDLENBQUE7SUFDdEMsT0FBTyxJQUFJLGdDQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBQ3JDLENBQUMsQ0FDRixDQUFBIn0=