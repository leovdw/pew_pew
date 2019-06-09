var gulp    = require('gulp');
var plumber = require('gulp-plumber');
var notify  = require('gulp-notify');
var myPath  = require('./gulp-tasks/path.js');
// var babel   = require('babel-core');
// var env     = require('babel-preset-env');

const gulpRequireTasks = require('gulp-require-tasks');

gulpRequireTasks({
  // Specify path to your tasks directory.
  path: process.cwd() + '/gulp-tasks' // This is default!

});

gulp.task('run', ['sass', 'scripts', 'img']);
gulp.task('default', function(){
    gulp.watch(myPath + "/src/scss/**/**/*.scss", ['sass']);
    gulp.watch(myPath + "/src/js/**/*.js", ['scripts']);
    gulp.watch([myPath + "/src/img/**/*.*"], ['img']);
});
