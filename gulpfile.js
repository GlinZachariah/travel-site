var gulp = require('gulp');
var watch =require('gulp-watch');

var autoprefix =require('autoprefixer');
var postcss =require('gulp-postcss');
var gulpimport=require('postcss-import');
var simplevars=require('postcss-simple-vars');
var nested =require('postcss-nested');

gulp.task('default',function(){
	console.log("This is the default gulp function");
});

gulp.task('style',function(){
return gulp.src('./app/assets/css/main.css')
	.pipe(postcss([gulpimport,nested,simplevars,autoprefix]))
	.pipe(gulp.dest('./app/temp'));
});

gulp.task('watch',function(){
	watch('./app/assets/**/*.css',function(){
		gulp.start('style');
	});
});