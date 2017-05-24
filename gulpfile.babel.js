import gulp from 'gulp';
import browserify from 'browserify';
import babelify from 'babelify';
import stringify from 'stringify';
import connect from 'gulp-connect';
import source from 'vinyl-source-stream';
import watchify from 'watchify';

// babelify compiles ES6 syntax to ES5
// stringify complies to string format for browserify
// watchify watches for file changes and rebundles
gulp.task('bundle', () => {
    let b = browserify({
        entries : ['./app/app.js'],
        cache : {},
        packageCache : {},
        plugin : watchify
    })
    .transform(stringify, {
        appliesTo : {
            includeExtensions : ['.html'],
            minify: true
        }
    })
    .transform(babelify, {
        presets : [ 'es2015']
    })
    b.on('update', bundle);
    bundle()

    function bundle() {
        b.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist/js/'))
    }
});

// Connects to server
gulp.task('connect', () => {
    connect.server();
});

gulp.task('default', ['connect', 'bundle']);
