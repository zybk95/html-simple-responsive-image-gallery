var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
const reload = browserSync.reload;

gulp.task('browser-sync', function () {
  browserSync.init({
    notify: false, //yenilemedeki bildirimi kapatıyor.
    server: {
      baseDir: "./"
    }
  });
  gulp.watch('./style.scss', gulp.series('css'));
  gulp.watch('./index.html', gulp.series('html'));

});

gulp.task('css', () => {
  return gulp.src('./style.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
});

gulp.task('html', () => {
  return gulp.src('./index.html')
    .pipe(browserSync.stream())
});


gulp.task('default', gulp.parallel('browser-sync', 'css'));