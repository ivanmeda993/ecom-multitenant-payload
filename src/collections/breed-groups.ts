import type { CollectionConfig } from "payload";

export const BreedGroups: CollectionConfig = {
  slug: "breedGroups",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true, // Everyone can read breed groups
  },
  fields: [
    {
      name: "name",
      label: "Group Name",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "slug",
      label: "Slug",
      type: "text",
      required: true,
      unique: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "color",
      label: "Color",
      type: "text",
      required: false,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
  ],
};
