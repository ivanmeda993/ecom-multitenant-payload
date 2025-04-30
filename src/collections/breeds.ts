import type { CollectionConfig } from "payload";

export const Breeds: CollectionConfig = {
  slug: "breeds",
  admin: {
    useAsTitle: "name",
  },
  access: {
    read: () => true, // Everyone can read breeds
  },
  fields: [
    {
      name: "name",
      label: "Breed Name",
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
      name: "breedGroup",
      label: "Breed Group",
      type: "relationship",
      relationTo: "breedGroups", // Link to the BreedGroups collection
      required: true,
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "countryOfOrigin",
      label: "Country of Origin",
      type: "text",
    },
    {
      name: "size",
      label: "Size",
      type: "select",
      options: [
        { label: "Toy", value: "toy" },
        { label: "Small", value: "small" },
        { label: "Medium", value: "medium" },
        { label: "Large", value: "large" },
        { label: "Giant", value: "giant" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "coatType",
      label: "Coat Type",
      type: "select",
      options: [
        { label: "Short", value: "short" },
        { label: "Medium", value: "medium" },
        { label: "Long", value: "long" },
        { label: "Wire", value: "wire" },
        { label: "Curly", value: "curly" },
        { label: "Double", value: "double" },
      ],
      admin: {
        position: "sidebar",
      },
    },
    {
      name: "temperament",
      label: "Temperament",
      type: "array",
      fields: [
        {
          name: "trait",
          type: "text",
        },
      ],
    },
    {
      name: "lifeExpectancy",
      label: "Life Expectancy",
      type: "text",
    },
  ],
};
