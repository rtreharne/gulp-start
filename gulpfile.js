var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    webserver = require('gulp-webserver');

gulp.task("watch", function(){
    livereload.listen();
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('jade/**/*.jade', ['jade']);
})

// Compile and copy Jade
gulp.task("jade", function(event) {
    return gulp.src('jade/**/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest('html/'))
    .pipe(livereload());
});

// Compile and copy Sass
gulp.task("sass", function(){
    return gulp.src('sass/**/*.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
      .pipe(livereload());
});

// Start webserver
gulp.task("webserver", function(){
    gulp.src('.')
      .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
    }));
});

gulp.task("default", ["jade", "sass", "watch", "webserver"]);
