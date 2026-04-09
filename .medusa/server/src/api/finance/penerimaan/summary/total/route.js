"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const cashflow_1 = require("../../../../../modules/cashflow");
const utils_1 = require("@medusajs/framework/utils");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const cashflowService = req.scope.resolve(cashflow_1.CASHFLOW_MODULE);
    const startDate = req.query.start_date ? new Date(req.query.start_date) : undefined;
    const endDate = req.query.end_date ? new Date(req.query.end_date) : undefined;
    const { data: penerimaan } = await query.graph({
        entity: "penerimaan",
        fields: ["amount", "created_note_at"],
        filters: {
            created_note_at: {
                $gte: startDate,
                $lte: endDate
            }
        }
    });
    cashflowService.getTotalSummaryPenerimaan(penerimaan).then(total => {
        res.json({
            total,
            filters: {
                start_date: startDate?.toISOString() || null,
                end_date: endDate?.toISOString() || null
            }
        });
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZXJpbWFhbi9zdW1tYXJ5L3RvdGFsL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLDhEQUFpRTtBQUVqRSxxREFBc0U7QUFFL0QsTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUNwQixHQUFrQixFQUNsQixHQUFtQixFQUNyQixFQUFFO0lBRUEsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFFakUsTUFBTSxlQUFlLEdBQTBCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDBCQUFlLENBQUMsQ0FBQztJQUVsRixNQUFNLFNBQVMsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RixNQUFNLE9BQU8sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUd4RixNQUFNLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzQyxNQUFNLEVBQUUsWUFBWTtRQUNwQixNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUMsaUJBQWlCLENBQUM7UUFDcEMsT0FBTyxFQUFFO1lBQ0wsZUFBZSxFQUFFO2dCQUNiLElBQUksRUFBRSxTQUFTO2dCQUNmLElBQUksRUFBRSxPQUFPO2FBQ2hCO1NBQ0o7S0FDRixDQUFDLENBQUE7SUFJRixlQUFlLENBQUMseUJBQXlCLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ2pFLEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDTCxLQUFLO1lBQ0wsT0FBTyxFQUFFO2dCQUNMLFVBQVUsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSTtnQkFDNUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFJO2FBQzNDO1NBQ0osQ0FBQyxDQUFBO0lBQ0osQ0FBQyxDQUFDLENBQUE7QUFFUixDQUFDLENBQUE7QUFwQ1ksUUFBQSxHQUFHLE9Bb0NmIn0=