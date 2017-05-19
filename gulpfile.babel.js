'use strict';

import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import connect from 'gulp-connect';
const autoprefixerOptions = {
  browsers: [
    "Android 2.3",
    "Android >= 4",
    "Chrome >= 20",
    "Firefox >= 24",
    "Explorer >= 8",
    "iOS >= 6",
    "Opera >= 12",
    "Safari >= 6"
  ]
};



// Basic pattern:
//
//  gulp.task('task-name', function() {
//    // Stuff here
//  });

// Applying a plugin to a directory:
//
//  gulp.task('task-name', function () {
//    return gulp.src('source-files') // Get source files with gulp.src
//      .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//      .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
//  })

// Watching a directory:
//
//  gulp.watch('files-to-watch', ['tasks', 'to', 'run']);



gulp.task('default', function() {
  console.log('Hello!');
});

gulp.task('sass', function() {
  return gulp
    .src('app/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});
