"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const utils_1 = require("@medusajs/framework/utils");
// export const POST = async (
//   req: MedusaRequest,
//   res: MedusaResponse
// ) => {
//   const workflow = createRoleWorkflow(req.scope);
//   const result = await workflow.run({
//     input: req.body as { name: string}
//   });
//   res.json(result);
// }
const GET = async (req, res) => {
    const query = req.scope.resolve(utils_1.ContainerRegistrationKeys.QUERY);
    const result = await query.graph({
        entity: "user",
        fields: ["*"],
        // pagination,
        // filters
    });
    res.json({
        roles: result.data,
        pagination: {
            //   take: take,
            //   skip: skip,
            total: result.metadata?.count || result?.data?.length || 0
        }
    });
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3VzZXJzL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUtBLHFEQUVrQztBQUtsQyw4QkFBOEI7QUFDOUIsd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QixTQUFTO0FBQ1Qsb0RBQW9EO0FBQ3BELHdDQUF3QztBQUN4Qyx5Q0FBeUM7QUFDekMsUUFBUTtBQUNSLHNCQUFzQjtBQUN0QixJQUFJO0FBR0csTUFBTSxHQUFHLEdBQUcsS0FBSyxFQUN0QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsaUNBQXlCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHakUsTUFBTSxNQUFNLEdBQUcsTUFBTSxLQUFLLENBQUMsS0FBSyxDQUFDO1FBQy9CLE1BQU0sRUFBRSxNQUFNO1FBQ2QsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDO1FBQ2IsY0FBYztRQUNkLFVBQVU7S0FDWCxDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJO1FBQ2xCLFVBQVUsRUFBRTtZQUNaLGdCQUFnQjtZQUNoQixnQkFBZ0I7WUFDZCxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVEsRUFBRSxLQUFLLElBQUksTUFBTSxFQUFFLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQztTQUMzRDtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQTtBQXRCWSxRQUFBLEdBQUcsT0FzQmYifQ==