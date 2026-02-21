import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  fields: [
    defineField({
      name: 'quoteWidgetTitle',
      title: 'Quote Widget Title',
      type: 'string',
      initialValue: 'Get Your Instant Quote',
    }),
    defineField({
      name: 'quoteWidgetSubtitle',
      title: 'Quote Widget Subtitle',
      type: 'string',
      initialValue: 'Select your items and see the price in real-time',
    }),
    defineField({
      name: 'rentalItems',
      title: 'Rental Items (Quote Calculator)',
      type: 'array',
      description: 'Items that appear in the homepage quote calculator',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              type: 'string',
              title: 'Item Name',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'price',
              type: 'number',
              title: 'Price',
              validation: (Rule: any) => Rule.required().min(0),
            },
            {
              name: 'image',
              type: 'image',
              title: 'Item Image',
              description: 'Small thumbnail for quote calculator',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'enableQuickAdd',
              type: 'boolean',
              title: 'Enable +8/-8 Buttons?',
              description: 'For items like chairs where customers often need multiples of 8',
              initialValue: false,
            },
            {
              name: 'sortOrder',
              type: 'number',
              title: 'Sort Order',
              description: 'Lower numbers appear first',
              initialValue: 0,
            },
          ],
          preview: {
            select: {
              title: 'name',
              price: 'price',
              media: 'image',
            },
            prepare(selection: any) {
              const {title, price, media} = selection
              return {
                title: title,
                subtitle: `$${price}`,
                media: media,
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'serviceAreasText',
      title: 'Service Areas Text',
      type: 'text',
      initialValue: 'San Bernardino • Riverside • Fontana • Rancho Cucamonga • Ontario • Colton • Rialto • Highland • Redlands',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Home Page Settings',
      }
    },
  },
})