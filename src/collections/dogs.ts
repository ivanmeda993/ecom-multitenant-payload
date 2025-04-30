import { slugField } from "@/fields/slug/slug-field";
import type { CollectionConfig } from "payload";

export const Dogs: CollectionConfig = {
  slug: "dogs",
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
      name: "breed",
      type: "relationship",
      relationTo: "categories",
      admin: {
        position: "sidebar",
      },
      hasMany: false,
      required: true,
    },
    {
      name: "tags",
      type: "relationship",
      relationTo: "tags",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
      required: true,
    },
    {
      name: "description",
      type: "text",
    },
    {
      name: "age",
      type: "number",
      required: true,
    },
    {
      name: "price",
      type: "number",
      required: true,
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      hasMany: false,
      required: true,
    },
    {
      name: "coverImage",
      type: "upload",
      relationTo: "media",
      hasMany: false,
      required: true,
    },
    {
      name: "dogImages",
      type: "upload",
      relationTo: "media",
      hasMany: true,
    },
    {
      name: "refundPolicy",
      type: "select",
      options: [
        {
          label: "30 days",
          value: "30-days",
        },
        {
          label: "14 days",
          value: "14-days",
        },
        {
          label: "7 days",
          value: "7-days",
        },
        {
          label: "3 days",
          value: "3-days",
        },
        {
          label: "1 day",
          value: "1-day",
        },
        {
          label: "No refund",
          value: "no-refund",
        },
      ],
      defaultValue: "30-days",
    },
  ],
};