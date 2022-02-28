const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

const { series } = require('gulp')

function transformacaoJS(callback) {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      comments: false,
      presets: ["env"]
    }))
    .pipe(uglify())
    .on("error", err => console.error(err))
    .pipe(concat('cadigo.min.js'))
    .pipe(gulp.dest('build'))
}

function fim(callback) {
  console.log('Fim!!')
  return callback()
}

exports.default = series(transformacaoJS, fim)