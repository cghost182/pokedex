module.exports = function(grunt){

grunt.initConfig({

pkg: grunt.file.readJSON('package.json'),



uglify: {
    my_target: {
      files: {
        'output.min.js': ['js/jsTmp1.js', 'js/jsTmp2.js']
      }
    }
}

});

grunt.loadNpmTasks('grunt-contrib-uglify');
/*grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');*/
grunt.registerTask('default', ['uglify']);
}