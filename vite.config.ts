import {defineConfig} from 'vite'
import TSConfigPath from 'vite-tsconfig-paths'

import solid from 'vite-plugin-solid'

export default defineConfig({
  server: {port: 4443},
  plugins: [TSConfigPath(), solid()]
})
