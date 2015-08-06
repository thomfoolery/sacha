var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('fonts', function () {

  return gulp.src('src/fonts/**/*')
    .pipe( $.cached('fonts') )
    // .pipe( $.sourcemaps.init() )
    // insert script processing here
    // .pipe( $.sourcemaps.write() )
    .pipe( gulp.dest('./build/fonts') )
  ;

});