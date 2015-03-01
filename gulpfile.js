var gulp = require('gulp');
var jsxformat = require('./index');

gulp.task('default', function () {
  gulp.src('test/unformated/**/*.jsx')
    .pipe(jsxformat())
    .pipe(gulp.dest('test/formated'))
})