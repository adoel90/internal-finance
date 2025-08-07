"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POST = void 0;
const create_digital_product_order_1 = __importDefault(require("../../../../../workflows/create-digital-product-order"));
const POST = async (req, res) => {
    const { result } = await (0, create_digital_product_order_1.default)(req.scope)
        .run({
        input: {
            cart_id: req.params.id
        }
    });
    res.json({
        type: "order",
        ...result
    });
};
exports.POST = POST;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvYXBpL3N0b3JlL2NhcnRzL1tpZF0vY29tcGxldGUtZGlnaXRhbC9yb3V0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSx5SEFBc0c7QUFFL0YsTUFBTSxJQUFJLEdBQUcsS0FBSyxFQUN2QixHQUFrQixFQUNsQixHQUFtQixFQUNuQixFQUFFO0lBQ0YsTUFBTSxFQUFFLE1BQU0sRUFBRSxHQUFHLE1BQU0sSUFBQSxzQ0FBaUMsRUFBQyxHQUFHLENBQUMsS0FBSyxDQUFDO1NBQ2xFLEdBQUcsQ0FBQztRQUNILEtBQUssRUFBRTtZQUNMLE9BQU8sRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7U0FDdkI7S0FDRixDQUFDLENBQUE7SUFFSixHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsSUFBSSxFQUFFLE9BQU87UUFDYixHQUFHLE1BQU07S0FDVixDQUFDLENBQUE7QUFDSixDQUFDLENBQUE7QUFmWSxRQUFBLElBQUksUUFlaEIifQ==