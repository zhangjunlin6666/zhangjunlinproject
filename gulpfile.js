var gulp=require('gulp'),/*引入基础模块*/
		livereload=require('gulp-livereload'),/*引入自动刷新模块*/
		webserver=require('gulp-webserver'),/*引入服务模块*/
		uglify=require('gulp-uglify'),/*引入压缩js模块*/
		imagemin=require('gulp-imagemin'),/*引入压缩图片模块*/
		pngquant=require('imagemin-pngquant'),/*引入深度压缩图片模块*/
		minifycss=require('gulp-minify-css');/*引入css压缩模块*/
		
/*自动刷新任务*/
gulp.task("webserver",function(){
	gulp.src("dist")
	.pipe(webserver({
		livereload:true,
		open:true
	}))
});
/*html压缩*/
gulp.task('html',function(){
	return gulp.src('src/*.html')
	.pipe(gulp.dest('dist'))
});
/*js脚本的压缩*/
gulp.task("ys",function(){
	return gulp.src('src/js/**/*.js')
	.pipe(uglify({preserveComments:'some'}))
	.pipe(gulp.dest('dist/js'))
});

/*压缩图片*/
gulp.task('images',function(){
	return gulp.src('src/img/*.{png,jpg,gif,svg}')
	.pipe(imagemin({
			progressive:true,
			svgoPlugins:[{removeViewBox:false}],
			use:[pngquant()]
	}))
	.pipe(gulp.dest('dist/img'));
});
/*css压缩*/
gulp.task('minify-css',function(){
	gulp.src('src/css/*.css')
	.pipe(gulp.dest('dist/css'))
});

/*监听任务*/
gulp.task("watch",function(){
	gulp.watch("*.html",["html"]);
});

/*默认任务*/
gulp.task("default",["webserver","watch","ys","images","minify-css","html"]);
