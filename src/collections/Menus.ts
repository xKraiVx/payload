import { CollectionConfig } from "payload/types";
import isAdmin from "../access/isAdmin";
import { useCreateUuid } from "../hooks/useCreateUuid.hooks";

const Menus: CollectionConfig = {
  slug: "menus",
  fields: [
    {
      name: "id",
      label: "ID (autogenerate)",
      type: "text",
    },
    {
      name: "name",
      label: "Name",
      type: "text",
    },
    {
      label: "Menu List",
      name: "menuList",
      type: "array",
      labels: {
        singular: "Menu Item",
        plural: "Menu Items",
      },
      fields: [
        {
          name: "text",
          type: "text",
          label: "Text",
          required: true,
        },
        {
          name: "url",
          type: "text",
          label: "URL",
          required: true,
        },
        {
          name: "openInNewTab",
          type: "checkbox",
          label: "Open in new tab",
          defaultValue: false,
        },
      ],
    },
  ],
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  hooks: {
    beforeValidate: [useCreateUuid],
  },
};

export default Menus;
