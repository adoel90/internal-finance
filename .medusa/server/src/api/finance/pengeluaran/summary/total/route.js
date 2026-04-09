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
    const { data: pengeluaran } = await query.graph({
        entity: "pengeluaran",
        fields: ["amount", "created_note_at"],
        filters: {
            created_note_at: {
                $gte: startDate,
                $lte: endDate
            }
        }
    });
    cashflowService.getTotalSummaryPengeluaran(pengeluaran).then(total => {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZ2VsdWFyYW4vc3VtbWFyeS90b3RhbC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSw4REFBaUU7QUFFakUscURBQXNFO0FBRy9ELE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDcEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDckIsRUFBRTtJQUVBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sZUFBZSxHQUEwQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQywwQkFBZSxDQUFDLENBQUM7SUFFbEYsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUYsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFHeEYsTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUMsTUFBTSxFQUFFLGFBQWE7UUFDckIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFDLGlCQUFpQixDQUFDO1FBQ3BDLE9BQU8sRUFBRTtZQUNMLGVBQWUsRUFBRTtnQkFDYixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsT0FBTzthQUNoQjtTQUNKO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsZUFBZSxDQUFDLDBCQUEwQixDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtRQUNuRSxHQUFHLENBQUMsSUFBSSxDQUFDO1lBQ0wsS0FBSztZQUNMLE9BQU8sRUFBRTtnQkFDTCxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUk7Z0JBQzVDLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSTthQUMzQztTQUNKLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBRVIsQ0FBQyxDQUFBO0FBbENZLFFBQUEsR0FBRyxPQWtDZiJ9