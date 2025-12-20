import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import createSaldoAllBankWorkflow from "src/workflows/create-saldo-allbank";
import { ISaldoAllBankInput } from "src/modules/saldo/types";



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
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);
    
    const startDate = rawStartDate ? rawStartDate : firstDayOfMonth.toISOString();
    const endDate = rawEndDate ? rawEndDate : lastDayOfMonth.toISOString();

        
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
        // updated_saldo_at: {
        created_at: {
            $gt: startDate,
            $lt: endDate,
        }
    };

    const result = await query.graph({
        entity: "saldo_allbank",
        fields: ["*"],        
        pagination,
        filters
    });

    

    res.json({
        saldo_allbank: result.data,
        pagination: {
            take: take,
            skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        }
    });
}


export const POST = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const workflow = createSaldoAllBankWorkflow(req.scope);
    const result = await workflow.run({
      input: req.body as ISaldoAllBankInput
    });
    res.json(result);
  }
