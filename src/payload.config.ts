import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'
import seoPlugin from '@payloadcms/plugin-seo';

import Users from './collections/Users'
import Pages from './collections/Pages'
import Media from './collections/Media'
import Posts from './collections/Posts'
import Comments from './collections/Comments'
import Options from './globals/Options'
import HomePage from './globals/HomePage'
import MainLayout from './globals/MainLayout'
import Menus from './collections/Menus'

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: [Users, Pages, Media, Posts, Comments, Menus],
  globals: [HomePage, Options, MainLayout],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [
    payloadCloud(),
    seoPlugin({
      collections: [
        'pages',
        'posts'
      ],
      globals: [
        'homePage'
      ],
      uploadsCollection: 'media',
      // generateTitle: ({ doc }) => `Website.com — ${doc.title.value}`,
      // generateDescription: ({ doc }) => doc.excerpt
    })],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI,
    },
  }),
})
