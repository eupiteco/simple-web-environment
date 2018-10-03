var gulp = require('gulp');

var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
//var sourcemaps = require('gulp-sourcemaps');

// Sass roda primeiro compilando tudo pra css, daí pra diante entra o
// sourcemaps pra minifica, gerar mapas, fazer autoprefix etx.
// postcss é um plugin do sourcemaps
// autoprefixer é um plugin do postcss
 
gulp.task('style', function () {
  return gulp.src('assets_src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(postcss([
				autoprefixer
			]))
    .pipe(gulp.dest('assets/css'))
});
 
gulp.task('default', function () {
  gulp.watch('assets_src/sass/*.scss', ['style']);
});

