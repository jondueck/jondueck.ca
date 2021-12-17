const gulp = require('gulp')
const cp = require('child_process')
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')
const neat = require('node-neat').includePaths
const browserSync = require('browser-sync').create()

const paths = {
  scss: '_src/scss/**/*.scss',
  css: 'assets/css',
  html: ['**/*.html', '**/*.md', '**/*.markdown', '!_site/**/*.*'],
}

const buildJekyll = () => {
  browserSync.notify('<span style="color: grey">Running:</span> $ jekyll build')
  return cp.spawn('bundle', ['exec', 'jekyll', 'build'], { stdio: 'inherit' })
}

const rebuildJekyll = () => gulp.series(buildJekyll, browserSyncReload)

const buildSass = () => {
  return gulp
    .src(paths.scss)
    .pipe(
      sass({
        includePaths: ['sass'].concat(neat),
      }).on('error', sass.logError)
    )
    .pipe(
      autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false,
      })
    )
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css')) // specify the destination for the minified css created by sass
    .pipe(gulp.dest('./_site/dist/css')) // also output to the _site directory for live injecting
    .pipe(browserSync.reload({ stream: true }))
    .pipe(browserSync.notify('<span style="color: grey">Compiled SCSS</span>'))
}

const browserSyncServe = (done) => {
  browserSync.init({
    server: {
      baseDir: './_site',
    },
    host: 'localhost',
    port: 2323,
  })
  done()
}

const browserSyncReload = (done) => {
  browserSync.reload()
  done()
}

const build = gulp.parallel(buildSass, buildJekyll)

const watch = () => {
  build()
  gulp.watch(paths.scss, buildSass)
  gulp.watch(paths.html, rebuildJekyll)
}

exports.watch = gulp.parallel(browserSyncServe, watch)
exports.build = build
