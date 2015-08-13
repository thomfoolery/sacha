var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('images-min', function () {

  return gulp.src('./src/images/**/*')
    .pipe( $.imagemin({ progressive: true }) )
    .pipe( gulp.dest('./build/images') )
  ;

});

// gulp.task('images-webp', function () {

//   return gulp.src('./build/images/**/*')
//     .pipe( $.webp({
//       lossless: true
//     }))
//     .pipe( gulp.dest('./build/images') )
//   ;

// });

gulp.task('images-resize', function () {

  return gulp.src(['build/images/**/*'])
    .pipe( $.responsive([{
      name: '**/*.jpg',
      width: 600
    },{
      name: '**/*.jpeg',
      width: 600
    },{
      name: '**/*.png',
      width: 600
    }],{ 
      errorOnUnusedImage: false,
      passThroughUnused: true,
      errorOnUnusedConfig: false
    }))
    .on('error', function( err ) {
      console.log( err );
    })
    .pipe( gulp.dest('./build/images/thumb') )
  ;

});