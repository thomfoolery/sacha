var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {

  return gulp.src('src/scripts/**/*.js')
    .pipe( $.cached('scripts') )
    // .pipe( $.sourcemaps.init() )
    // insert script processing here
    // .pipe( $.sourcemaps.write() )
    .pipe( gulp.dest('./build/scripts') )
  ;

});