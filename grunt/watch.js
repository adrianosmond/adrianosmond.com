module.exports = {
    sass: {
        files: ["public/styles/**/*.scss"],
        tasks: ["sass:dev", "rename", "autoprefixer:dev"],
        options: {
			livereload: true
		}
    },
    html: {
		files: [
			"public/**/*.{html,ejs,json}",
			"!public/styles/**/*"
		],
		options: {
			livereload: true
		}
	},
    js: {
		files: ["public/scripts/*.js"],
		tasks: ["concat", "uglify"],
		options: {
			livereload: true
		}
	}
};