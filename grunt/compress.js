module.exports = {
	dist: {
		options: {
			mode: "gzip"
		},
		files: [{
			expand: true,
			cwd: "www/",
			src: ["**/*.html"],
			dest: "www/",
			filter: "isFile",
			ext: ".html.gz"
		},{
			expand: true,
			cwd: "www/",
			src: ["**/*.css"],
			dest: "www/",
			filter: "isFile",
			ext: ".css.gz"
		},{
			expand: true,
			cwd: "www/",
			src: ["**/*.js"],
			dest: "www/",
			filter: "isFile",
			ext: ".js.gz"
		},{
			expand: true,
			cwd: "www/",
			src: ["**/*.svg"],
			dest: "www/",
			filter: "isFile",
			ext: ".svg.gz"
		}]
	}
};