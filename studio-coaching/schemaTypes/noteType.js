import {defineField, defineType} from 'sanity'

export const noteType = defineType({
  name: 'note',
  title: 'Note',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Note Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'Upload File',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx,.ppt,.pptx',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'class',
      title: 'Class',
      type: 'reference',
      to: [{type: 'class'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'subject',
      title: 'Subject',
      type: 'reference',
      to: [{type: 'subject'}],
      validation: (rule) => rule.required(),
    }),
  ],
})
