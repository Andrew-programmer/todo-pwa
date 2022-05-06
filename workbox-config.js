module.exports = {
	globDirectory: './',
	globPatterns: [
		'**/*.{css,html,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};