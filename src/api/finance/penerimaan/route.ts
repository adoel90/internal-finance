import {
  MedusaRequest,
  MedusaResponse,
} from "@medusajs/framework/http"
import { createPenerimaanWorkflow } from "../../../workflows/create-penerimaan"
import { PenerimaanInput } from "../../../modules/cashflow/types"
import {
  ContainerRegistrationKeys,
} from "@medusajs/framework/utils"

export const POST = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const workflow = createPenerimaanWorkflow(req.scope);
  const result = await workflow.run({
    input: req.body as PenerimaanInput
  });
  res.json(result);
}

// https://docs.medusajs.com/learn/fundamentals/module-links/query#apply-filters-and-pagination-on-linked-records
export const GET = async (
  req: MedusaRequest,
  res: MedusaResponse
) => {
  const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

  // Raw data
  const rawTake = parseInt(req.query.take as string);
  const rawSkip = parseInt(req.query.skip as string);
  const rawStartDate = req.query.start_date as string;
  const rawEndDate = req.query.end_date as string;
  const amountOfInflowFor = req.query.amount_of_inflow_for ? req.query.amount_of_inflow_for as string: "";  

  // Use default value if invalid or negative 
  const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : "";
  const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : "";

  //use default value if start_date or end_date is not provided
  const today = new Date();
  const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);

  // const startDate = rawStartDate ? rawStartDate : firstDayOfMonth.toISOString();
  // const endDate = rawEndDate ? rawEndDate : lastDayOfMonth.toISOString();
  const startDate = rawStartDate ? rawStartDate : firstDayOfMonth;
  const endDate = rawEndDate ? rawEndDate : lastDayOfMonth;

  console.log({
    rawStartDate,
    rawEndDate,
    firstDayOfMonth,
    lastDayOfMonth
  })
  

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
    created_note_at: {
      $gt: startDate,
      $lt: endDate,
    }
  };

  if (amountOfInflowFor !== "") {
    filters.amount_of_inflow_for = {
      $in: [amountOfInflowFor]
    };
  }

  const result = await query.graph({
    entity: "penerimaan",
    fields: ["*"],
    pagination,
    filters
  })

  res.json({ 
    penerimaan: result.data,
    pagination: {
      take: take,
      skip: skip,
      total: result.metadata?.count || result?.data?.length || 0
    }
  })
}
