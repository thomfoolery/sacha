var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('data', function () {

  return gulp.src('src/data/**/*')
    .pipe( $.cached('data') )
    // .pipe( $.sourcemaps.init() )
    // insert script processing here
    // .pipe( $.sourcemaps.write() )
    .pipe( gulp.dest('./build/data') )
  ;

});