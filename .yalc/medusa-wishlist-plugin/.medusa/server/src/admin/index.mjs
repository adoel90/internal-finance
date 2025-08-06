import { jsxs, jsx } from "react/jsx-runtime";
import { defineWidgetConfig } from "@medusajs/admin-sdk";
import { Container, Heading, Text } from "@medusajs/ui";
import { useQuery } from "@tanstack/react-query";
import Medusa from "@medusajs/js-sdk";
const sdk = new Medusa({
  baseUrl: "/",
  debug: false,
  auth: {
    type: "session"
  }
});
const ProductWidget = ({
  data: product
}) => {
  const { data, isLoading } = useQuery({
    queryFn: () => sdk.client.fetch(`/admin/products/${product.id}/wishlist`),
    queryKey: [["products", product.id, "wishlist"]]
  });
  return /* @__PURE__ */ jsxs(Container, { className: "divide-y p-0", children: [
    /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between px-6 py-4", children: /* @__PURE__ */ jsx(Heading, { level: "h2", children: "Wishlist" }) }),
    /* @__PURE__ */ jsx(Text, { className: "px-6 py-4", children: isLoading ? "Loading..." : `This product is in ${data == null ? void 0 : data.count} wishlist(s).` })
  ] });
};
defineWidgetConfig({
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
export {
  plugin as default
};
