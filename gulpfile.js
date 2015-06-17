var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var rename = require('gulp-rename');
var through2 = require('through2');

var getBundleName = function () {
  var version = require('./package.json').version;
  var name = require('./package.json').name;
  return version + '.' + name + '.' + 'min';
};

gulp.task('build', function() {
  return gulp.src('./client.js')
    .pipe(through2.obj(function(file, enc, next) {
      browserify(file.path, {debug: true})
        .transform(babelify)
        .bundle(function(err, res) {
          if(err) {return next(err);}

          file.contents = res;
          next(null, file);
        });
    }))
    .on('error', function(error) {
      console.log(error.stack);
      this.emit('end');
    })
    .pipe(rename(getBundleName() + '.js'))
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('default', ['build']);

gulp.task('watch', function() {
  gulp.watch(['app/**/*.js','app/**/*.jsx'], ['buildTesting']);
});
