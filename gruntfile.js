module.exports = function(grunt) {

  // 1. All configuration goes here
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // uglify: {
    //   build: {
    //     src: 'js/build/production.js',
    //     dest: 'js/build/production.min.js'
    //   }
    // },
    watch: {
      // scripts: {
      //   files: ['assets/js/*.js'],
      //   tasks: ['concat', 'uglify'],
      //   options: {
      //     spawn: false,
      //   },
      // },
      css: {
        files: ['assets/sass/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false,
        },
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed',
          includePaths: require('node-neat').includePaths
        },
        files: {
          'default.css': 'assets/sass/default.scss'
        }
      }
    }

  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //    grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');

  // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
  grunt.registerTask('default', ['sass', 'watch']);


};
