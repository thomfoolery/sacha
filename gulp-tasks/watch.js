var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var runSequence = require('run-sequence');

gulp.task('watch', function () {

  gulp.watch([
    'build/**/*.html',
    'build/scripts/**/*.js',
  ]).on('change', browserSync.reload );

  gulp.watch('src/html/**/*.*',      ['html']    ).on('change', getOnDeleteHandler('html') );
  gulp.watch('src/data/**/*',        ['data']    ).on('change', getOnDeleteHandler('data') );
  gulp.watch('src/videos/*',         ['videos']  ).on('change', getOnDeleteHandler('videos') );
  gulp.watch('src/scripts/**/*.js',  function () { runSequence('scripts', 'systemjs') });
  gulp.watch('src/styles/**/*.scss', ['styles']  );

});

function getOnDeleteHandler ( ns ) {
  return function (event) {
    if ( event.type === 'deleted' ) {
      if ( $.cached.caches[ ns ][ event.path ] )
        delete $.cached.caches[ ns ][ event.path ];
      remember.forget( ns, event.path);
    }
  };
}