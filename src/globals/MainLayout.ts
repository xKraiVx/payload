import { GlobalConfig } from "payload/types";
import isAdmin from "../access/isAdmin";

const MainLayout: GlobalConfig = {
  slug: "mainLayout",
  fields: [
    {
      type: "tabs",
      tabs: [
        {
          label: "Header",
          description: "Main layout header",
          fields: [
            {
              name: "logo",
              label: "Logo",
              type: "upload",
              relationTo: "media",
            },
            {
              name: "nav",
              label: "Navigation",
              type: "relationship",
              relationTo: "menus",
            },
          ],
        },
        {
          label: "Footer",
          description: "Main layout footer",
          fields: [
            {
              name: "rights",
              label: "Rights",
              type: "text",
            },
          ],
        },
      ],
    },
  ],
  access: {
    read: () => true,
    update: isAdmin,
  },
};

export default MainLayout;
