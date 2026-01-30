"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
const create_pengeluaran_proyeksi_cashcall_1 = require("src/workflows/create-pengeluaran-proyeksi-cashcall");
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const rawStartDate = req.query.start_date;
    const rawEndDate = req.query.end_date;
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
    });
    res.json({
        pengeluaran_proyeksi_cashcall
    });
};
exports.GET = GET;
const POST = async (req, res) => {
    const workflow = (0, create_pengeluaran_proyeksi_cashcall_1.createPengeluaranProyeksiCashcallWorkflow)(req.scope);
    const result = await workflow.run({
        input: req.body
    });
    res.json(result);
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZ2VsdWFyYW4vcHJveWVrc2ktY2FzaGNhbGwvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQXNFO0FBQ3RFLDZHQUErRztBQUd4RyxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQ3BCLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ3JCLEVBQUU7SUFFQSxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBeUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUVqRSxNQUFNLFlBQVksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLFVBQW9CLENBQUM7SUFDcEQsTUFBTSxVQUFVLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxRQUFrQixDQUFDO0lBQ2hELDZEQUE2RDtJQUM3RCxNQUFNLEtBQUssR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3pCLE1BQU0sZUFBZSxHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFBRSxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDM0UsTUFBTSxjQUFjLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBRS9GLE1BQU0sU0FBUyxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDOUUsTUFBTSxPQUFPLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUV2RSxNQUFNLEVBQUUsSUFBSSxFQUFFLDZCQUE2QixFQUFFLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQzlELE1BQU0sRUFBRSwrQkFBK0I7UUFDdkMsTUFBTSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQztRQUMzQyxPQUFPLEVBQUU7WUFDTCxlQUFlLEVBQUU7Z0JBQ2IsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsSUFBSSxFQUFFLE9BQU87YUFDaEI7U0FDSjtLQUNGLENBQUMsQ0FBQTtJQUdGLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDUCw2QkFBNkI7S0FDaEMsQ0FBQyxDQUFBO0FBRU4sQ0FBQyxDQUFBO0FBakNZLFFBQUEsR0FBRyxPQWlDZjtBQUVNLE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDckIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sUUFBUSxHQUFHLElBQUEsZ0ZBQXlDLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RFLE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUNoQyxLQUFLLEVBQUUsR0FBRyxDQUFDLElBQXdDO0tBQ3BELENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDbkIsQ0FBQyxDQUFBO0FBVFUsUUFBQSxJQUFJLFFBU2QifQ==