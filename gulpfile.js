const {src, dest, series, watch} = require('gulp');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
// const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync').create();
// const autoprefixer = require('gulp-autoprefixer');
//очистка папки dist перед очередным запуском gulp (error version)
const del = require('del'); 

const resources = () => {
    return src('src/resources/**')
    .pipe(dest('dist/'))
}
const fonts = () => {
    return src('src/fonts/**')
    .pipe(dest('dist/fonts/'))
}
const clean = () => {
    return del(['dist/'])
}

const styles = () => {
    return src([
        'src/styles/**/*.css',
        'src/styles/**/*.scss'
    ])
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.init())
    .pipe(concat('main.css'))
    .pipe(autoprefixer({
        cascade: false,
        overrideBrowsersList: ['last 2 versions']
    }))
    .pipe(cleanCSS({
        level: 2 // уровень сжатия
    }))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/'))
    .pipe(browsersync.stream())
}
const pugFiles = () => {
    return src('src/index.pug')
    .pipe(pug())
    .pipe(dest('dist/'))
    .pipe(browsersync.stream())
}
// const htmlMinify = () => {
//     return src('src/**/*.html')
//     .pipe(htmlMin({collapseWhitespace: true}))
//     .pipe(dest('dist/'))
//     .pipe(browsersync.stream())
// }

const svgSprites = () => {
    return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: '../sprite.svg'
            }
        }
    }))
    .pipe(dest('dist/images/'))
}

const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/**/*.jpeg',
        'src/img/*.svg',
        'src/img/**/*.webp',
        'src/img/**/*.ico'
    ])
    .pipe(image())
    .pipe(dest('dist/images/'))
}

const scripts = () => {
    return src([
        'src/js/components/**/*.js',
        'src/js/main.js'
    ])
    .pipe(sourcemaps.init())
    .pipe(babel({
        presets: ['@babel/preset-env']
    }))
    .pipe(concat('app.js'))
    .pipe(uglify({
        toplevel: true //убирает все переменные
    }).on('error', notify.onError()))
    .pipe(sourcemaps.write())
    .pipe(dest('dist/'))
    .pipe(browsersync.stream())
}

const watchFiles = () => {
    browsersync.init({
        server: {
            baseDir: 'dist/'
        }
    })
}

// watch('src/**/*.html', htmlMinify)
watch('src/fonts/**', fonts)
watch('src/styles/**/*.scss', styles)
watch('src/styles/**/*.css', styles)
watch('src/img/svg/**/*.svg', svgSprites)
watch('src/js/**/*.js', scripts)
watch('src/resources/**', resources)
watch('src/index.pug', pugFiles)

exports.styles = styles
// exports.htmlMinify = htmlMinify
exports.scripts = scripts
exports.clean = clean
exports.pugFiles = pugFiles
exports.images = images
exports.svgSprites = svgSprites
// exports.default = series(clean, resources, htmlMinify, fonts, scripts, styles, images, svgSprites, watchFiles)
exports.default = series(clean, resources, pugFiles, fonts, scripts, styles, images, svgSprites, watchFiles)
// exports.dev = series(clean, resources, scripts, styles, images, svgSprites, watchFiles)