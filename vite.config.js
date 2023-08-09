import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/react-social-media/',
	test: {
		globals: true,
		environment: 'jsdom',
	},
	plugins: [react()],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: '[local]_[hash:base64:3]',
		},
	},
})
