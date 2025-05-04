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
      label: "Dog Name",
      required: true,
    },
    ...slugField(),
    {
      name: "breed",
      type: "relationship",
      label: "Breed",
      relationTo: "breeds",
      admin: {
        position: "sidebar",
      },
      hasMany: false,
      required: true,
    },
    {
      name: "badges",
      type: "relationship",
      relationTo: "tags",
      admin: {
        position: "sidebar",
      },
      hasMany: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "sex",
      type: "select",
      options: [
        {
          label: "Male",
          value: "male",
        },
        {
          label: "Female",
          value: "female",
        },
      ],
      required: true,
    },
    {
      name: "color",
      type: "text",
      required: true,
    },
    {
      name: "weight",
      type: "number",
      label: "Weight (kg)",
      required: true,
    },
    {
      name: "dateOfBirth",
      type: "date",
      label: "Date of Birth",
      required: true,
    },
    {
      name: "ageInWeeks",
      type: "number",
      label: "Age (in weeks)",
      required: true,
    },
    {
      name: "microchipped",
      type: "checkbox",
      label: "Microchipped",
      defaultValue: false,
    },
    {
      name: "vaccinated",
      type: "checkbox",
      label: "Vaccinated",
      defaultValue: false,
    },
    {
      name: "pedigree",
      type: "checkbox",
      label: "Pedigree/Papers",
      defaultValue: false,
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
    },
    {
      name: "dogImages",
      type: "upload",
      relationTo: "media",
      hasMany: true,
      required: false,
    },
    {
      name: "available",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "featured",
      type: "checkbox",
      label: "Featured Puppy",
      defaultValue: false,
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
    // {
    //   name: "tenant",
    //   type: "relationship",
    //   relationTo: "tenants",
    //   required: true,
    //   hasMany: false,
    // },
  ],
};
