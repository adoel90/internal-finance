
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import createSaldoTersediaWorkflow from "src/workflows/create-saldo-tersedia";
import { ISaldoAllRekeningInput, ISaldoTersediaInput } from "src/modules/saldo/types";

import createSaldoHistoryTersediaWorkflow from "src/workflows/create-saldo-tersedia-history";
import { Currencies } from "src/modules/cashflow/types";

export const GET = async (
    req: MedusaRequest,
        res: MedusaResponse
    ) => {

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

    // const saldoModuleService : SaldoModuleService = req.scope.resolve(SALDO_MODULE);

    // Raw data
    const rawTake = parseInt(req.query.take as string);
    const rawSkip = parseInt(req.query.skip as string);
    const rawStartDate = req.query.start_date as string;
    const rawEndDate = req.query.end_date as string;


      // Use default value if invalid or negative 
    const take = Number.isInteger(rawTake) && rawTake > 0 ? rawTake : ""; //10
    const skip = Number.isInteger(rawSkip) && rawSkip >= 0 ? rawSkip : ""; //0 


      //use default value if start_date or end_date is not provided
    // const today = new Date();
    // const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    // const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
    
    // const startDate = rawStartDate ? rawStartDate : firstDayOfMonth.toISOString();
    // const endDate = rawEndDate ? rawEndDate : lastDayOfMonth.toISOString();

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
      
    };

    // if(endDate !== ""){
    //     filters.end_date
    // }

    const result = await query.graph({
        entity: "saldo_tersedia",
        fields: [
            "*",
            "histories_saldo_tersedia.*",
            // ...(fields || []),
        ],   
        
        
        pagination,
        filters
    });

    

    res.json({
        saldo_tersedia: result.data,
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

    const payload = req.body as ISaldoTersediaInput;

    if (typeof payload.amount_saldo !== 'number') {
      return res.status(400).json({ message: "amount_saldo is a required number field." });
    }

    const workflow = createSaldoTersediaWorkflow(req.scope);

    const response = await workflow.run({
      input: payload
    });

    if (response?.result) {
      const amountSaldoId = response.result.id;
      const historyWorkflow =  createSaldoHistoryTersediaWorkflow(req.scope);

      // TODO: put Logger
      // Fire-and-forget history creation
      historyWorkflow.run({
        input: {
          amount_saldo_history_tersedia_id: amountSaldoId,            
          amount: payload.amount_saldo,
          updated_saldo_at: payload.updated_saldo_at,
          currency_code: Currencies.ID
        }
      });
    }

    res.json(response);
  }