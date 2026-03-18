"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiUsage = void 0;
const utils_1 = require("@medusajs/framework/utils");
exports.ApiUsage = utils_1.model.define("api_usage", {
    id: utils_1.model.id().primaryKey(),
    user_id: utils_1.model.text(), // foreign-key ke user
    api_key_id: utils_1.model.text().index(),
    api_name: utils_1.model.text(),
    date: utils_1.model.dateTime(),
    // format: YYYY-MM-DD (daily aggregation)
    request_count: utils_1.model.number().default(0),
    success_count: utils_1.model.number().default(0),
    failed_count: utils_1.model.number().default(0),
    plan_id: utils_1.model.text().nullable(),
    metadata: utils_1.model.json().nullable(),
});
exports.default = exports.ApiUsage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLXVzYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL21vZHVsZXMvYmlsbGluZy9tb2RlbHMvYXBpLXVzYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLHFEQUFpRDtBQUVwQyxRQUFBLFFBQVEsR0FBRyxhQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtJQUNoRCxFQUFFLEVBQUUsYUFBSyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsRUFBRTtJQUMzQixPQUFPLEVBQUUsYUFBSyxDQUFDLElBQUksRUFBRSxFQUFpQixzQkFBc0I7SUFDNUQsVUFBVSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLEVBQUU7SUFFaEMsUUFBUSxFQUFFLGFBQUssQ0FBQyxJQUFJLEVBQUU7SUFFdEIsSUFBSSxFQUFFLGFBQUssQ0FBQyxRQUFRLEVBQUU7SUFDdEIseUNBQXlDO0lBRXpDLGFBQWEsRUFBRSxhQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUV4QyxhQUFhLEVBQUUsYUFBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFFeEMsWUFBWSxFQUFFLGFBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBRXZDLE9BQU8sRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0lBRWhDLFFBQVEsRUFBRSxhQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFO0NBQ2xDLENBQUMsQ0FBQTtBQUVGLGtCQUFlLGdCQUFRLENBQUMifQ==