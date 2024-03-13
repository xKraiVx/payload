import { GlobalConfig } from 'payload/types'
import isAdmin from '../access/isAdmin'
import HeroWidget from '../widgets/Hero.widget';
import BenefitsWidget from '../widgets/Benefits.widget';

const Options: GlobalConfig = {
    slug: 'homePage',
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            unique: true
        },
        {
            name: 'widgets',
            type: 'blocks',
            blocks: [
                HeroWidget,
                BenefitsWidget
            ],
            admin: {
                initCollapsed: true
            }
        },
    ],
    access: {
        read: () => true,
        update: isAdmin,
    },
}

export default Options;
