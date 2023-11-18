import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: true,

  stylistic: {
    indent: 2,
    quotes: 'single',
  },

  typescript: true,
  jsonc: false,
  yaml: false,

  ignores: [
    '**/*.md',
  ],
})
