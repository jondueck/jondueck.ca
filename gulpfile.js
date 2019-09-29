var gulp = require('gulp'),
  watch = require('gulp-watch'),
  sass = require('gulp-sass'),
  neat = require('node-neat').includePaths,
  cp = require('child_process'),
  rename = require('gulp-rename'),
  cssmin = require('gulp-cssmin'),
  concat = require('gulp-concat'),
  browserSync = require('browser-sync'),
  autoprefixer = require('gulp-autoprefixer'),
  uglify = require('gulp-uglify'),
  del = require('del'),
  notify = require('gulp-notify'),
  plumber = require('gulp-plumber'),
  critical = require('critical'),
  reload = browserSync.reload()

var paths = {
  scss: '_src/scss/**/*',
  html: ['**/*.html', '**/*.md', '**/*.markdown', '!_site/**/*.*'],
  js: '_src/js/**/*',
  images: '_src/img/**/*',
  dest: 'dist/'
}

gulp.task('sass', function () {
  gulp.src('_src/scss/*.scss')
    .pipe(plumber())
    .pipe(sass({
      includePaths: ['sass'].concat(neat) // required for node-neat to work
    }))
    .on('error', function (err) { // custom error logging since Gulp crashes without it
      console.log(err)
    })
    .pipe(autoprefixer('last 2 version', 'ie 9')) // prefix up to ie9
    .pipe(cssmin()) // minify the css while we're at it
    .pipe(gulp.dest('./dist/css')) // specify the destination for the minified css created by sass
    .pipe(gulp.dest('./_site/dist/css')) // also output to the _site directory for live injecting
    .pipe(browserSync.reload({stream:true}))
    .pipe(notify({ message: 'Compiled Sass.' }))
})

gulp.task('js', function() {
  gulp.src('_src/js/**/*.js')
    .pipe(concat('scripts.js'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(notify({ message: 'Minified JS.'}))
})

gulp.task('clean', function() {
  return del([
    'css','js'
  ])
})

gulp.task('critical-css', function() {
  critical.generate({
    base: '_site',
    src: 'index.html',
    dest: './dist/css/critical.min.css',
    width: 1200,
    height: 900,
    minify: true
  })
})

gulp.task('jekyll-build', function(done) {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build')
  return cp.spawn('jekyll', ['build'], { stdio: 'inherit' })
  .on('close', done)
})

gulp.task('jekyll-rebuild', ['jekyll-build'], function() {
  browserSync.reload()
})

gulp.task('browsersync', ['jekyll-build'], function() {
  browserSync({
    server: {
      baseDir: './_site/'
    },
    host: 'localhost'
  })
})

gulp.task('watch', function() {
  gulp.watch(paths.scss, ['sass'])
  gulp.watch(paths.js, ['js'])
  gulp.watch(paths.html, ['jekyll-rebuild'])
})

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['clean'], function() {
  gulp.start('sass', 'js', 'browsersync','watch')
})
