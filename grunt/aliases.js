module.exports = {
    default: [
		"sass:dev",
		"autoprefixer:dev",
        "rename",
        "concat",
        "uglify"
    ],
    deploy: [
        "harp:dist",
        "sass:dist",
        "autoprefixer:dist",
        "rename",
        "concat",
        "uglify",
        "imagemin",
        "svgmin",
        "htmlmin",
        "compress"
    ]
};