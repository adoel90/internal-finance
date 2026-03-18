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
    const amountOfOutflowFor = req.query.amount_of_outflow_for ? req.query.amount_of_outflow_for : "";
    const { data: pengeluaran } = await query.graph({
        entity: "pengeluaran",
        fields: ["amount", "created_note_at", "amount_of_outflow_for"],
        filters: {
            created_note_at: {
                $gte: startDate,
                $lte: endDate
            },
            amount_of_outflow_for: {
                $in: [amountOfOutflowFor]
            }
        }
    });
    if (!amountOfOutflowFor || amountOfOutflowFor == "") {
        res.json({
            total: 0,
            filters: {
                start_date: startDate?.toISOString() || null,
                end_date: endDate?.toISOString() || null,
                amount_of_outflow_for: amountOfOutflowFor
            }
        });
    }
    cashflowService.getTotalSummaryPengeluaran(pengeluaran).then(total => {
        res.json({
            total,
            filters: {
                start_date: startDate?.toISOString() || null,
                end_date: endDate?.toISOString() || null,
                amount_of_outflow_for: amountOfOutflowFor
            }
        });
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZ2VsdWFyYW4vc3VtbWFyeS93aGF0Zm9yL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUlBLDhEQUFpRTtBQUVqRSxxREFBc0U7QUFDdEUsK0VBQStFO0FBRXhFLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDcEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDckIsRUFBRTtJQUVBLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBRWpFLE1BQU0sZUFBZSxHQUEwQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQywwQkFBZSxDQUFDLENBQUM7SUFFbEYsTUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsVUFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDOUYsTUFBTSxPQUFPLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsUUFBa0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDeEYsTUFBTSxrQkFBa0IsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLHFCQUErQixDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFHM0csTUFBTSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUMsTUFBTSxFQUFFLGFBQWE7UUFDckIsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFDLGlCQUFpQixFQUFFLHVCQUF1QixDQUFDO1FBQzdELE9BQU8sRUFBRTtZQUNMLGVBQWUsRUFBRTtnQkFDYixJQUFJLEVBQUUsU0FBUztnQkFDZixJQUFJLEVBQUUsT0FBTzthQUNoQjtZQUNELHFCQUFxQixFQUFFO2dCQUNuQixHQUFHLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQzthQUM1QjtTQUNKO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsSUFBRyxDQUFDLGtCQUFrQixJQUFJLGtCQUFrQixJQUFJLEVBQUUsRUFBQyxDQUFDO1FBQ2xELEdBQUcsQ0FBQyxJQUFJLENBQUM7WUFDTCxLQUFLLEVBQUUsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDTCxVQUFVLEVBQUUsU0FBUyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUk7Z0JBQzVDLFFBQVEsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksSUFBSTtnQkFDeEMscUJBQXFCLEVBQUUsa0JBQWtCO2FBQzVDO1NBQ0osQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELGVBQWUsQ0FBQywwQkFBMEIsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDbkUsR0FBRyxDQUFDLElBQUksQ0FBQztZQUNMLEtBQUs7WUFDTCxPQUFPLEVBQUU7Z0JBQ0wsVUFBVSxFQUFFLFNBQVMsRUFBRSxXQUFXLEVBQUUsSUFBSSxJQUFJO2dCQUM1QyxRQUFRLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxJQUFJLElBQUk7Z0JBQ3hDLHFCQUFxQixFQUFFLGtCQUFrQjthQUM1QztTQUNKLENBQUMsQ0FBQTtJQUNKLENBQUMsQ0FBQyxDQUFBO0FBRVIsQ0FBQyxDQUFBO0FBbERZLFFBQUEsR0FBRyxPQWtEZiJ9