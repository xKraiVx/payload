import { RowLabelArgs } from "payload/dist/admin/components/forms/RowLabel/types";
import { Block } from "payload/types";

const RowLabel = ({ data, index }: RowLabelArgs) => {
    return data?.title || `Benefit ${index}`
}

const BenefitsWidget: Block = {
    slug: 'benefits', // required
    imageURL: 'https://google.com/path/to/image.jpg',
    imageAltText: 'A nice thumbnail image to show what this block looks like',
    interfaceName: 'BenefitsWidget',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text',
            required: true,
        },
        {
            name: 'list',
            label: 'List',
            type: 'array',
            labels: {
                singular: 'Item',
                plural: 'Items',
            },
            fields: [
                {
                    name: 'item',
                    label: 'Item',
                    type: 'text',
                    required: true
                }
            ],
            admin: {
                initCollapsed: true,
                components: {
                    RowLabel,
                },
            },
        },
    ],
}

export default BenefitsWidget