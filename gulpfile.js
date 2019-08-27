const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const watch = require('gulp-watch');
const terser = require('gulp-terser');
const concat = require('gulp-concat');


gulp.task('default', watcch);
function defaultTask(cb) {
    cb();
}

function style() {
    return gulp.src('src/sass/**.sass')
        .pipe(sass({outputStyle: 'compressed'}))  //сжимаем
        .pipe(gulp.dest('dist/css'))//выгружаем
        .pipe(browserSync.stream());//следим
}

function moveJs() {
    return gulp.src('src/js/*.js')
        .pipe(concat('main.min.js')) // Собираем их в кучу в новом файле plugins.min.js
        .pipe(terser()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/js')) // Выгружаем в папку app/js
        .pipe(browserSync.stream());//следим
}

function watcch() {
    browserSync.init({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'dist' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
    gulp.watch('src/sass/**.sass',style);
    gulp.watch('dist/*.html').on('change',browserSync.reload);
    gulp.watch('src/js/*.js',moveJs).on('change',browserSync.reload);
}

exports.watcch = watcch;
exports.style = style;
exports.moveJs = moveJs;


