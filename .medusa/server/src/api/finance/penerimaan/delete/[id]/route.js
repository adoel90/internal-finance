"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DELETE = void 0;
const cashflow_1 = require("src/modules/cashflow");
const DELETE = async (req, res) => {
    const cashflowService = req.scope.resolve(cashflow_1.CASHFLOW_MODULE);
    const { id } = req.params;
    cashflowService.deletePenerimaans(id);
    res.json({ message: "Penerimaan deleted successfully" });
};
exports.DELETE = DELETE;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL2ZpbmFuY2UvcGVuZXJpbWFhbi9kZWxldGUvW2lkXS9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFJQSxtREFBdUQ7QUFJaEQsTUFBTSxNQUFNLEdBQUcsS0FBSyxFQUN2QixHQUFrQixFQUNsQixHQUFtQixFQUNyQixFQUFFO0lBRUEsTUFBTSxlQUFlLEdBQTBCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLDBCQUFlLENBQUMsQ0FBQztJQUVsRixNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztJQUUxQixlQUFlLENBQUMsaUJBQWlCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFFdEMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxpQ0FBaUMsRUFBRSxDQUFDLENBQUM7QUFDN0QsQ0FBQyxDQUFBO0FBWlksUUFBQSxNQUFNLFVBWWxCIn0=