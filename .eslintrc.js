module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: ["eslint:recommended", "prettier"],
	ignorePatterns: ["eslintIgnore/**"],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},

	rules: {},
}
