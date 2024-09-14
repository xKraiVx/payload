import { CollectionConfig } from "payload/types";
import isAdmin from "../access/isAdmin";
import { useCreateUuid } from "../hooks/useCreateUuid.hooks";

const Posts: CollectionConfig = {
  slug: "posts",
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
      name: "text",
      type: "richText",
      required: true,
    },
    {
      name: "comments",
      type: "relationship",
      relationTo: "comments",
      hasMany: true,
    },
  ],
  access: {
    read: () => true,
    create: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  versions: {
    drafts: true,
  },
  hooks: {
    beforeValidate: [useCreateUuid],
  },
  endpoints: [
    {
      path: "/:id/add-comment",
      method: "post",
      handler: async (req, res, next) => {
        const { id: postId } = req.params;

        const { text, title } = req.body;

        const data = await req.payload.create({
          collection: "comments",
          data: {
            title,
            text,
            post: postId,
          },
        });

        res.status(200).send(data);
      },
    },
  ],
};

export default Posts;
