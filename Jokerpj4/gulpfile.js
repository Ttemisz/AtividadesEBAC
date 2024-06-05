const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');


function scripts(){
    return gulp.src('source/scripts/main.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/scripts'))
}
function styles() {
    return gulp.src('source/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(gulp.dest('build/styles'));
        
}

function watch() {
    gulp.watch('source/styles/*.scss', styles);
    gulp.watch('source/scripts/main.js',scripts)
}

exports.default = gulp.parallel(styles,watch,scripts);
exports.watch = watch;
