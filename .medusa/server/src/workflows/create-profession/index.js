"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProfessionWorkflow = exports.createProfessionStep = void 0;
const workflows_sdk_1 = require("@medusajs/framework/workflows-sdk");
const scrape_1 = require("../../modules/scrape");
// Step 1: Create the profession
exports.createProfessionStep = (0, workflows_sdk_1.createStep)("step1-create-profession", async (input, { container }) => {
    const scrapeModuleService = container.resolve(scrape_1.SCRAPE_MODULE);
    const profession = await scrapeModuleService.createProfessions(input);
    return new workflows_sdk_1.StepResponse(profession, profession.id);
}, 
// Rollback function to delete the profession if the workflow fails
async (id, { container }) => {
    if (!id) {
        return;
    }
    const scrapeModuleService = container.resolve(scrape_1.SCRAPE_MODULE);
    await scrapeModuleService.deleteProfessions(id);
});
// Define the main workflow for creating a profession
exports.createProfessionWorkflow = (0, workflows_sdk_1.createWorkflow)("create-profession-workflow", (input) => {
    // Run the create profession step
    const profession = (0, exports.createProfessionStep)(input);
    // Return the workflow response
    return new workflows_sdk_1.WorkflowResponse(profession);
});
exports.default = exports.createProfessionWorkflow;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvd29ya2Zsb3dzL2NyZWF0ZS1wcm9mZXNzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFFQU0yQztBQUMzQyxpREFBcUQ7QUFVckQsZ0NBQWdDO0FBQ25CLFFBQUEsb0JBQW9CLEdBQUcsSUFBQSwwQkFBVSxFQUMxQyx5QkFBeUIsRUFDekIsS0FBSyxFQUFFLEtBQXNCLEVBQUUsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFO0lBQzVDLE1BQU0sbUJBQW1CLEdBQXdCLFNBQVMsQ0FBQyxPQUFPLENBQzlELHNCQUFhLENBQ2hCLENBQUM7SUFFRixNQUFNLFVBQVUsR0FBRyxNQUFNLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRXRFLE9BQU8sSUFBSSw0QkFBWSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDdkQsQ0FBQztBQUNELG1FQUFtRTtBQUNuRSxLQUFLLEVBQUUsRUFBVSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRTtJQUNoQyxJQUFJLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDTixPQUFPO0lBQ1gsQ0FBQztJQUNELE1BQU0sbUJBQW1CLEdBQXdCLFNBQVMsQ0FBQyxPQUFPLENBQzlELHNCQUFhLENBQ2hCLENBQUM7SUFDRixNQUFNLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0FBQ3BELENBQUMsQ0FDSixDQUFDO0FBRUYscURBQXFEO0FBQ3hDLFFBQUEsd0JBQXdCLEdBQUcsSUFBQSw4QkFBYyxFQUNsRCw0QkFBNEIsRUFDNUIsQ0FBQyxLQUFvQyxFQUFpQyxFQUFFO0lBQ3BFLGlDQUFpQztJQUNqQyxNQUFNLFVBQVUsR0FBRyxJQUFBLDRCQUFvQixFQUFDLEtBQUssQ0FBQyxDQUFDO0lBRS9DLCtCQUErQjtJQUMvQixPQUFPLElBQUksZ0NBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDNUMsQ0FBQyxDQUNKLENBQUM7QUFFRixrQkFBZSxnQ0FBd0IsQ0FBQyJ9