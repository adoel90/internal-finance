"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PUT = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const update_pengeluaran_proyeksi_cashcall_1 = require("src/workflows/update-pengeluaran-proyeksi-cashcall");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [detail] } = await query.graph({
        entity: "pengeluaran_proyeksi_cashcall",
        fields: [
            "id",
            "amount",
            "created_note_at",
        ],
        filters: {
            id: req.params.id,
        },
    });
    res.json(detail);
};
exports.GET = GET;
const PUT = async (req, res) => {
    const { amount, created_note_at } = req.body;
    const workflow = (0, update_pengeluaran_proyeksi_cashcall_1.updatePengeluaranProyeksiCashcallWorkflow)(req.scope);
    const { result } = await workflow.run({
        input: {
            id: req.params.id,
            amount,
            created_note_at,
        },
    });
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const { data: [updated] } = await query.graph({
        entity: "pengeluaran_proyeksi_cashcall",
        fields: [
            "id",
            "amount",
            "created_note_at"
        ],
        filters: {
            id: req.params.id
        }
    });
    res.json(updated);
};
exports.PUT = PUT;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZ2VsdWFyYW4vcHJveWVrc2ktY2FzaGNhbGwvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJRSxxREFJa0M7QUFFbEMsNkdBQThHO0FBT3ZHLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGlDQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFBO0lBRWhFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQU0sS0FBSyxDQUFDLEtBQUssQ0FBQztRQUMzQyxNQUFNLEVBQUUsK0JBQStCO1FBQ3ZDLE1BQU0sRUFBRTtZQUNOLElBQUk7WUFDSixRQUFRO1lBQ1IsaUJBQWlCO1NBQ2xCO1FBQ0QsT0FBTyxFQUFFO1lBQ1AsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtTQUNsQjtLQUNGLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUE7QUFDbEIsQ0FBQyxDQUFBO0FBbkJZLFFBQUEsR0FBRyxPQW1CZjtBQUVNLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFDdEIsR0FBeUQsRUFDekQsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sRUFBRSxNQUFNLEVBQUUsZUFBZSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQTtJQUU1QyxNQUFNLFFBQVEsR0FBRyxJQUFBLGdGQUF5QyxFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxRQUFRLENBQUMsR0FBRyxDQUFDO1FBQ3BDLEtBQUssRUFBRTtZQUNMLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDakIsTUFBTTtZQUNOLGVBQWU7U0FDaEI7S0FDRixDQUFDLENBQUE7SUFFRixNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNoRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxNQUFNLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDNUMsTUFBTSxFQUFFLCtCQUErQjtRQUN2QyxNQUFNLEVBQUU7WUFDTixJQUFJO1lBQ0osUUFBUTtZQUNSLGlCQUFpQjtTQUNsQjtRQUNELE9BQU8sRUFBRTtZQUNQLEVBQUUsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDbEI7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0FBQ25CLENBQUMsQ0FBQTtBQTdCWSxRQUFBLEdBQUcsT0E2QmYifQ==