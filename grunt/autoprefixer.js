module.exports = {
    options: {
        browsers: ["> 1%", "last 2 versions", "ie 8", "ie 9"]
    },
    dev: {
        expand: true,
        src: "public/styles/**/*.{css,ejs}"
    },
    dist: {
		expand: true,
        src: "www/styles/**/*.css"
    }
};