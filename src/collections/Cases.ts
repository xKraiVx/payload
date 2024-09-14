import { CollectionConfig } from "payload/types";

const Cases: CollectionConfig = {
  slug: "cases",
  auth: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
  ],
};

export default Cases;
