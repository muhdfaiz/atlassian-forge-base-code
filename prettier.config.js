/**
 * @see https://prettier.io/docs/configuration
 * @type {import('prettier').Config}
 */
const config = {
	printWidth: 80,
	tabWidth: 2,
	semi: true,
	singleQuote: true,
	trailingComma: 'all',
	useTabs: true,
	overrides: [
		{
			files: '*.json',
			options: {
				printWidth: 120,
			},
		},
	],
};

export default config;
