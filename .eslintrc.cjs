/* eslint-env node */
module.exports = {
	extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	root: true,
	rules: {
		'no-mixed-spaces-and-tabs': 0,
		'@typescript-eslint/ban-ts-comment': 0,
	},
}
