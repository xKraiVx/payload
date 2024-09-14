import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "roles",
      type: "select",
      hasMany: true,
      defaultValue: ["user"],
      options: [
        {
          label: "User",
          value: "user",
        },
        {
          label: "Admin",
          value: "admin",
        },
      ],
      required: true,
    },
  ],
};

export default Users;
