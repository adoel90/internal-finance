import { MedusaRequest, MedusaResponse } from "@medusajs/framework/http";
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
import { createPengeluaranProyeksiCashcallWorkflow } from "src/workflows/create-pengeluaran-proyeksi-cashcall";
import { PengeluaranProyeksiCashcallInput } from "src/modules/cashflow/types";

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
        
    const rawStartDate = req.query.start_date as string;
    const rawEndDate = req.query.end_date as string;
    //use default value if start_date or end_date is not provided
    const today = new Date();
    const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
    const lastDayOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0, 23, 59, 59, 999);

    const startDate = rawStartDate ? rawStartDate : firstDayOfMonth.toISOString();
    const endDate = rawEndDate ? rawEndDate : lastDayOfMonth.toISOString();

    const { data: pengeluaran_proyeksi_cashcall } = await query.graph({
        entity: "pengeluaran_proyeksi_cashcall",
        fields: ["created_note_at", "amount", "id"],
        filters: {
            created_note_at: {
                $gte: startDate,
                $lte: endDate,                
            }
        }
      })


      res.json({
        pengeluaran_proyeksi_cashcall        
    })

}

export const POST = async (
    req: MedusaRequest,
    res: MedusaResponse
  ) => {
    const workflow = createPengeluaranProyeksiCashcallWorkflow(req.scope);
    const result = await workflow.run({
      input: req.body as PengeluaranProyeksiCashcallInput
    });
    res.json(result);
  }
