var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var reactify = require('reactify');
var config = require('../config')

gulp.task('js', function() {
    return browserify(config.js.src, {'standalone': 'MyClass'})
        .transform(reactify)
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest(config.js.dest));
});