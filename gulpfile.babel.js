import gulp from 'gulp';
import sass from 'gulp-sass';
import browserify from 'browserify';
import babelify from 'babelify';
import stringify from 'stringify';
import connect from 'gulp-connect';
import source from 'vinyl-source-stream';
import watchify from 'watchify';
import autoprefixer from 'gulp-autoprefixer'
import concat from 'gulp-concat';

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
        .pipe(gulp.dest('dist/js/'))
    }
});

gulp.task('sass', () => {
    console.log('Rebundling scss files...')
    return gulp.src('./app/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer(autoprefixerOptions))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css/'))
});

// Connects to server
gulp.task('connect', () => {
    connect.server();
});

//Watch task
gulp.task('css',function() {
    gulp.watch('app/**/*.scss',['sass']);
});

gulp.task('default', ['connect', 'bundle', 'css']);
