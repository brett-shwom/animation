var gulp = require('gulp')
  , connect = require('gulp-connect')
  , to5 = require('gulp-6to5')
;
 
gulp.task('connect', function() {
  connect.server({
    root: './dist',
    livereload: true
  })
})
 
gulp.task('html', function () {
  gulp.src('./src/**/*.html')
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})
 
gulp.task('js', function () {
  gulp.src('./src/**/*.js')
    .pipe(to5({modules : 'ignore'}))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})

gulp.task('watch', function () {
  gulp.watch(['./src/**/*.html'], ['html'])
  gulp.watch(['./src/**/*.js'], ['js'])
});

gulp.task('compile', ['js', 'html'])
 
gulp.task('default', ['compile','connect', 'watch'])
