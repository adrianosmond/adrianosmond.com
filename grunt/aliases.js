module.exports = {
    default: [
		"sass:dist",
		"rename",
		"autoprefixer:dist",
        "imagemin",
        "svgmin",
        "htmlmin",
        "compress"
    ]
};