module.exports = {
	dist: {
		options: {
			removeComments: true,
			collapseWhitespace: true,
			caseSensitive: true,
			keepClosingSlash: true
		},
		expand: true,
		src: ['**/*.html'],
		cwd: 'www/',
		dest: 'www/'
	}
};