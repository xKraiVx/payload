import { CollectionConfig } from "payload/types";
import HeroWidget from "../widgets/Hero.widget";
import BenefitsWidget from "../widgets/Benefits.widget";
import { useCreateUuid } from "../hooks/useCreateUuid.hooks";

const Pages: CollectionConfig = {
  slug: "pages",
  fields: [
    {
      name: "id",
      label: "ID (autogenerate)",
      type: "text",
    },
    {
      name: "title",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "widgets",
      type: "blocks",
      blocks: [HeroWidget, BenefitsWidget],
      admin: {
        initCollapsed: true,
      },
    },
    {
      label: "Additional Settings",
      type: "collapsible",
      fields: [
        {
          label: "Color Schema",
          name: "colorSchema",
          type: "radio",
          options: [
            {
              label: "Light",
              value: "light",
            },
            {
              label: "Dark",
              value: "dark",
            },
          ],
        },
        {
          label: "Sub Color",
          name: "subColor",
          type: "radio",
          options: [
            {
              label: "Red",
              value: "red",
            },
            {
              label: "Blue",
              value: "blue",
            },
          ],
          admin: {
            condition: (data) => {
              if (data.colorSchema === "light") {
                return true;
              }

              return false;
            },
          },
        },
      ],
    },
  ],
  access: {
    read: ({ req }) => {
      if (req.user) return true;

      return {
        _status: {
          equals: "published",
        },
      };
    },
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeValidate: [useCreateUuid],
  },
};

export default Pages;
