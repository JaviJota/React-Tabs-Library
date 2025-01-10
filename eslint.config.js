import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react' // Importar el plugin de React

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommendedTypeChecked], // Reemplazar con recommendedTypeChecked
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],  // Asegúrate de que los paths de tsconfig sean correctos
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      react,  // Agregar el plugin de React
    },
    settings: {
      react: {
        version: '18.3', // Especificar la versión de React
      },
    },
    rules: {
      ...react.configs.recommended.rules, // Usar las reglas recomendadas de react
      ...react.configs['jsx-runtime'].rules, // Usar las reglas de jsx-runtime
      ...reactHooks.configs.recommended.rules,  // Agregar las reglas de react-hooks
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
)
