module.exports = {
	options: {
		plugins: [{
			removeViewBox: false,
		},{
			mergePaths: false
		}]
	},
	dist: {
		files: [{
			expand: true,
			cwd: "public/",
			src: ["images/*.svg"],
			dest: "www/"
		}]
	}
};