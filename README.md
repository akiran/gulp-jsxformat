# gulp-jsxformat
jsx formatting  with gulp

## Install
```bash
npm install gulp-jsxformat --save-dev
```

## Usage
```js
var gulp = require('gulp');
var jsxformat = require('gulp-jsxformat');

gulp.task('prettify-jsx', function () {
  gulp.src('src/**/*.jsx')
    .pipe(jsxformat())
    .pipe(gulp.dest('src'))
})
```
