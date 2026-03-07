"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = GET;
exports.POST = POST;
exports.DELETE = DELETE;
const update_domain_1 = require("../../../../workflows/update-domain");
const delete_domain_1 = require("../../../../workflows/delete-domain");
const domain_1 = require("../../../../modules/domain");
async function GET(req, res) {
    const domainModuleService = req.scope.resolve(domain_1.DOMAIN_MODULE);
    const domain = await domainModuleService.retrieveDomain(req.params.id);
    res.json({ domain });
}
async function POST(req, res) {
    const { result } = await (0, update_domain_1.updateDomainWorkflow)(req.scope).run({
        input: {
            id: req.params.id,
            ...req.body,
        },
    });
    res.json({ domain: result });
}
async function DELETE(req, res) {
    await (0, delete_domain_1.deleteDomainWorkflow)(req.scope).run({
        input: req.params.id,
    });
    res.json({ id: req.params.id, object: "domain", deleted: true });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2RvbWFpbnMvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUtBLGtCQVFDO0FBRUQsb0JBWUM7QUFFRCx3QkFTQztBQXJDRCx1RUFBMEU7QUFDMUUsdUVBQTBFO0FBQzFFLHVEQUEwRDtBQUVuRCxLQUFLLFVBQVUsR0FBRyxDQUN2QixHQUFrQixFQUNsQixHQUFtQjtJQUVuQixNQUFNLG1CQUFtQixHQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHNCQUFhLENBQUMsQ0FBQTtJQUNqRSxNQUFNLE1BQU0sR0FBRyxNQUFNLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFBO0lBRXRFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQ3RCLENBQUM7QUFFTSxLQUFLLFVBQVUsSUFBSSxDQUN4QixHQUFrQixFQUNsQixHQUFtQjtJQUVuQixNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsTUFBTSxJQUFBLG9DQUFvQixFQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDM0QsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUNqQixHQUFHLEdBQUcsQ0FBQyxJQUFXO1NBQ25CO0tBQ0YsQ0FBQyxDQUFBO0lBRUYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO0FBQzlCLENBQUM7QUFFTSxLQUFLLFVBQVUsTUFBTSxDQUMxQixHQUFrQixFQUNsQixHQUFtQjtJQUVuQixNQUFNLElBQUEsb0NBQW9CLEVBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUN4QyxLQUFLLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO0tBQ3JCLENBQUMsQ0FBQTtJQUVGLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQTtBQUNsRSxDQUFDIn0=