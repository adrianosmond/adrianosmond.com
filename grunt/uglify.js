module.exports = {
	dev: {
		files: [{
			expand: true,
			cwd: "public/scripts/dist",
			src: "script.js",
			dest: "public/scripts/dist",
			ext: ".min.js"
		}]
	}
};