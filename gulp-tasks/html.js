var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var fs = require('fs');
var path = require('path');
var browserSync = require('browser-sync');

var swigOptions = {
  defaults: { cache: false },
  data: require('../src/html/defaults.json')
};

var postProcces;

gulp.task('html', function () {

  swigOptions.data.env = 'dev';
  postProcces = $.prettify({ indent_size: 2 });
  return swigBuild( swigOptions );

});

gulp.task('html-build', function () {

  swigOptions.data.env = 'prod';
  postProcces = $.prettify({ indent_size: 2 });// postProcces = $.htmlmin({ collapseWhitespace: true });
  return swigBuild( swigOptions );

});

gulp.task('html-inline', function () {

  return gulp.src('./build/*.html')
    .pipe( $.inlineSource() )
    .pipe( gulp.dest('./build') )
  ;

});

function swigBuild ( cfg ) {

  return gulp.src(['./src/html/*.html','!./src/html/_layouts/**/*','!./src/html/_includes/**/*'])
    .pipe( $.changed('./build', { extension: '.html' } ) )
    .pipe( $.data( function ( file ) {
      var x = './src/data/' + path.basename( file.path, '.swig' ) + '/config.json';
      if ( fs.existsSync( x ) )
        return { json: JSON.stringify( require('.' + x ) ) }
      else
        return {};
    }))
    .pipe( $.swig( cfg ) )
    .pipe( postProcces )
    .on('error', function ( error ) {
      console.log( error );
    })
    .pipe( gulp.dest('./build') )
  ;

}