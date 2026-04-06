const { defineLink } = require("@medusajs/framework/utils");

const link = defineLink(
  {
    linkable: "domainModule.domain",
    isList: true,
  },
  {
    linkable: "customerModule.customer"
  }
);
console.log(JSON.stringify(link, null, 2));