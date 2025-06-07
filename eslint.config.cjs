const globals = require('globals');
const { defineConfig, globalIgnores } = require('eslint/config');

const tsParser = require('@typescript-eslint/parser');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const js = require('@eslint/js');

const { FlatCompat } = require('@eslint/eslintrc');

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
});

module.exports = defineConfig([
	globalIgnores([
		'build/*',
		'static/*/dist/*',
		'node_modules/*',
		'eslint.config.cjs',
		'static/frontend/eslint.config.cjs',
		'.lintstagedrc.cjs',
		'prettier.config.js',
		'scripts/check-branch.js',
	]),
	{
		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			// 'plugin:@atlaskit/design-system/recommended',
		),

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2022,
			globals: {
				...globals.node,
			},
		},

		plugins: {
			'@typescript-eslint': typescriptEslint,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'off',
		},
	},
]);
