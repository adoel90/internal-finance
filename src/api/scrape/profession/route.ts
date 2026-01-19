import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  MedusaRequest
} from "@medusajs/framework";
import { MedusaError } from "@medusajs/utils";
import {
  ContainerRegistrationKeys,
} from "@medusajs/framework/utils"


import createProfessionWorkflow from "../../../workflows/create-profession";
import { Profession } from "../../../modules/scrape/models/profession";

export const GET = async (
  // req: AuthenticatedMedusaRequest,
  req: MedusaRequest,
  res: MedusaResponse
) => {

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

      // Raw data
    const rawTake = parseInt(req.query.take as string);
    const rawSkip = parseInt(req.query.skip as string);
    const rawStartDate = req.query.start_date as string;
    const rawEndDate = req.query.end_date as string;    

    // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : "";
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : "";


      const pagination: any = {
            order: {
            created_at: "DESC",
            },
        }

        if (take !== "") {
            pagination.take = take;
        }

        if (skip !== "") {
            pagination.skip = skip;
        }

        // Filter
        const filters: any = {
            // created_note_at: {
            // $gt: rawStartDate,
            // $lt: rawEndDate,
            // }
        };

    //   const scrapeModuleService: ScrapeModuleService = req.scope.resolve("scrapeModuleService");
    //   const professions = await scrapeModuleService.listProfessions();

    
    const result = await query.graph({
        entity: "profession",
        fields: ["*"],
        pagination,
        filters
    })

    res.json({ 
        profession: result.data,
        pagination: {
        take: take,
        skip: skip,
        total: result.metadata?.count || result?.data?.length || 0
        }
    })    
};


export const POST = async (
  // req: AuthenticatedMedusaRequest<Profession>,
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const workflow = createProfessionWorkflow(req.scope);
  // Validate and normalize input to match ProfessionInput: { name: string }
  const rawInput = req.body as any;
  if (!rawInput || typeof rawInput.name !== "string" || rawInput.name.trim() === "") {
    throw new MedusaError(MedusaError.Types.INVALID_DATA, "Missing required field 'name' in request body");
  }
  const result = await workflow.run({
      input: {
        name: rawInput.name.trim(),
      },
  });

  if (result.errors && result.errors.length > 0) {
    throw result.errors[0].error;
  }

  res.json({ profession: result.result });
};
