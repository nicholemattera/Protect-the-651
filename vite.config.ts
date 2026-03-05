import { defineConfig } from 'vite'
import path from 'node:path'
import { globSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        ...globSync('*.html').reduce<Record<string, string>>((input, file) => {
          input[file.substring(0, file.length - 5)] = file
          return input
        }, {}),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
