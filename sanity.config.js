import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {presentationTool} from 'sanity/presentation'
import {media} from 'sanity-plugin-media'
// import {visionTool} from '@sanity/vision'
import {linkField} from 'sanity-plugin-link-field'
import {youtubeInput} from 'sanity-plugin-youtube-input'
import {projectId, dataset, apiVersion, youtubeKey, basePath} from './lib/api.js'
import * as resolve from './lib/resolve.js'
import {schemas} from './schemas/index.js'

const previewUrl = 'swaybae.net'

export default defineConfig({
  title: 'swaybae',
  basePath: basePath,
  projectId: projectId || '',
  dataset: dataset || '',
  schema: schemas,
  plugins: [
    structureTool(),
    presentationTool({
      resolve,
      previewUrl: {previewMode: {enable: '/api/draft'}},
    }),
    media(),
    // visionTool({defaultApiVersion: apiVersion || ''}),
    linkField({linkableSchemaTypes: ['post', 'tag']}),
    youtubeInput({apiKey: youtubeKey}),
  ],
})
