var gulp = require('gulp');

var postcss = require('gulp-postcss');
var sass = require('gulp-sass');

// Plugins do postcss
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Sass roda primeiro compilando tudo pra css, daí pra diante entra o
// postcss pra minificar, gerar mapas, fazer autoprefix etx.
 
gulp.task('style', function () {
  return gulp.src('assets_src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(postcss([ //aqui passa os plugins do postcss
				autoprefixer(), //autoprefixer, configuração na chave 'browserslist' do package.json
				cssnano({ // minificador, presets diferentes podem ser passados
					preset: 'default'
				})
			]))
    .pipe(gulp.dest('assets/css'))
});
 
gulp.task('default', function () {
  gulp.watch('assets_src/sass/*.scss', ['style']);
});

