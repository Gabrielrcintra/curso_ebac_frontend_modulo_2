const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');


function compressImages() {
    return gulp.src('./source/images/**/*')
        .pipe(imagemin()) 
        .pipe(gulp.dest('./build/images/')); 
}


function compressJavaScript() {
    return gulp.src('./source/scripts/**/*.js')
        .pipe(sourcemaps.init()) 
        .pipe(uglify()) 
        .pipe(sourcemaps.write('./maps')) 
        .pipe(gulp.dest('./build/scripts/')); 
}


function compileSass() {
    return gulp.src('./source/styles/main.scss')
        .pipe(sourcemaps.init()) 
        .pipe(sass({
            outputStyle: 'compressed' 
        }).on('error', sass.logError)) 
        .pipe(sourcemaps.write('./maps')) 
        .pipe(gulp.dest('./build/styles/')); 
}


exports.default = function() {
    gulp.watch('./source/styles/**/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/scripts/**/*.js', { ignoreInitial: false }, gulp.series(compressJavaScript));
    gulp.watch('./source/images/**/*', { ignoreInitial: false }, gulp.series(compressImages));
};
