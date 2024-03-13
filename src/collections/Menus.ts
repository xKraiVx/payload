import { CollectionConfig } from 'payload/types'
import isUser from '../access/isUser'
import isAdmin from '../access/isAdmin'

const Menus: CollectionConfig = {
    slug: 'menus',
    fields: [
        {
            name: 'id',
            label: 'ID (autogenerate)',
            type: 'text',
            required: true,
            unique: true,
        },
        {
            label: 'Menu List',
            name: 'menuList',
            type: 'array',
            labels: {
                singular: 'Menu Item',
                plural: 'Menu Items',
            },
            fields: [
                {
                    name: 'text',
                    type: 'text',
                    label: 'Text',
                    required: true,
                },
                {
                    name: 'url',
                    type: 'text',
                    label: 'URL',
                    required: true,
                },
                {
                    name: 'openInNewTab',
                    type: 'checkbox',
                    label: 'Open in new tab',
                    defaultValue: false,
                },

            ]
        }
    ],
    access: {
        read: isUser,
        create: isAdmin,
        update: isAdmin,
        delete: isAdmin
    },
}

export default Menus
