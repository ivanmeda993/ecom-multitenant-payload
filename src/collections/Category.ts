import type { CollectionConfig } from 'payload'
import { slugField } from '@/fields/slug/slug-field'

export const Category: CollectionConfig = {
  slug: 'category',
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    ...slugField(),

    {
      name: 'color',
      type: 'text',
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'category',
      hasMany: false,
    },
    {
      name: 'subcategories',
      type: 'join',
      collection: 'category',
      on: 'parent',
      hasMany: true,
    },
  ],
}
