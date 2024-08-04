import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'
import {defineConfig} from 'vite'
import solid from 'vite-plugin-solid'
import TSConfigPath from 'vite-tsconfig-paths'

export default defineConfig({
  server: {port: 4443},
  plugins: [TSConfigPath(), vanillaExtractPlugin(), solid()]
})
