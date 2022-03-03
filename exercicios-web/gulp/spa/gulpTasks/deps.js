const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

function depsCSS() {
  return gulp.src('node_modules/font-awesome/css/font-awesome.css')
    .pipe(uglifycss({ "ugliComments": false }))
    .pipe(concat('desp.min.css'))
    .pipe(gulp.dest('build/assets/css'))
}

function depsFonts() {
  return gulp.src('node_modules/font-awesome/fonts/*.*')
    .pipe(gulp.dest('build/assets/fonts'))
}

module.exports = {
  depsCSS,
  depsFonts
}