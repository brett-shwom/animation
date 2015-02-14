var gulp = require('gulp');
var browserSync = require('browser-sync');
var webpack = require('webpack');
var util = require('gulp-util');
var webpackConfig = require('./webpack.config');

gulp.task('html', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('webpack', function (done) {
    execWebpack(webpackConfig);
    done();
});
var execWebpack = function (config) {
    return webpack(config, function (err, stats) {
        if (err) {
            throw new util.PluginError("execWebpack", err);
        }
        return util.log("[execWebpack]", stats.toString({
            colors: true
        }));
    });
};

gulp.task('reload', browserSync.reload);

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: "./dist"
        }
    });
});


gulp.task('watch', function () {
    gulp.watch(['./src/**/*.html'], ['html']);
    gulp.watch(['./src/**/*.js'], ['webpack']);
    gulp.watch(['./dist/**/*.js'], ['reload']);
    gulp.watch(['./dist/**/*.html'], ['reload']);
});


gulp.task('default', ['webpack', 'html', 'watch', 'browser-sync']);
