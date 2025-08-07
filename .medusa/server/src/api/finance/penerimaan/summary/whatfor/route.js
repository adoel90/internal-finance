"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const cashflow_1 = require("../../../../../modules/cashflow");
const utils_1 = require("@medusajs/framework/utils");
// import { AmountForPengeluaran } from "../../../../../modules/cashflow/types"
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const cashflowService = req.scope.resolve(cashflow_1.CASHFLOW_MODULE);
    const startDate = req.query.start_date ? new Date(req.query.start_date) : undefined;
    const endDate = req.query.end_date ? new Date(req.query.end_date) : undefined;
    const amountOfInflowFor = req.query.amount_of_inflow_for ? req.query.amount_of_inflow_for : "";
    const { data: penerimaan } = await query.graph({
        entity: "penerimaan",
        fields: ["amount", "created_note_at", "amount_of_inflow_for"],
        filters: {
            created_note_at: {
                $gte: startDate,
                $lte: endDate
            },
            amount_of_inflow_for: {
                $in: [amountOfInflowFor]
            }
        }
    });
    if (!amountOfInflowFor || amountOfInflowFor == "") {
        res.json({
            total: 0,
            filters: {
                start_date: startDate?.toISOString() || null,
                end_date: endDate?.toISOString() || null,
                amount_of_inflow_for: amountOfInflowFor
            }
        });
    }
    cashflowService.getTotalSummaryPenerimaan(penerimaan).then(total => {
        res.json({
            total,
            filters: {
                start_date: startDate?.toISOString() || null,
                end_date: endDate?.toISOString() || null,
                amount_of_inflow_for: amountOfInflowFor
            }
        });
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZXJpbWFhbi9zdW1tYXJ5L3doYXRmb3Ivcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsOERBQWlFO0FBRWpFLHFEQUFzRTtBQUN0RSwrRUFBK0U7QUFFeEUsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUNwQixHQUFrQixFQUNsQixHQUFtQixFQUNyQixFQUFFO0lBRUEsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxlQUFlLEdBQTBCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDBCQUFlLENBQUMsQ0FBQztJQUVsRixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUN4RixNQUFNLGlCQUFpQixHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsb0JBQThCLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUd4RyxNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzQyxNQUFNLEVBQUUsWUFBWTtRQUNwQixNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUMsaUJBQWlCLEVBQUUsc0JBQXNCLENBQUM7UUFDNUQsT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxPQUFPO2FBQ2hCO1lBQ0Qsb0JBQW9CLEVBQUU7Z0JBQ2xCLEdBQUcsRUFBRSxDQUFDLGlCQUFpQixDQUFDO2FBQzNCO1NBQ0o7S0FDRixDQUFDLENBQUE7SUFFRixJQUFHLENBQUMsaUJBQWlCLElBQUksaUJBQWlCLElBQUksRUFBRSxFQUFDLENBQUM7UUFDaEQsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNMLEtBQUssRUFBRSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSTtnQkFDNUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFJO2dCQUN4QyxvQkFBb0IsRUFBRSxpQkFBaUI7YUFDMUM7U0FDSixDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsZUFBZSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNqRSxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ0wsS0FBSztZQUNMLE9BQU8sRUFBRTtnQkFDTCxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUk7Z0JBQzVDLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSTtnQkFDeEMsb0JBQW9CLEVBQUUsaUJBQWlCO2FBQzFDO1NBQ0osQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFFUixDQUFDLENBQUE7QUFsRFksUUFBQSxHQUFHLE9Ba0RmIn0=