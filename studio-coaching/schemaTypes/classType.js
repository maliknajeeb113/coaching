import {defineField, defineType} from 'sanity'

export const classType = defineType({
  name: 'class',
  title: 'Class',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Class Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'subject'}]}],
    }),
  ],
})
