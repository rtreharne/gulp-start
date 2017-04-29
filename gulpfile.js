var gulp = require('gulp'),
    jade = require('gulp-jade'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
<<<<<<< HEAD
    webserver = require('gulp-webserver')
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat')
    uglify = require('gulp-uglify')
    rename = require('gulp-rename');
=======
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat')
    webserver = require('gulp-webserver');
>>>>>>> 2aa4733ee64f1314a5d13930dffb6fe07eeef41f

gulp.task("watch", function(){
    livereload.listen();
    gulp.watch('sass/**/*.sass', ['sass']);
    gulp.watch('jade/**/*.jade', ['jade']);
    gulp.watch('coffee/**/*.coffee', ['scripts'])
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

// Compile and copy scripts
gulp.task('scripts', function () {
  return gulp.src('./coffee/**/*.coffee', { read: false })
             .pipe(browserify({ transform: ['coffeeify'], extensions: ['.coffee'] }))
<<<<<<< HEAD
             .pipe(concat('main.js'))
             .pipe(gulp.dest('./js'))
             .pipe(rename('main.min.js'))
             .pipe(gulp.dest('./js'))
             .pipe(livereload());
=======
             .pipe(concat('*.js'))
             .pipe(gulp.dest('main.js'));
>>>>>>> 2aa4733ee64f1314a5d13930dffb6fe07eeef41f
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

gulp.task("default", ["scripts", "jade", "sass", "watch", "webserver"]);
