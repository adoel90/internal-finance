"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const domain_1 = require("../../../../modules/domain");
const GET = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: "Domain name is required" });
        }
        // Check internal availability first
        const domainModuleService = req.scope.resolve(domain_1.DOMAIN_MODULE);
        if (domainModuleService) {
            const existingDomains = await domainModuleService.listDomains({
                name: name
            });
            if (existingDomains && existingDomains.length > 0) {
                return res.json({ available: false });
            }
        }
        const vercelToken = process.env.VERCEL_PUBLIC_TOKEN;
        const baseUrlVercel = process.env.VERCEL_ENDPOINT;
        if (!vercelToken) {
            return res.status(500).json({ error: "Vercel token is not configured" });
        }
        if (!process.env.VERCEL_ENDPOINT) {
            return res.status(500).json({ error: "Vercel endpoint is not configured       " });
        }
        const response = await fetch(`${baseUrlVercel}/registrar/domains/${name}/availability`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${vercelToken}`,
            },
        });
        if (!response.ok) {
            return res
                .status(response.status)
                .json({ error: `Vercel API error: ${response.statusText}` });
        }
        const result = await response.json();
        return res.json(result);
    }
    catch (error) {
        console.error("Failed when checking domain status:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
exports.GET = GET;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3QvZG9tYWluL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLHVEQUEwRDtBQUVuRCxNQUFNLEdBQUcsR0FBRyxLQUFLLEVBQUUsR0FBa0IsRUFBRSxHQUFtQixFQUFFLEVBQUU7SUFDbkUsSUFBSSxDQUFDO1FBQ0gsTUFBTSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFFMUIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ1YsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx5QkFBeUIsRUFBRSxDQUFDLENBQUE7UUFDbkUsQ0FBQztRQUVELG9DQUFvQztRQUNwQyxNQUFNLG1CQUFtQixHQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLHNCQUFhLENBQUMsQ0FBQTtRQUNqRSxJQUFJLG1CQUFtQixFQUFFLENBQUM7WUFDeEIsTUFBTSxlQUFlLEdBQUcsTUFBTSxtQkFBbUIsQ0FBQyxXQUFXLENBQUM7Z0JBQzVELElBQUksRUFBRSxJQUFJO2FBQ1gsQ0FBQyxDQUFBO1lBRUYsSUFBSSxlQUFlLElBQUksZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDbEQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDdkMsQ0FBQztRQUNILENBQUM7UUFFRCxNQUFNLFdBQVcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFBO1FBQ25ELE1BQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFBO1FBQ2pELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNmLE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFBO1FBQ3hFLENBQUM7UUFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsQ0FBQztZQUNqQyxPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLDBDQUEwQyxFQUFFLENBQUMsQ0FBQTtRQUNwRixDQUFDO1FBRUQsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQzFCLEdBQUcsYUFBYSxzQkFBc0IsSUFBSSxlQUFlLEVBQ3pEO1lBQ0UsTUFBTSxFQUFFLEtBQUs7WUFDYixPQUFPLEVBQUU7Z0JBQ1AsY0FBYyxFQUFFLGtCQUFrQjtnQkFDbEMsYUFBYSxFQUFFLFVBQVUsV0FBVyxFQUFFO2FBQ3ZDO1NBQ0YsQ0FDRixDQUFBO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsQ0FBQztZQUNqQixPQUFPLEdBQUc7aUJBQ1AsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7aUJBQ3ZCLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxxQkFBcUIsUUFBUSxDQUFDLFVBQVUsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUNoRSxDQUFDO1FBRUQsTUFBTSxNQUFNLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUE7UUFFcEMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQ3pCLENBQUM7SUFBQyxPQUFPLEtBQVUsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMscUNBQXFDLEVBQUUsS0FBSyxDQUFDLENBQUE7UUFDM0QsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSx1QkFBdUIsRUFBRSxDQUFDLENBQUE7SUFDakUsQ0FBQztBQUNILENBQUMsQ0FBQTtBQXJEWSxRQUFBLEdBQUcsT0FxRGYifQ==