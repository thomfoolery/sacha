var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images-webp', function () {

  return gulp.src('./src/images/**/*')
    .pipe( $.webp({
      lossless: true
    }))
    .pipe( gulp.dest('./build/images') )
  ;

});

gulp.task('images-resize', function () {

  return gulp.src(['build/images/**/*.webp'])
    .pipe( $.responsive([{
      name: '**/*',
      width: 600,
      errorOnUnusedImage: false
    }]))
    .pipe( gulp.dest('./build/images/thumb') )
  ;

});