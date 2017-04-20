var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    webserver = require('gulp-webserver');

// Compile and copy Jade
gulp.task("jade", function(event) {
    return gulp.src('jade/**/*.jade')
    .pipe(jade({pretty: true}))
    .pipe(gulp.dest(''))
});

// Compile and copy Sass
gulp.task("sass", function(){
    return gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
});

// Start webserver
gulp.task("webserver", function(){
    gulp.src('')
      .pipe(webserver({
        livereload: true,
        directoryListing: true,
        open: true
    }));
});
