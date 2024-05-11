const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const obfuscate = require('gulp-obfuscate');
const imagemin = require('gulp-imagemin');


function comprimirimg(){
    return gulp.src('/home/temistoclis/Documents/Projetosvscode/gulp/source/images/*')
    .pipe(imagemin())
    .pipe(gulp.dest('/home/temistoclis/Documents/Projetosvscode/gulp/build/images'))
}
function comprimejavascript(){
    return gulp.src('/home/temistoclis/Documents/Projetosvscode/gulp/source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('/home/temistoclis/Documents/Projetosvscode/gulp/build/scripts'))
}

function compilaSass(){
    return gulp.src('/home/temistoclis/Documents/Projetosvscode/gulp/source/styles/main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
        outputStyle: 'compressed'
    }))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest("/home/temistoclis/Documents/Projetosvscode/gulp/build/styles"));

}


exports.sass = compilaSass;
exports.watch = function(){
    gulp.watch('/home/temistoclis/Documents/Projetosvscode/gulp/source/styles/*.scss',{ignoreInitial:false}, gulp.series(compilaSass))
}
exports.javascript = comprimejavascript;
exports.imagens = comprimirimg;