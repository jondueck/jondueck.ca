var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var watch = require('gulp-watch');
var neat = require('node-neat').includePaths;

var paths = {
  scripts: 'js/',
  scss: 'assets/scss/**/*.scss',
  css: 'assets/css'
};

gulp.task('watch', ['sass'], function() {
  gulp.watch(paths.scss, ['sass']);
});

gulp.task('sass', function() {
  gulp.src('assets/scss/*.scss')
    .pipe(sass({
      includePaths: ['sass'].concat(neat)
    }))
    .on('error', function(err) {
      console.log(err.message);
      return notify().write(err); // send the error through Growl
    })
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('assets/css'))
    .pipe(notify('Sass compiled successfully.'));
});

gulp.task('default', ['watch','sass']);
