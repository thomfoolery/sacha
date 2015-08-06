var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var runSequence = require('run-sequence');

gulp.task('build', function () {
  runSequence(
    'clean',
    [
      'data',
      'html-build',
      'styles-build',
      'scripts'
    ],
    'systemjs',
    'html-inline',
    [
      'upload',
      'upload-complete'
    ]
  );
});