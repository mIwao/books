const gulp = require('gulp')
const babel = require('gulp-babel')

gulp.task('default',[ 'copy', 'babel', 'babel_public'], () => {
})

gulp.task('copy', () => {
  // gulp.src(['public/*.html', 'public/js/*.*', 'public/css/*.*'])
  gulp.src(['public/**/*.*', '!public/app.js'])
    .pipe(gulp.dest( 'dist/public' ))
})

gulp.task('babel', () => {
    gulp.src(['src/**/*.js'])
    .pipe(babel( { presets: [ 'es2015' ]}))
    .pipe(gulp.dest( 'dist' ))
})

gulp.task('babel_public', () => {
    gulp.src(['public/app.js'])
    .pipe(babel( { presets: [ 'es2015' ]}))
    .pipe(gulp.dest( 'dist/public' ))
})