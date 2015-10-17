// Include gulp
var gulp = require('gulp');
 // Include plugins
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var minifyCss = require('gulp-minify-css');
var minifyHTML = require('gulp-minify-html');
var sourcemaps = require('gulp-sourcemaps');
//var inline = require('gulp-inline');
//var inline = require('gulp-inline-source');
//var smoosher = require('gulp-smoosher');

 // Define base folders
var dest = 'build/';
var paths = {
    scripts: ['src/components/jquery/dist/jquery.js',
              'src/components/bootstrap/dist/js/bootstrap.js',
              'src/components/knockout/dist/knockout.js',
              'src/components/tombola-awesomplete/awesomplete.js',
              'src/js/main.js'],
    styles: ['src/components/bootstrap/dist/css/bootstrap.css',
             'src/components/tombola-awesomplete/awesomplete.css',
             'src/css/style.css'],
    images: ['src/img/*'],
    fonts: ['src/components/bootstrap/fonts/glyphicons-halflings-regular.woff2',
            'src/components/bootstrap/fonts//glyphicons-halflings-regular.woff',
            'src/components/bootstrap/fonts/glyphicons-halflings-regular.ttf'],
    content: ['src/index.html']
};

 // Concatenate & Minify JS
gulp.task('jsminify', function() {
    return gulp.src(paths.scripts)
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(dest + 'js'));
});

 // Concatenate & Minify CSS
gulp.task('cssminify', function() {
    return gulp.src(paths.styles)
        .pipe(minifyCss({compatibility: 'ie8'}))
        .pipe(gulp.dest(dest + 'css'));
});

// Minify HTML
gulp.task('htmlminify', function() {
  var opts = {
    conditionals: true,
    spare: true,
    empty: true,
    quotes: true
  };

  return gulp.src(paths.content)
    .pipe(minifyHTML(opts))
    .pipe(gulp.dest(dest));
});

// Images optimization
gulp.task('images', function() {
  return gulp.src(paths.images)
    .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
    .pipe(gulp.dest(dest + 'img'));
});

// Fonts copy
gulp.task('fonts', function() {
  return gulp.src(paths.fonts)
    .pipe(gulp.dest(dest + 'fonts'));
});

 // Watch for changes in files
gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['jsminify']);
    gulp.watch(paths.styles, ['cssminify']);
    gulp.watch(paths.content, ['htmlminify']);
    gulp.watch(paths.images, ['images']);
    gulp.watch(paths.fonts, ['fonts']);
 });

 // Default Task
gulp.task('default', ['jsminify',
					  'cssminify',
					  'htmlminify',
					  'images',
            'fonts',
					  'watch']);