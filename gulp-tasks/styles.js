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
    .on('error', function ( error ) {
      console.log( error );
    })
    .pipe( $.postcss([
      require('autoprefixer-core')({ browsers: browserlist })
    ]))
    .on('error', function ( error ) {
      console.log( error );
    })
    .pipe( $.sourcemaps.write() )
    .on('error', function ( error ) {
      console.log( error );
    })
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
    .on('error', function ( error ) {
      console.log( error );
    })
    .pipe( $.postcss([
      require('autoprefixer-core')({ browsers: browserlist })
    ]))
    .on('error', function ( error ) {
      console.log( error );
    })
    .pipe( gulp.dest('./build/styles') )
    .pipe( browserSync.reload({ stream: true }) )
  ;

});