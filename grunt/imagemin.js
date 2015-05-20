module.exports = {
    options: {
        cache: false
    },

    dist: {
        files: [{
            expand: true,
            cwd: 'www/',
            src: ['images/**/*.{png,jpg,gif}'],
            dest: 'www/'
        }]
    }
};