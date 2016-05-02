var gulp = require('gulp');
var ejs = require("gulp-ejs");

gulp.task('ejs', function(){
  gulp.src(["./dev/*.ejs"])
    .pipe(ejs())
    .pipe(ejs({}, {ext: '.html'}))
    .pipe(gulp.dest('./release/'));
});

gulp.task( 'copy', function() {
   gulp.src('dev/img/**').pipe(gulp.dest('./release/img'));
   gulp.src('dev/css/**').pipe(gulp.dest('./release/css'));
   gulp.src('dev/js/**').pipe(gulp.dest('./release/js'));
} );

gulp.task('watch', function(){
  gulp.watch(['dev/**/*.ejs'], ['ejs']);
  gulp.watch(['dev/img/**','dev/css/**','dev/js/**'], ['copy']);
});

gulp.task('build',['ejs', 'copy']);

gulp.task('default', ['watch']);
