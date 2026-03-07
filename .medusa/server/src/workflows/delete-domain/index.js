"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDomainWorkflow = exports.deleteDomainStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const domain_1 = require("../../modules/domain");
exports.deleteDomainStep = (0, workflows_sdk_1.createStep)("delete-domain-step", async (id, { container }) => {
    const domainModuleService = container.resolve(domain_1.DOMAIN_MODULE);
    const domain = await domainModuleService.retrieveDomain(id).catch(() => null);
    if (domain) {
        await domainModuleService.deleteDomains(id);
    }
    return new workflows_sdk_1.StepResponse(id, domain);
}, async (domain, { container }) => {
    if (domain) {
        const domainModuleService = container.resolve(domain_1.DOMAIN_MODULE);
        await domainModuleService.createDomains(domain);
    }
});
exports.deleteDomainWorkflow = (0, workflows_sdk_1.createWorkflow)("delete-domain", (id) => {
    const deletedId = (0, exports.deleteDomainStep)(id);
    return new workflows_sdk_1.WorkflowResponse(deletedId);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2RlbGV0ZS1kb21haW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEscUVBSzBDO0FBQzFDLGlEQUFvRDtBQUV2QyxRQUFBLGdCQUFnQixHQUFHLElBQUEsMEJBQVUsRUFDeEMsb0JBQW9CLEVBQ3BCLEtBQUssRUFBRSxFQUFVLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQ2xDLE1BQU0sbUJBQW1CLEdBQVEsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBYSxDQUFDLENBQUE7SUFDakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdFLElBQUksTUFBTSxFQUFFLENBQUM7UUFDWCxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtJQUM3QyxDQUFDO0lBQ0QsT0FBTyxJQUFJLDRCQUFZLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFBO0FBQ3JDLENBQUMsRUFDRCxLQUFLLEVBQUUsTUFBTSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUM5QixJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ1gsTUFBTSxtQkFBbUIsR0FBUSxTQUFTLENBQUMsT0FBTyxDQUFDLHNCQUFhLENBQUMsQ0FBQTtRQUNqRSxNQUFNLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0FBQ0gsQ0FBQyxDQUNGLENBQUE7QUFFWSxRQUFBLG9CQUFvQixHQUFHLElBQUEsOEJBQWMsRUFDaEQsZUFBZSxFQUNmLENBQUMsRUFBVSxFQUFFLEVBQUU7SUFDYixNQUFNLFNBQVMsR0FBRyxJQUFBLHdCQUFnQixFQUFDLEVBQUUsQ0FBQyxDQUFBO0lBQ3RDLE9BQU8sSUFBSSxnQ0FBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQTtBQUN4QyxDQUFDLENBQ0YsQ0FBQSJ9