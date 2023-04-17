import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	test: {
		globals: true,
	},
	plugins: [react()],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: '[local]_[hash:base64:3]',
		},
	},
})
