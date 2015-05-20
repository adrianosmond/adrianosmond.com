module.exports = {
	dev: {
		options: {
			style: "compressed"
		},
		files: [{
			expand: true,
			cwd: "public",
			src: ["styles/*.scss"],
			dest: "public",
			ext: ".css"
		},{
			expand: true,
			cwd: "public/styles",
			src: ["critical/*.scss"],
			dest: "public/styles",
			ext: ".ejs"
		}]
	},
	dist: {
		options: {
			style: "compressed"
		},
		files: [{
			expand: true,
			cwd: "public/styles",
			src: ["**/*.scss"],
			dest: "www/styles",
			ext: ".css"
		},{
			expand: true,
			cwd: "public/styles",
			src: ["critical/*.scss"],
			dest: "public/styles",
			ext: ".ejs"
		}]
	}
};