"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const fulfill_digital_order_1 = require("../workflows/fulfill-digital-order");
async function digitalProductOrderCreatedHandler({ event: { data }, container, }) {
    await (0, fulfill_digital_order_1.fulfillDigitalOrderWorkflow)(container).run({
        input: {
            id: data.id
        }
    });
}
exports.default = digitalProductOrderCreatedHandler;
exports.config = {
    event: "digital_product_order.created",
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFuZGxlLWRpZ2l0YWwtb3JkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvc3Vic2NyaWJlcnMvaGFuZGxlLWRpZ2l0YWwtb3JkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBSUEsOEVBQWdGO0FBRWhGLEtBQUssVUFBVSxpQ0FBaUMsQ0FBQyxFQUMvQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFDZixTQUFTLEdBQ3NCO0lBQy9CLE1BQU0sSUFBQSxtREFBMkIsRUFBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUM7UUFDL0MsS0FBSyxFQUFFO1lBQ0wsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFO1NBQ1o7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDO0FBRUQsa0JBQWUsaUNBQWlDLENBQUE7QUFFbkMsUUFBQSxNQUFNLEdBQXFCO0lBQ3RDLEtBQUssRUFBRSwrQkFBK0I7Q0FDdkMsQ0FBQSJ9