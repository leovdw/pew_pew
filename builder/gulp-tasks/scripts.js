//js
var gulp       = require('gulp');
var plumber    = require('gulp-plumber');
var notify     = require('gulp-notify');
var uglify     = require('gulp-uglify');
var browserify = require('gulp-browserify');
var concat     = require('gulp-concat');
var path       = require('./path.js');
var rename     = require('gulp-rename');
// var env        = require('babel-preset-env');
// var babelify   = require('babelify');


module.exports = function (gulp, callback) {

    var onError = function(err) {
        notify.onError({
            title:    "Gulp",
            subtitle: "Failure!",
            message:  "Error: <%= error.message %>"//,
            //sound:    "Beep"
        })(err);
        this.emit('end');
    };

    // gulp.src(path + '/src/js/*.js')
		// .pipe(plumber({
		// 	errorHandler: function (error) {
		// 		console.log(error.message);
		// 		this.emit('end');
		// 	}
		// }))
		// //.pipe(uglify())
		// .pipe(gulp.dest(path + '/dist/scripts/'));

    return gulp.src(path + '/src/js/app.js')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }
        }))
		.pipe(browserify())
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest(path + '/dist/scripts/'))
        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(path + '/dist/scripts/'))
    	// .pipe(notify({
    	// 	title: 'Gulp Scripts',
    	// 	subtitle: 'Fuck Yeah !',
    	// 	message: 'JS task'
    	// }));

};
