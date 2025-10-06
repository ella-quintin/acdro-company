import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '22hj55di',
    dataset: 'production'
  },
  studioHost: 'acdro-cms',
  autoUpdates: true,
})
