var gulp = require('gulp');
var watch =require('gulp-watch');
var browserSync =require('browser-sync').create();


gulp.task('reload',function(){
	browserSync.reload();
});

gulp.task('cssinject',['style'],function(){
	return gulp.src('./app/temp/main.css')
				.pipe(browserSync.stream());
});

gulp.task('watch',function(){
	watch('./app/assets/**/*.css',function(){
		gulp.start('cssinject');
	});

	watch('./app/index.html',function(){
		// gulp.start('reload');
		gulp.start('cssinject');
	})

	browserSync.init({
		notify: false,
		server:{
			baseDir:"app"
		}
	});
});

