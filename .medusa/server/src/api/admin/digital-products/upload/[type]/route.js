"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const core_flows_1 = require("@medusajs/medusa/core-flows");
const utils_1 = require("@medusajs/framework/utils");
const POST = async (req, res) => {
    const access = req.params.type === "main" ? "private" : "public";
    const input = req.files;
    if (!input?.length) {
        throw new utils_1.MedusaError(utils_1.MedusaError.Types.INVALID_DATA, "No files were uploaded");
    }
    const { result } = await (0, core_flows_1.uploadFilesWorkflow)(req.scope).run({
        input: {
            files: input?.map((f) => ({
                filename: f.originalname,
                mimeType: f.mimetype,
                content: f.buffer.toString("binary"),
                access,
            })),
        },
    });
    res.status(200).json({ files: result });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2RpZ2l0YWwtcHJvZHVjdHMvdXBsb2FkL1t0eXBlXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSw0REFBaUU7QUFDakUscURBQXVEO0FBRWhELE1BQU0sSUFBSSxHQUFHLEtBQUssRUFDdkIsR0FBK0IsRUFDL0IsR0FBbUIsRUFDbkIsRUFBRTtJQUNGLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUE7SUFDaEUsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEtBQThCLENBQUE7SUFFaEQsSUFBSSxDQUFDLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQztRQUNuQixNQUFNLElBQUksbUJBQVcsQ0FDbkIsbUJBQVcsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUM5Qix3QkFBd0IsQ0FDekIsQ0FBQTtJQUNILENBQUM7SUFFRCxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLGdDQUFtQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDMUQsS0FBSyxFQUFFO1lBQ0wsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hCLFFBQVEsRUFBRSxDQUFDLENBQUMsWUFBWTtnQkFDeEIsUUFBUSxFQUFFLENBQUMsQ0FBQyxRQUFRO2dCQUNwQixPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUNwQyxNQUFNO2FBQ1AsQ0FBQyxDQUFDO1NBQ0o7S0FDRixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQ3pDLENBQUMsQ0FBQTtBQTFCWSxRQUFBLElBQUksUUEwQmhCIn0=