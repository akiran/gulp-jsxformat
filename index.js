"use strict";

// var jsxformat = require('jsxformat');
var gutil = require('gulp-util');
var through = require('through2');
var esformatter = require('esformatter');
esformatter.register(require('esformatter-jsx'));

module.exports = function (options) {
  options = options || {};
  return through.obj(function (file, encoding, callback) {
    try {
      var str = file.contents.toString(encoding || 'utf8');
      file.contents = new Buffer(esformatter.format(str));
    } catch (err) {
      return callback(new gutil.PluginError('gulp-jsxformat', err, options));
    }
    callback(null, file);
  });
};