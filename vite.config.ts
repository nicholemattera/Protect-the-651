import { defineConfig } from 'vite'
import { globSync } from 'node:fs'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      input: globSync('*.html').reduce<Record<string, string>>((input, file) => {
        input[file.substring(0, file.length - 5)] = file
        return input
      }, {}),
    },
  },
  plugins: [tailwindcss()],
})
