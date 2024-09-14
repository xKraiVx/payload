import { CollectionConfig } from "payload/types";
import isUser from "../access/isUser";
import isAdmin from "../access/isAdmin";
import { useCreateUuid } from "../hooks/useCreateUuid.hooks";

const Comments: CollectionConfig = {
  slug: "comments",
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
    },
    {
      name: "text",
      type: "textarea",
      required: true,
    },
    {
      name: "post",
      type: "relationship",
      relationTo: "posts",
      required: true,
    },
  ],
  access: {
    read: (args) => {
      if (isAdmin(args)) return true;

      console.log("USER - ", args.req.user, args.req.readable);

      return {
        _status: {
          equals: "published",
        },
      };
    },
    create: isUser,
    update: isAdmin,
    delete: isAdmin,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeValidate: [useCreateUuid],
  },
};

export default Comments;
