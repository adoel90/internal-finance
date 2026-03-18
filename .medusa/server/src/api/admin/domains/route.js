"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = POST;
exports.GET = GET;
const create_domain_1 = require("../../../workflows/create-domain");
const domain_1 = require("../../../modules/domain");
async function POST(req, res) {
    const { result } = await (0, create_domain_1.createDomainWorkflow)(req.scope).run({
        input: req.body,
    });
    res.json({ domain: result });
}
async function GET(req, res) {
    const domainModuleService = req.scope.resolve(domain_1.DOMAIN_MODULE);
    const domains = await domainModuleService.listDomains();
    res.json({ domains });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2FkbWluL2RvbWFpbnMvcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFJQSxvQkFTQztBQUVELGtCQVFDO0FBdEJELG9FQUF1RTtBQUN2RSxvREFBdUQ7QUFFaEQsS0FBSyxVQUFVLElBQUksQ0FDeEIsR0FBa0IsRUFDbEIsR0FBbUI7SUFFbkIsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxvQ0FBb0IsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDO1FBQzNELEtBQUssRUFBRSxHQUFHLENBQUMsSUFBVztLQUN2QixDQUFDLENBQUE7SUFFRixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUE7QUFDOUIsQ0FBQztBQUVNLEtBQUssVUFBVSxHQUFHLENBQ3ZCLEdBQWtCLEVBQ2xCLEdBQW1CO0lBRW5CLE1BQU0sbUJBQW1CLEdBQVEsR0FBRyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsc0JBQWEsQ0FBQyxDQUFBO0lBQ2pFLE1BQU0sT0FBTyxHQUFHLE1BQU0sbUJBQW1CLENBQUMsV0FBVyxFQUFFLENBQUE7SUFFdkQsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUE7QUFDdkIsQ0FBQyJ9