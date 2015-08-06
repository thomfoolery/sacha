var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
  runSequence(
    // 'clean',
    [
      'html',
      'data',
      'styles',
      'scripts'
    ],
    // [
    //   "images-webp"
    // ],
    // [
    //   "images-resize"
    // ],
    'serve',
    'watch'
  );
});