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
            matcher: "/staff*",
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
            matcher: "/staff",
            method: "POST",
            middlewares: [
                (0, http_1.authenticate)("staff", ["session", "bearer"], {
                    allowUnregistered: true,
                }),
            ]
        },
        {
            matcher: "/staff/me*",
            middlewares: [
                (0, http_1.authenticate)("staff", ["session", "bearer"]),
            ]
        },
        {
            matcher: "/user",
            method: "POST",
            middlewares: [
                (0, http_1.authenticate)("user", ["session", "bearer"], {
                    allowUnregistered: true,
                }),
            ]
        },
        {
            matcher: "/user/me*",
            middlewares: [
                (0, http_1.authenticate)("user", ["session", "bearer"]),
            ]
        },
        {
            matcher: "/member",
            method: "POST",
            middlewares: [
                (0, http_1.authenticate)("member", ["session", "bearer"], {
                    allowUnregistered: true,
                }),
            ]
        },
        {
            matcher: "/member/me*",
            middlewares: [
                (0, http_1.authenticate)("member", ["session", "bearer"]),
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
            matcher: "/store/payment/upload-payment-proof",
            method: "POST",
            middlewares: [
                (req, res, next) => {
                    console.log("Middleware hitting /store/payment/upload-payment-proof");
                    next();
                },
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
        {
            matcher: "/scrape*",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWlkZGxld2FyZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYXBpL21pZGRsZXdhcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsbURBT2lDO0FBQ2pDLDZEQUFrRTtBQUNsRSxvREFBMkI7QUFFM0IscURBQTREO0FBQzVELGdEQUF1QjtBQUN2QixNQUFNLE1BQU0sR0FBRyxJQUFBLGdCQUFNLEVBQUMsRUFBRSxPQUFPLEVBQUUsZ0JBQU0sQ0FBQyxhQUFhLEVBQUUsRUFBRSxDQUFDLENBQUE7QUFFMUQsa0JBQWUsSUFBQSx3QkFBaUIsRUFBQztJQUMvQixNQUFNLEVBQUU7UUFDTjtZQUNFLE9BQU8sRUFBRSxVQUFVO1lBQ25CLE1BQU0sRUFBRSxNQUFNO1lBQ2QsV0FBVyxFQUFFO2dCQUNYLElBQUEsbUJBQVksRUFBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLEVBQUU7b0JBQzdDLGlCQUFpQixFQUFFLElBQUk7aUJBQ3hCLENBQUM7YUFDSDtTQUNGO1FBQ0E7WUFDQyxPQUFPLEVBQUUsV0FBVztZQUNwQixXQUFXLEVBQUU7Z0JBQ1gsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO29CQUNqQixNQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFBO29CQUNuRSxPQUFPLElBQUEsY0FBSSxFQUFDO3dCQUNWLE1BQU0sRUFBRSxJQUFBLHdCQUFnQixFQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUM7d0JBQzFDLFdBQVcsRUFBRSxJQUFJO3FCQUNsQixDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQTtnQkFDcEIsQ0FBQzthQUNGO1NBQ0Y7UUFDRDtZQUNFLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLFdBQVcsRUFBRTtnQkFDWCxJQUFBLG1C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