var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
  runSequence(
    [
      'clean',
    ],
    [
      'html',
      'data',
      'fonts',
      'styles',
      'scripts'
    ],
    [
      'images-min'
    ],
    // [
    //   'images-webp'
    // ],
    [
      'images-resize'
    ],
    'serve',
    'watch'
  );
});