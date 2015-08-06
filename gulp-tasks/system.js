var gulp = require('gulp');
var Builder = require('systemjs-builder');

gulp.task("systemjs", function ( cb ) {

  var options = {
    minify: true,
    runtime: false,
    sourceMaps: false
  };

  // var options = {
  //   minify: false,
  //   runtime: false,
  //   sourceMaps: true
  // };

  builder = new Builder();

  builder.buildSFX('./build/scripts/main.js', './build/scripts/bundle.js', options )
    .then( function () {
      cb && cb();
    })
    .catch( function( err ) {
      console.dir( err );
    })
  ;

});