module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            all: ['Gruntfile.js', 'currency.js', 'tests/currency.js']
        },

        uglify: {
            build: {
                files: {
                    'release/currency.min.js': ['currency.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['jshint','uglify']);
};
