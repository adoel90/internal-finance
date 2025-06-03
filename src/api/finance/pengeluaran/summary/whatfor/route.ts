import {
    MedusaRequest,
    MedusaResponse,
} from "@medusajs/framework/http"
import { CASHFLOW_MODULE } from "../../../../../modules/cashflow"
import CashflowModuleService from "../../../../../modules/cashflow/service"
import { ContainerRegistrationKeys } from "@medusajs/framework/utils";
// import { AmountForPengeluaran } from "../../../../../modules/cashflow/types"

export const GET = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {

    const query = req.scope.resolve(ContainerRegistrationKeys.QUERY);
        
    const cashflowService: CashflowModuleService = req.scope.resolve(CASHFLOW_MODULE);
    
    const startDate = req.query.start_date ? new Date(req.query.start_date as string) : undefined;
    const endDate = req.query.end_date ? new Date(req.query.end_date as string) : undefined;
    const amountOfOutflowFor = req.query.amount_of_outflow_for ? req.query.amount_of_outflow_for as string: "";


    const { data: pengeluaran } = await query.graph({
        entity: "pengeluaran",
        fields: ["amount","created_note_at", "amount_of_outflow_for"],
        filters: {
            created_note_at: {
                $gte: startDate,
                $lte: endDate
            },
            amount_of_outflow_for: {
                $in: [amountOfOutflowFor]                
            }
        }
      })      

      if(!amountOfOutflowFor || amountOfOutflowFor == ""){
        res.json({
            total: 0,
            filters: {
                start_date: startDate?.toISOString() || null,
                end_date: endDate?.toISOString() || null,
                amount_of_outflow_for: amountOfOutflowFor
            }
        })
      }
      
      cashflowService.getTotalSummaryPengeluaran(pengeluaran).then(total => {
        res.json({
            total,
            filters: {
                start_date: startDate?.toISOString() || null,
                end_date: endDate?.toISOString() || null,
                amount_of_outflow_for: amountOfOutflowFor
            }
        })
      })

} 