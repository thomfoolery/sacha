var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('serve', function () {

  return browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['./build'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

});