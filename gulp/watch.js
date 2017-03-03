'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');

var browserSync = require('browser-sync');
var gulpSync = require('gulp-sync')(gulp);
var server = require('gulp-develop-server');

function isOnlyChange(event) {
  return event.type === 'changed';
}

gulp.task('watch', ['markups', 'inject'], function () {

  gulp.watch([path.join(conf.paths.src, '/*.html'), 'bower.json'], ['inject-reload']);

  gulp.watch([
    path.join(conf.paths.src, '/app/**/*.css'),
    path.join(conf.paths.src, '/app/**/*.scss'),
    path.join(conf.paths.src, '/app/**/*.sass')
  ], function(event) {
    if(isOnlyChange(event)) {
      gulp.start('styles-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.js'), function(event) {
    if(isOnlyChange(event)) {
      gulp.start('scripts-reload');
    } else {
      gulp.start('inject-reload');
    }
  });

  gulp.watch(path.join(conf.paths.src, '/app/**/*.jade'), ['markups']);

  gulp.watch(path.join(conf.paths.src, '/app/**/*.html'), function(event) {
    browserSync.reload(event.path);
  });

  // 监测服务端文件变化
  gulp.watch(path.join(conf.paths.src, '/app-server/**/*.js'),function(event)
  {
    gulp.start('server:rerun');
  });

});

gulp.task('server:rerun', gulpSync.sync(['scripts-reload', 'server:restart']));

gulp.task('server:restart', function() {

  server.restart(function() {
    browserSync.reload();
  });

});
