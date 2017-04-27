const gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    log = util.log;

const sassFiles = "scss/**/*.scss";

// Task for compiling the scss files.
gulp.task("watch", function(){
    gulp.src(sassFiles)
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer("last 2 version"))
        .pipe(minifycss())
        .pipe(gulp.dest('css'));
});

gulp.task('build', [
    'watch'
]);

// Build css and watch for changes.
gulp.task("default", ["build"], function(){
    log("Watching scss files for modifications");
    gulp.watch(sassFiles,["watch"]);
});