
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import createSaldoHistorTersediaWorkflow from "src/workflows/create-saldo-history";
import { ISaldoHistoryInput } from "src/modules/saldo/types";



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
  const rawAmountSaldoTersediaId = req.query.amount_saldo_tersedia_id as string;


    // Use default value if invalid or negative 
  const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : ""; //10
  const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : ""; //0 


  const today = new Date();  
  const hundredYearsAgo = new Date(today);
  hundredYearsAgo.setFullYear(today.getFullYear() - 100);
  const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
  
  const startDate = rawStartDate ? new Date(rawStartDate) : new Date(hundredYearsAgo);

  const endDateFormated = new Date(rawEndDate);

  const endDate = rawEndDate ? new Date(Date.UTC(endDateFormated.getFullYear(), endDateFormated.getMonth(), endDateFormated.getDate(), 16, 59, 59, 999)) : lastDayOfMonth;

      
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



  const filters: any = {
      updated_saldo_at: {      
          $gt: startDate.toISOString(),
          $lt: endDate.toISOString(),
      },
    
  };

  if (rawAmountSaldoTersediaId) {
    const idArray = rawAmountSaldoTersediaId.split(",").map(id => id.trim()).filter(Boolean);
    if (idArray.length > 0) {
        filters.amount_saldo_history_tersedia_id = {
            $in: idArray
        }
    }
  }
  
  

  const result = await query.graph({
      entity: "saldo_history_tersedia",
      fields: [
          "*"          
      ],   
      
      
      pagination,
      filters
  });

  

  res.json({
    saldo_history: result.data,
      pagination: {
          take: take,
          skip: skip,
          total: result.metadata?.count || result?.data?.length || 0
      },
      filters
  });
}


export const POST = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const workflow = createSaldoHistorTersediaWorkflow(req.scope);
    const result = await workflow.run({
      input: req.body as ISaldoHistoryInput
    });
    res.json(result);
  }