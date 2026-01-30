import {
  AuthenticatedMedusaRequest,
  MedusaResponse,
  MedusaRequest
} from "@medusajs/framework";
import { MedusaError } from "@medusajs/utils";
import { SCRAPE_MODULE } from "src/modules/scrape";
import ScrapeModuleService from "src/modules/scrape/service";

export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { id } = req.params;
  const scrapeModuleService: ScrapeModuleService = req.scope.resolve("scrapeModuleService");

  const profession = await scrapeModuleService.retrieveProfession(id);

  if (!profession) {
    throw new MedusaError(
      MedusaError.Types.NOT_FOUND,
      `Profession with id: ${id} was not found`
    );
  }

  res.json({ profession });
};

export const PUT = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { id } = req.params;
  const scrapeModuleService: ScrapeModuleService = req.scope.resolve(SCRAPE_MODULE);

  const body = req.body && typeof req.body === "object" && !Array.isArray(req.body) ? (req.body as Record<string, any>) : {};
  const profession = await scrapeModuleService.updateProfessions({ id, ...body });

  res.json({ profession });
};

export const DELETE = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const { id } = req.params;
  const scrapeModuleService: ScrapeModuleService = req.scope.resolve(SCRAPE_MODULE);

  await scrapeModuleService.deleteProfessions(id);

  res.json({
    message: `Profession with id: ${id} deleted`,
  });
};
