"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET = void 0;
const GET = async (req, res) => {
    try {
        const { name } = req.query;
        if (!name) {
            return res.status(400).json({ error: "Domain name is required" });
        }
        const vercelToken = process.env.VERCEL_PUBLIC_TOKEN;
        const baseUrlVercel = process.env.VERCEL_ENDPOINT;
        if (!vercelToken) {
            return res.status(500).json({ error: "Vercel token is not configured" });
        }
        if (!process.env.VERCEL_ENDPOINT) {
            return res.status(500).json({ error: "Vercel endpoint is not configured       " });
        }
        const response = await fetch(`${baseUrlVercel}/domains/status?name=${name}`, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL3Byb2R1Y3QvZG9tYWluL3JvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVPLE1BQU0sR0FBRyxHQUFHLEtBQUssRUFBRSxHQUFrQixFQUFFLEdBQW1CLEVBQUUsRUFBRTtJQUNuRSxJQUFJLENBQUM7UUFDSCxNQUFNLEVBQUUsSUFBSSxFQUFFLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQTtRQUUxQixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDVixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHlCQUF5QixFQUFFLENBQUMsQ0FBQTtRQUNuRSxDQUFDO1FBRUQsTUFBTSxXQUFXLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQTtRQUNuRCxNQUFNLGFBQWEsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQTtRQUNqRCxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDZixPQUFPLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLGdDQUFnQyxFQUFFLENBQUMsQ0FBQTtRQUN4RSxDQUFDO1FBQ0wsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDakMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSwwQ0FBMEMsRUFBRSxDQUFDLENBQUE7UUFDcEYsQ0FBQztRQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUMxQixHQUFHLGFBQWEsd0JBQXdCLElBQUksRUFBRSxFQUM5QztZQUNFLE1BQU0sRUFBRSxLQUFLO1lBQ2IsT0FBTyxFQUFFO2dCQUNQLGNBQWMsRUFBRSxrQkFBa0I7Z0JBQ2xDLGFBQWEsRUFBRSxVQUFVLFdBQVcsRUFBRTthQUN2QztTQUNGLENBQ0YsQ0FBQTtRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLENBQUM7WUFDakIsT0FBTyxHQUFHO2lCQUNQLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2lCQUN2QixJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUscUJBQXFCLFFBQVEsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDaEUsQ0FBQztRQUVELE1BQU0sTUFBTSxHQUFHLE1BQU0sUUFBUSxDQUFDLElBQUksRUFBRSxDQUFBO1FBRXBDLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QixDQUFDO0lBQUMsT0FBTyxLQUFVLEVBQUUsQ0FBQztRQUNwQixPQUFPLENBQUMsS0FBSyxDQUFDLHFDQUFxQyxFQUFFLEtBQUssQ0FBQyxDQUFBO1FBQzNELE9BQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsdUJBQXVCLEVBQUUsQ0FBQyxDQUFBO0lBQ2pFLENBQUM7QUFDSCxDQUFDLENBQUE7QUF6Q1ksUUFBQSxHQUFHLE9BeUNmIn0=