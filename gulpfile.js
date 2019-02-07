// ***************************
// 1. Déclaration des variables
// ***************************
var gulp =          require('gulp');
var sass =          require('gulp-sass');
var rename =        require("gulp-rename");
var minify =        require('gulp-minify');
var autoprefixer =  require('gulp-autoprefixer');
var browserSync =   require('browser-sync');
var smushit =       require('gulp-smushit');

// *************
// 2. Mes tâches
// *************

// Moulinette SASS
gulp.task('sassification', function () {
    return gulp.src('./src/css/**/*.scss')
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest('./dist/css'));
});

// Moulinette JS
gulp.task('jsification', function () {
    return gulp.src('./src/js/*.js')
        .pipe(minify({
            ext: {
                min: '.min.js'
            },
            noSource:true
        }))
        .pipe(gulp.dest('./dist/js'));
});

// Moulinette HTML
gulp.task('htmlification', function () {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
});

// Browser Sync
gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: "./dist/"
        }
    });
});

// Smushage
gulp.task('compress', function () {
    return gulp.src('./src/img/*.{jpg,png}')
        .pipe(smushit())
        .pipe(gulp.dest('./dist/img/'));
});


// ***********************
// 3. Exécution des tâches
// ***********************
gulp.task('observe', gulp.parallel('browser-sync','compress', 'htmlification', 'sassification', 'jsification', function () {
    gulp.watch('./src/css/**/*.scss', gulp.series('sassification'));
    gulp.watch('./src/js/*.js', gulp.series('jsification'));
    gulp.watch('./src/*.html', gulp.series('htmlification'));
    gulp.watch('./dist/*.html').on('change', browserSync.reload);
    gulp.watch('./dist/css/*.css').on('change', browserSync.reload);
    gulp.watch('./dist/js/*.js').on('change', browserSync.reload);
}));

gulp.task('default', gulp.series('observe'));