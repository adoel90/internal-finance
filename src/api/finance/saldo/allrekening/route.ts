
import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import createSaldoAllRekeningWorkflow from "src/workflows/create-saldo-allrekening";
import { ISaldoAllRekeningInput } from "src/modules/saldo/types";

import createSaldoHistoryWorkflow from "src/workflows/create-saldo-history";
import { ISaldoHistoryInput } from "src/modules/saldo/types";
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
        entity: "saldo_allrekening",
        fields: [
            "*",
            "histories.*",
            // ...(fields || []),
        ],   
        
        
        pagination,
        filters
    });

    

    res.json({
        saldo_allrekening: result.data,
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
    const workflow = createSaldoAllRekeningWorkflow(req.scope);
    
    workflow.run({
      input: req.body as ISaldoAllRekeningInput
    }).then(async (response)  => {

      if(response?.result){

        const payload = req.body as ISaldoAllRekeningInput

        // const amountSaldoId = response.result.id

        //   // Tunggu hingga saldo history selesai
        //   try {
        //     const responseSaldoHistory = await createSaldoHistoryWorkflow(req.scope).run({
        //       input: {
        //         amount_saldo_id: amountSaldoId,
        //         amount: payload.amount_saldo,
        //         amount_saldo: payload.amount_saldo,
        //         updated_saldo_at: payload.updated_saldo_at,
        //         currency_code: Currencies.ID
        //       }
        //     });
        //     console.log("responseSaldoHistory : ", responseSaldoHistory);
        //   } catch (e) {
        //     console.log(e.message);
        //   }

          return res.json(response.result)

        // createSaldoHistoryWorkflow(req.scope).run({
        //   input: {
        //     amount_saldo_id: amountSaldoId,            
        //     amount: payload.amount_saldo,
        //     amount_saldo: payload.amount_saldo,
        //     updated_saldo_at: payload.updated_saldo_at,
        //     currency_code: Currencies.ID

        //   }
        // }).then((responseSaldoHistory) => {
        //   console.log("responseSaldoHistory : ", responseSaldoHistory)
        // }).catch(e => console.log(e.message))
        

        // TODO: put Logger
        // if(!payload.amount_saldo){
        //     return res.json(response);
        // }
        // historyWorkflow.run({
        //   input: {
        //     amount_saldo_id: amountSaldoId,            
        //     amount: payload.amount_saldo,
        //     amount_saldo: payload.amount_saldo,
        //     updated_saldo_at: payload.updated_saldo_at,
        //     currency_code: Currencies.ID

        //   }
        // });



        // return res.json(response.result);

        

        
      }    
    }).finally(() => {

      
    })

    
    // console.log(result.result)
    // amount_saldo_id: string
    // amount_saldo: number
    // updated_saldo_at: Date,
    // currency_code?: Currencies
    // req.body as ISaldoHistoryInput

    





    // res.json(result);
  }