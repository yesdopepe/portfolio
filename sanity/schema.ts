import { type SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    {
      name: 'posts',
      type: 'document',
      title: 'Posts',
      fields: [
        {
          name: 'title',
          type: 'string',
          title: 'Title',
          validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      validation: (Rule) => Rule.required(),
      options:{
        source:'title',
      }
    },
    {
      name: 'content',
      type: 'array',
      title: 'Content',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      validation: (Rule) => Rule.required(),
      description: 'Image of the post'
    }
  ],
},
{
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      description: 'Title of the project'
    },
    {
      title: 'Description',
      name: 'description',
      type: 'text',
      validation: (Rule) => Rule.required(),
      description: 'Description of the project'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      description: 'Image of the project'
    },
    {
      title: 'Link',
      name: 'link',
      type: 'url',
      description: 'Link of the project'
    },
    {
      title:'Tech Stack',
      name:'techStack',
      type:'array',
      of:[{type:'string'}],
      description:'TechStack of the project'
    }
  ]
},
{
  name:'skills',
  type:'document',
  title:'Skills',
  fields:[{
    name:'Skill',
    type:'string',
    title:'Skill',
    validation: (Rule) => Rule.required()
  },
{
  name:'level',
    type:'number',
    title:'Level',
    validation: (Rule) => Rule.required().min(1).max(5)
},
{
  name:'icon',
    type:'image',
    title:'Icon',
    validation: (Rule) => Rule.required()
}]
}]
};
