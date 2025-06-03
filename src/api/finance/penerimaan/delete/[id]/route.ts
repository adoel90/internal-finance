import {
    MedusaRequest,
    MedusaResponse,
  } from "@medusajs/framework/http"
import { CASHFLOW_MODULE } from "src/modules/cashflow";
import CashflowModuleService from "src/modules/cashflow/service";


export const DELETE = async (
    req: MedusaRequest,
    res: MedusaResponse
) => {
      
    const cashflowService: CashflowModuleService = req.scope.resolve(CASHFLOW_MODULE);

    const { id } = req.params;

    cashflowService.deletePenerimaans(id);

    res.json({ message: "Penerimaan deleted successfully" });
}
  