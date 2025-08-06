"use strict";
const jsxRuntime = require("react/jsx-runtime");
const adminSdk = require("@medusajs/admin-sdk");
const ui = require("@medusajs/ui");
const reactQuery = require("@tanstack/react-query");
const Medusa = require("@medusajs/js-sdk");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
const Medusa__default = /* @__PURE__ */ _interopDefault(Medusa);
const sdk = new Medusa__default.default({
  baseUrl: "/",
  debug: false,
  auth: {
    type: "session"
  }
});
const ProductWidget = ({
  data: product
}) => {
  const { data, isLoading } = reactQuery.useQuery({
    queryFn: () => sdk.client.fetch(`/admin/products/${product.id}/wishlist`),
    queryKey: [["products", product.id, "wishlist"]]
  });
  return /* @__PURE__ */ jsxRuntime.jsxs(ui.Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsxRuntime.jsx("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsxRuntime.jsx(ui.Heading, { level: "h2", children: "Wishlist" }) }),
    /* @__PURE__ */ jsxRuntime.jsx(ui.Text, { className: "px-6 py-4", children: isLoading ? "Loading..." : `This product is in ${data == null ? void 0 : data.count} wishlist(s).` })
  ] });
};
adminSdk.defineWidgetConfig({
  zone: "product.details.before"
});
const widgetModule = { widgets: [
  {
    Component: ProductWidget,
    zone: ["product.details.before"]
  }
] };
const routeModule = {
  routes: []
};
const menuItemModule = {
  menuItems: []
};
const formModule = { customFields: {} };
const displayModule = {
  displays: {}
};
const plugin = {
  widgetModule,
  routeModule,
  menuItemModule,
  formModule,
  displayModule
};
module.exports = plugin;
