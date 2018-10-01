var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require ('gulp-clean-css');
var sourcemaps = require ('gulp-sourcemaps');

 
gulp.task('sass', function () {
  return gulp.src('assets_src/sass/style.scss')
    .pipe(sass().on('error', sass.logError))
		.pipe(cleanCSS({compatibility: 'ie8', debug: true}, function(details) {
			console.log(`${details.name}: ${details.stats.originalSize}`);
			console.log(`${details.name}: ${details.stats.minifiedSize}`);
		}))
    .pipe(gulp.dest('assets/css'))
});
 
gulp.task('default', function () {
  gulp.watch('assets_src/sass/*.scss', ['sass']);
});

