import { 
  validateAndTransformBody,
  defineMiddlewares,
  MedusaNextFunction,
  MedusaRequest,
  MedusaResponse, 
  authenticate
} from "@medusajs/framework/http"
import { createDigitalProductsSchema } from "./validation-schemas"
import multer from "multer"
import { ConfigModule } from "@medusajs/framework/types"
import { parseCorsOrigins } from "@medusajs/framework/utils"
import cors from "cors"
const upload = multer({ storage: multer.memoryStorage() })

export default defineMiddlewares({
  routes: [
    {
      matcher: "/manager",
      method: "POST",
      middlewares: [
        authenticate("manager", ["session", "bearer"], {
          allowUnregistered: true,
        }),
      ]
    },
    {
      matcher: "/manager/me*",
      middlewares: [
        authenticate("manager", ["session", "bearer"]),
      ]
    },
    {
      matcher: "/admin/digital-products",
      method: "POST",
      middlewares: [
        validateAndTransformBody(createDigitalProductsSchema),
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
        (
          req: MedusaRequest,   
          res: MedusaResponse, 
          next: MedusaNextFunction
        ) => {
          const configModule: ConfigModule =
            req.scope.resolve("configModule")

          return cors({
            origin: parseCorsOrigins(
              configModule.projectConfig.http.storeCors
            ),
            credentials: true,
          })(req, res, next)
        },
      ],
    },
  ],
})