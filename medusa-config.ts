import { loadEnv, defineConfig } from '@medusajs/framework/utils'


loadEnv(process.env.NODE_ENV || "development", process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  },
  modules: [
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
      resolve: "./src/modules/payment"
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
