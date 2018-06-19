var gulp = require('gulp');
var sass = require('gulp-sass');

//style paths
var sassFiles = 'scss/*.scss';
var cssDest = 'css/';

gulp.task('styles', function(done){
    return gulp.src(sassFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(cssDest));
});

gulp.task('watch', function(done) {
    return gulp.watch(sassFiles, gulp.series('styles'));
});
