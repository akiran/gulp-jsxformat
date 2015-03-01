var gulp = require('gulp');
var jsxformat = require('./index');

gulp.task('default', function () {
  gulp.src('test/input/**/*.jsx')
    .pipe(jsxformat())
    .pipe(gulp.dest('test/result'))
})