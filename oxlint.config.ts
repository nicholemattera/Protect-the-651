import eslintPluginBetterTailwindcss from 'eslint-plugin-better-tailwindcss'
import { defineConfig } from 'oxlint'

export default defineConfig({
  overrides: [
    {
      files: ['**/*.{js,cjs,mjs,ts,tsx,cts,mts}'],
      jsPlugins: ['eslint-plugin-better-tailwindcss'],
      rules: eslintPluginBetterTailwindcss.configs.recommended.rules,
    },
  ],
  settings: {
    'better-tailwindcss': {
      entryPoint: 'src/main.css',
    },
  },
})
