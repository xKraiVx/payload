import { Block } from "payload/types";

const HeroWidget: Block = {
  slug: 'hero', // required
  imageURL: 'https://google.com/path/to/image.jpg',
  imageAltText: 'A nice thumbnail image to show what this block looks like',
  interfaceName: 'HeroWidget',
  fields: [
    {
      name: 'title',
      label: 'Title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Description',
      type: 'text',
    },
    {
      name: 'bgimage',
      label: "Background Image",
      type: 'upload',
      relationTo: 'media'
    },
  ],
}

export default HeroWidget