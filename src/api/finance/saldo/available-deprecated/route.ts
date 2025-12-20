import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { SALDO_MODULE } from "src/modules/saldo";
import SaldoModuleService from "src/modules/saldo/service";
import createSaldoAvailableWorkflow from "src/workflows/create-saldo-available";
import { ISaldoAvailableInput } from "src/modules/cashflow/types";

export const GET = async (
    req: MedusaRequest,
        res: MedusaResponse
    ) => {

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);

    const saldoModuleService : SaldoModuleService = req.scope.resolve(SALDO_MODULE);

    const startDate = req.query.start_date as string;
    const endDate = req.query.end_date as string;


    const { data: saldo_available } = await query.graph({
        entity: "saldo_available",
        fields: ["amount", "id"],
        // filters: {
        //     created_note_at: {
        //         $gte: startDate,
        //         $lte: endDate,
        //     }
        // }
    });

    const totalSaldoAvailable: { 
      amount?: number,
      id: string
  }  = await saldoModuleService.getTotalSaldoAvailable(saldo_available);

    res.json(totalSaldoAvailable);
}


export const POST = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const workflow = createSaldoAvailableWorkflow(req.scope);
    const result = await workflow.run({
      input: req.body as ISaldoAvailableInput
    });
    res.json(result);
  }



