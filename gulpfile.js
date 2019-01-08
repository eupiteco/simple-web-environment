//TODO
// - css maps dentro de src

var gulp = require('gulp');

var postcss = require('gulp-postcss');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var webserver = require('gulp-webserver');

// Plugins do postcss
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');

// Sass roda primeiro compilando tudo pra css, daí pra diante entra o
// postcss pra minificar, gerar mapas, fazer autoprefix etx.

gulp.task('style', function () {
	return gulp.src('src/sass/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(postcss([ //aqui passa os plugins do postcss
				autoprefixer(), //autoprefixer, configuração na chave 'browserslist' do package.json
				cssnano({ // minificador, presets diferentes podem ser passados
					preset: 'default'
				})
			]))
		.pipe(gulp.dest('assets/css'))
});

gulp.task('watch', function (){
	gulp.watch('src/sass/*.scss', ['style']);
});

gulp.task('webserver', function() {
		gulp.src('./')
			.pipe(webserver({
				livereload: true,
				directoryListing: true,
				open: true,
				port: 8001
			}));
	});

gulp.task('default', ['style', 'webserver', 'watch']);
