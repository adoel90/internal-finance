"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("@medusajs/framework/http");
const validation_schemas_1 = require("./validation-schemas");
const multer_1 = __importDefault(require("multer"));
const utils_1 = require("@medusajs/framework/utils");
const cors_1 = __importDefault(require("cors"));
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
exports.default = (0, http_1.defineMiddlewares)({
    routes: [
        {
            matcher: "/manager",
            method: "POST",
            middlewares: [
                (0, http_1.authenticate)("manager", ["session", "bearer"], {
                    allowUnregistered: true,
                }),
            ]
        },
        {
            matcher: "/manager*",
            middlewares: [
                (req, res, next) => {
                    const config = req.scope.resolve("configModule").projectConfig.http;
                    return (0, cors_1.default)({
                        origin: (0, utils_1.parseCorsOrigins)(config.storeCors),
                        credentials: true,
                    })(req, res, next);
                },
            ],
        },
        {
            matcher: "/manager/me*",
            middlewares: [
                (0, http_1.authenticate)("manager", ["session", "bearer"]),
            ]
        },
        {
            matcher: "/admin/digital-products",
            method: "POST",
            middlewares: [
                (0, http_1.validateAndTransformBody)(validation_schemas_1.createDigitalProductsSchema),
            ],
        },
        {
            matcher: "/admin/digital-products/upload**",
            method: "POST",
            middlewares: [
                upload.array("files"),
            ]
        },
        {
            matcher: "/finance*",
            middlewares: [
                (req, res, next) => {
                    const configModule = req.scope.resolve("configModule");
                    return (0, cors_1.default)({
                        origin: (0, utils_1.parseCorsOrigins)(configModule.projectConfig.http.storeCors),
                        credentials: true,
                    })(req, res, next);
                },
            ],
        },
    ],
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBT2lDO0FBQ2pDLDZEQUFrRTtBQUNsRSxvREFBMkI7QUFFM0IscURBQTREO0FBQzVELGdEQUF1QjtBQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFFMUQsa0JBQWUsSUFBQSx3QkFBaUIsRUFBQztJQUMvQixNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFO2dCQUNYLElBQUEsbUJBQVksRUFBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUU7b0JBQzdDLGlCQUFpQixFQUFFLElBQUk7aUJBQ3hCLENBQUM7YUFDSDtTQUNGO1FBQ0E7WUFDQyxPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUU7Z0JBQ1gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO29CQUNqQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFBO29CQUNuRSxPQUFPLElBQUEsY0FBSSxFQUFDO3dCQUNWLE1BQU0sRUFBRSxJQUFBLHdCQUFnQixFQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7d0JBQzFDLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDcEIsQ0FBQzthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxJQUFBLG1CQUFZLEVBQUMsU0FBUyxFQUFFLENBQUMsU0FBUyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQy9DO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSx5QkFBeUI7WUFDbEMsTUFBTSxFQUFFLE1BQU07WUFDZCxXQUFXLEVBQUU7Z0JBQ1gsSUFBQSwrQkFBd0IsRUFBQyxnREFBMkIsQ0FBQzthQUN0RDtTQUNGO1FBQ0Q7WUFDRSxPQUFPLEVBQUUsa0NBQWtDO1lBQzNDLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFO2dCQUNYLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDO2FBQ3RCO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxXQUFXO1lBQ3BCLFdBQVcsRUFBRTtnQkFDWCxDQUNFLEdBQWtCLEVBQ2xCLEdBQW1CLEVBQ25CLElBQXdCLEVBQ3hCLEVBQUU7b0JBQ0YsTUFBTSxZQUFZLEdBQ2hCLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFBO29CQUVuQyxPQUFPLElBQUEsY0FBSSxFQUFDO3dCQUNWLE1BQU0sRUFBRSxJQUFBLHdCQUFnQixFQUN0QixZQUFZLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQzFDO3dCQUNELFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDcEIsQ0FBQzthQUNGO1NBQ0Y7S0FDRjtDQUNGLENBQUMsQ0FBQSJ9