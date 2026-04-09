"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const cashflow_1 = require("src/modules/cashflow");
const DELETE = async (req, res) => {
    const cashflowService = req.scope.resolve(cashflow_1.CASHFLOW_MODULE);
    const { id } = req.params;
    cashflowService.deletePengeluarans(id);
    res.json({ message: "Pengeluaran deleted successfully" });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZ2VsdWFyYW4vZGVsZXRlL1tpZF0vcm91dGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsbURBQXVEO0FBSWhELE1BQU0sTUFBTSxHQUFHLEtBQUssRUFDdkIsR0FBa0IsRUFDbEIsR0FBbUIsRUFDckIsRUFBRTtJQUVBLE1BQU0sZUFBZSxHQUEwQixHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQywwQkFBZSxDQUFDLENBQUM7SUFFbEYsTUFBTSxFQUFFLEVBQUUsRUFBRSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7SUFFMUIsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBRXZDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsa0NBQWtDLEVBQUUsQ0FBQyxDQUFDO0FBQzlELENBQUMsQ0FBQTtBQVpZLFFBQUEsTUFBTSxVQVlsQiJ9