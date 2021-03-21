module.exports = {
	root: true,
	env: {
		node: true
	},
	extends: [
		'plugin:vue/recommended',
		'eslint:recommended'
	],
	'parser': 'vue-eslint-parser',
	parserOptions: {
		parser: 'babel-eslint',
		ecmaVersion: 2020
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'comma-dangle': [
			'warn',
			'never'
		],
		'semi': [
			2, 'never'
		],
		'indent': [
			1, 'tab'
		],
		'vue/html-indent': [
			'warn',
			'tab'
		],
		'vue/component-definition-name-casing': [
			'warn',
			'PascalCase'
		],
		'vue/mustache-interpolation-spacing': [
			'warn',
			'always'
		],
		'vue/prop-name-casing': [
			'warn',
			'camelCase'
		],
		'vue/match-component-file-name': [
			'error',
			{
				'extensions': [ 'vue' ],
				'shouldMatchCase': false
			}
		],
		'vue/order-in-components': [
			'warn',
			{
				'order': [
					'name', 'props', 'computed', 'data', 'watch', 'LIFECYCLE_HOOKS', 'methods'
				]
			}
		],
		'array-bracket-spacing': [
			'warn', 
			'always'
		],
		'object-curly-spacing': [
			'warn', 
			'always'
		],
		'computed-property-spacing': [
			'warn',
			'never'
		],
		'no-tabs': 0,
		'quotes': [
			2, 'single', { 'avoidEscape': true }
		]
	}
}
