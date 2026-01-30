import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import PaymentDirectBsiService from "./src/modules/payment-direct-bsi"

loadEnv(process.env.NODE_ENV || "development", process.cwd())



module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    redisUrl : process.env.REDIS_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
    workerMode: process.env.MEDUSA_WORKER_MODE as "shared" | "worker" | "server",
  },

  admin: {
    disable: process.env.DISABLE_MEDUSA_ADMIN === "true",
    backendUrl: process.env.MEDUSA_BACKEND_URL,
  },
  modules: [
    {
      resolve: "./src/modules/scrape",
    },
    {
      resolve: "./src/modules/billing",
    },
    {
      resolve: "./src/modules/member",
    }, 
    {
      resolve: "./src/modules/role",
    },  
    {
      resolve: "./src/modules/user",
    },    
    {
      resolve: "./src/modules/staff",
    },
    {
      resolve: "./src/modules/manager",
    },
    {
      resolve: "./src/modules/saldo",
    },
    {
      resolve: "./src/modules/cashflow",
    },
    {
      resolve: "./src/modules/blog"
    },
    {
      resolve: "./src/modules/digital-product"
    },
    {
      resolve: "./src/modules/payment-direct-midtrans"
    },
    // {
    //   resolve: "./src/modules/payment-direct-bsi"
    // },
    // {
    //   resolve: "./src/modules/payment"
    // },
    // {
    //     resolve: "@medusajs/payment",
    //     options: {},
    // },
    {
      resolve: '@medusajs/medusa/payment',
      options: {
        providers: [
          {
            resolve: '@medusajs/payment-stripe',
            id: 'stripe',
            options: {
              apiKey: process.env.STRIPE_API_KEY,
              // webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
            },
          },
          {
            resolve: './src/modules/payment',
            id: 'midtrans',
            options: {
              apiKey: process.env.MIDTRANS_SERVER_KEY,
              // webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
            },
          },
          {
            resolve: PaymentDirectBsiService,
            id: 'BSI',
            options: {},
          },



        ],
      },
    },
    {
      resolve: "@medusajs/fulfillment",
      options: {
        providers: [
          {
            resolve: "@medusajs/fulfillment-manual",
            id: "manual",
          },
          {
            resolve: "./src/modules/digital-product-fulfillment",
            id: "digital"
          }
        ],
      },
    },
    {
      resolve: "@medusajs/notification",
      options: {
        providers: [
          {
            resolve: "@medusajs/notification-local",
            id: "local",
            options: {
              name: "Local Notification Provider",
              channels: ["email"],
            },
          },
        ],
      },
    },
    
    //  {
    //   resolve: "@medusajs/medusa/cache-redis",
    //   options: {
    //     redisUrl: process.env.REDIS_URL,
    //   },
    // },
    // {
    //   resolve: "@medusajs/medusa/event-bus-redis",
    //   options: {
    //     redisUrl: process.env.REDIS_URL,
    //   },
    // },
    // {
    //   resolve: "@medusajs/medusa/workflow-engine-redis",
    //   options: {
    //     redis: {
    //       url: process.env.REDIS_URL,
    //     },
    //   },
    // },
  ],
  plugins: [
    //   `medusa-fulfillment-manual`,
    //  `medusa-payment-manual`,
    // {
    //   resolve: "./src/plugins/midtrans", // path relatif ke root project
    //   options: {
    //     // optional: konfigurasi tambahan untuk plugin
    //   },
    // },
  ],
  // admin: {
  //   vite: () => {
  //     return {
  //       optimizeDeps: {
  //         include: ["qs"],
  //       },
  //     };
  //   },
  // },
})
