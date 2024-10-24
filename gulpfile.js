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
    return gulp.src('./source/js/**/*.js')
        .pipe(sourcemaps.init()) 
        .pipe(uglify()) 
        .pipe(sourcemaps.write('./maps')) 
        .pipe(gulp.dest('./build/js/')); 
}


function compileSass() {
    return gulp.src('./source/sass/**/*.scss')
        .pipe(sourcemaps.init()) 
        .pipe(sass({
            outputStyle: 'compressed' 
        }).on('error', sass.logError)) 
        .pipe(sourcemaps.write('./maps')) 
        .pipe(gulp.dest('./build/sass/')) 
}


exports.default = function() {
    gulp.watch('./source/sass/**/*.scss', { ignoreInitial: false }, gulp.series(compileSass));
    gulp.watch('./source/js/**/*.js', { ignoreInitial: false }, gulp.series(compressJavaScript));
    gulp.watch('./source/images/**/*', { ignoreInitial: false }, gulp.series(compressImages));
};
