import {defineConfig} from 'vite'
import TSConfigPath from 'vite-tsconfig-paths'
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin'
import solid from 'vite-plugin-solid'

export default defineConfig({
  server: {port: 4443},
  plugins: [TSConfigPath(), vanillaExtractPlugin(), solid()]
})
