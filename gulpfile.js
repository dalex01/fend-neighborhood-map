// Include gulp
var gulp = require('gulp');
 // Define base folders
var dest = 'build/';
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
//var inline = require('gulp-inline');
//var inline = require('gulp-inline-source');
//var smoosher = require('gulp-smoosher');

 // Concatenate & Minify JS
gulp.task('jsminify', function() {
    return gulp.src('js/*.js')
//      .pipe(concat('main.js'))
//        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'js'));
});

 // Concatenate & Minify JS in views folder
gulp.task('jsminify-views', function() {
    return gulp.src('views/js/*.js')
//      .pipe(concat('main.js'))
//        .pipe(rename({suffix: '.min'}))
        .pipe(uglify())
        .pipe(gulp.dest(dest + 'views/js'));
});

 // Concatenate & Minify CSS
gulp.task('cssminify', function() {
    return gulp.src('css/*.css')
//      .pipe(concat('main.css'))
//        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest + 'css'));
});

// Concatenate & Minify CSS in views folder
gulp.task('cssminify-views', function() {
    return gulp.src('views/css/*.css')
//      .pipe(concat('main.css'))
//        .pipe(rename({suffix: '.min'}))
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest + 'views/css'));
});

// Minify HTML
gulp.task('htmlminify', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src('./*.html')
//    .pipe(smoosher())
//    .pipe(inline({
//      base: './',
//      js: uglify(),
//      css: minifyCss()
//    }))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(dest));
});

// Minify HTML in views folder
gulp.task('htmlminify-views', function() {
  var opts = {
    conditionals: true,
    spare: true
  };

  return gulp.src('views/*.html')
//    .pipe(inline({
//      js: uglify(),
//      css: minifyCss(),
//    }))
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(dest + 'views'));
});

// Images optimization
gulp.task('images', function() {
  return gulp.src('img/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'img'));
});

// Images optimization in views folder
gulp.task('images-views', function() {
  return gulp.src('views/images/*')
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'views/images'));
});

 // Watch for changes in files
gulp.task('watch', function() {
   // Watch .js files
  gulp.watch('js/*.js', ['jsminify']);
  gulp.watch('views/js/*.js', ['jsminify-views']);
   // Watch css files
  gulp.watch('css/*css', ['cssminify']);
  gulp.watch('views/css/*css', ['cssminify-views']);
   // Watch html files
  gulp.watch('./*html', ['htmlminify']);
  gulp.watch('views/*html', ['htmlminify-views']);
   // Watch image files
  gulp.watch('img/*', ['images']);
  gulp.watch('views/images/*', ['images-views']);
 });
 // Default Task
gulp.task('default', ['jsminify',
					  'cssminify',
					  'htmlminify',
					  'images',
					  'jsminify-views',
					  'cssminify-views',
					  'htmlminify-views',
					  'images-views',
					  'watch']);