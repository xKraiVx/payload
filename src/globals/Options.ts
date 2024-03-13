import { GlobalConfig } from 'payload/types'
import isAdmin from '../access/isAdmin'

const Options: GlobalConfig = {
    slug: 'options',
    fields: [
        {
            type: 'tabs',
            tabs: [
                {
                    label: 'General',
                    description: 'General settings',
                    fields: [
                        {
                            name: 'thema',
                            label: 'Thema',
                            type: 'radio',
                            defaultValue: 'light',
                            options: [
                                {
                                    label: 'Light',
                                    value: 'light'
                                },
                                {
                                    label: 'Dark',
                                    value: 'dark'
                                }
                            ]
                        }
                    ]
                },
                {
                    label: 'Posts',
                    description: 'Posts settings',
                    fields: [
                        {
                            name: 'numberInRecentPosts',
                            label: 'Number of recent posts',
                            type: 'number',
                            required: true,
                            defaultValue: 3
                        }
                    ]
                },
            ]
        }
    ],
    access: {
        update: isAdmin,
    },
}

export default Options;
