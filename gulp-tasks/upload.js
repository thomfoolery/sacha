var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var parallelize = require("concurrent-transform");

// (!) Creds are stored in ~/.aws/credentials
var BUCKET = 'ksomedia';
var PROJECT_S3_ROOT = '/ADXDT-FireTV/CTV/';

gulp.task('upload', function () {

  var cfg = {
    params: {
      Bucket: BUCKET
    }
  };

  var publisher = $.awspublish.create( cfg );

  console.log('Launch DEV:  http://ksomedia.s3.amazonaws.com/ADXDT-FireTV/CTV/index.html');
  console.log('Launch PROD: https://d3jlxzdxc80cmp.cloudfront.net/ADXDT-FireTV/CTV/index.html');

  return gulp.src('./build/**')
    .pipe( $.rename( function ( path ) {
      path.dirname = PROJECT_S3_ROOT + path.dirname;
    }))
    .pipe( parallelize( publisher.publish(), 20 ))
    .pipe( $.awspublish.reporter() )
  ;

});

gulp.task('upload-complete', function () {

  console.log('Launch DEV:  http://ksomedia.s3.amazonaws.com/ADXDT-FireTV/CTV/index.html');
  console.log('Launch PROD: https://d3jlxzdxc80cmp.cloudfront.net/ADXDT-FireTV/CTV/index.html');

});
