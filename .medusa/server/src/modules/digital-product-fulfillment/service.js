"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@medusajs/framework/utils");
class DigitalProductFulfillmentService extends utils_1.AbstractFulfillmentProviderService {
    constructor() {
        super();
    }
    async getFulfillmentOptions() {
        return [
            {
                id: "digital-fulfillment",
            },
        ];
    }
    async validateFulfillmentData(optionData, data, context) {
        return data;
    }
    async validateOption(data) {
        return true;
    }
    async createFulfillment(data, items, order, fulfillment) {
        // No data is being sent anywhere
        return {
            data,
            labels: []
        };
    }
    async cancelFulfillment() {
        return {};
    }
    async createReturnFulfillment() {
        return {};
    }
}
DigitalProductFulfillmentService.identifier = "digital";
exports.default = DigitalProductFulfillmentService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9tb2R1bGVzL2RpZ2l0YWwtcHJvZHVjdC1mdWxmaWxsbWVudC9zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEscURBQThFO0FBRzlFLE1BQU0sZ0NBQWlDLFNBQVEsMENBQWtDO0lBRy9FO1FBQ0UsS0FBSyxFQUFFLENBQUE7SUFDVCxDQUFDO0lBRUQsS0FBSyxDQUFDLHFCQUFxQjtRQUN6QixPQUFPO1lBQ0w7Z0JBQ0UsRUFBRSxFQUFFLHFCQUFxQjthQUMxQjtTQUNGLENBQUE7SUFDSCxDQUFDO0lBRUQsS0FBSyxDQUFDLHVCQUF1QixDQUMzQixVQUFtQyxFQUNuQyxJQUE2QixFQUM3QixPQUFnQztRQUVoQyxPQUFPLElBQUksQ0FBQTtJQUNiLENBQUM7SUFFRCxLQUFLLENBQUMsY0FBYyxDQUFDLElBQXlCO1FBQzVDLE9BQU8sSUFBSSxDQUFBO0lBQ2IsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUIsQ0FDckIsSUFBNkIsRUFDN0IsS0FBeUQsRUFDekQsS0FBK0MsRUFDL0MsV0FBNEU7UUFFNUUsaUNBQWlDO1FBQ2pDLE9BQU87WUFDTCxJQUFJO1lBQ0osTUFBTSxFQUFFLEVBQUU7U0FDWCxDQUFBO0lBQ0gsQ0FBQztJQUVELEtBQUssQ0FBQyxpQkFBaUI7UUFDckIsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBRUQsS0FBSyxDQUFDLHVCQUF1QjtRQUMzQixPQUFPLEVBQUUsQ0FBQTtJQUNYLENBQUM7O0FBN0NNLDJDQUFVLEdBQUcsU0FBUyxDQUFBO0FBZ0QvQixrQkFBZSxnQ0FBZ0MsQ0FBQSJ9