const { series, parallel } = require('gulp')
const gulp = require('gulp')

const { appCSS, appHTML, appIMG, appJS } = require('./gulpTasks/app.js')
const { depsCSS, depsFonts } = require('./gulpTasks/deps.js')
const { monitorarArquivos, servidor } = require('./gulpTasks/servidor.js')

exports.default = series(
  parallel(
    series(appHTML, appCSS, appJS, appIMG),
    series(depsCSS, depsFonts)
  ),
  servidor,
  monitorarArquivos
)