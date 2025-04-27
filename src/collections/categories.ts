import { slugField } from "@/fields/slug/slug-field";
import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "category",
  admin: {
    useAsTitle: "name",
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    ...slugField(),

    {
      name: "color",
      type: "text",
    },
    {
      name: "parent",
      type: "relationship",
      relationTo: "category",
      hasMany: false,
    },
    {
      name: "subcategories",
      type: "join",
      collection: "category",
      on: "parent",
      hasMany: true,
    },
  ],
};
