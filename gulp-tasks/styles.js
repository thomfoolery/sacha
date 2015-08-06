var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

var browserlist = ['last 1 version','Android > 4'];

gulp.task('styles', function () {

  return gulp.src('src/styles/main.scss')
    .pipe( $.sourcemaps.init() )
    .pipe( $.sass({
      outputStyle: 'compressed', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe( $.postcss([
      require('autoprefixer-core')({ browsers: browserlist })
    ]))
    .pipe( $.sourcemaps.write() )
    .pipe( gulp.dest('./build/styles') )
    .pipe( browserSync.reload({ stream: true }) )
  ;

});

gulp.task('styles-build', function () {

  return gulp.src('src/styles/ctv.scss')
    .pipe( $.sass({
      outputStyle: 'compressed', // libsass doesn't support expanded yet
      precision: 10,
      includePaths: ['.'],
      onError: console.error.bind(console, 'Sass error:')
    }))
    .pipe( $.postcss([
      require('autoprefixer-core')({ browsers: browserlist })
    ]))
    .pipe( gulp.dest('./build/styles') )
    .pipe( browserSync.reload({ stream: true }) )
  ;

});