import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import checker from 'vite-plugin-checker'

import type { UserConfig } from 'vite'
import type { InlineConfig } from 'vitest'

interface VitestConfigExport extends UserConfig {
	test: InlineConfig
}
// https://vitejs.dev/config/
export default defineConfig({
	base: '/react-social-media/',
	test: {
		globals: true,
		environment: 'jsdom',
	},
	plugins: [
		react(),
		checker({
			typescript: true,
		}),
	],
	css: {
		modules: {
			localsConvention: 'camelCaseOnly',
			generateScopedName: '[local]_[hash:base64:3]',
		},
	},
} as VitestConfigExport)
