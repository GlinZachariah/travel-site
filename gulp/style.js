var gulp = require('gulp');
var autoprefix =require('autoprefixer');
var postcss =require('gulp-postcss');
var gulpimport=require('postcss-import');
var simplevars=require('postcss-simple-vars');
var nested =require('postcss-nested');


gulp.task('style',function(){
return gulp.src('./app/assets/css/main.css')
	.pipe(postcss([gulpimport,nested,simplevars,autoprefix]))
	.pipe(gulp.dest('./app/temp'));
});

