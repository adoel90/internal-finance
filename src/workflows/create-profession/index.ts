import {
    createStep,
    StepResponse,
    WorkflowResponse,
    createWorkflow,
    WorkflowData
} from "@medusajs/framework/workflows-sdk";
import { SCRAPE_MODULE } from "../../modules/scrape";
import ScrapeModuleService from "../../modules/scrape/service";
import { Profession } from "src/modules/scrape/models/profession";
// import { Profession } from "../../modules/scrape/models/profession";

// Define the input type for creating a profession
type ProfessionInput = {
    name: string;
};

// Step 1: Create the profession
export const createProfessionStep = createStep(
    "step1-create-profession",
    async (input: ProfessionInput, { container }) => {
        const scrapeModuleService: ScrapeModuleService = container.resolve(
            SCRAPE_MODULE
        );

        const profession = await scrapeModuleService.createProfessions(input);

        return new StepResponse(profession, profession.id);
    },
    // Rollback function to delete the profession if the workflow fails
    async (id: string, { container }) => {
        if (!id) {
            return;
        }
        const scrapeModuleService: ScrapeModuleService = container.resolve(
            SCRAPE_MODULE
        );
        await scrapeModuleService.deleteProfessions(id);
    }
);

// Define the main workflow for creating a profession
export const createProfessionWorkflow = createWorkflow(
    "create-profession-workflow",
    (input: WorkflowData<ProfessionInput>) : WorkflowResponse<Profession> => {
        // Run the create profession step
        const profession = createProfessionStep(input);

        // Return the workflow response
        return new WorkflowResponse(profession);
    }
);

export default createProfessionWorkflow;
