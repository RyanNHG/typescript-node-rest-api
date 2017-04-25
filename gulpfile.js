const gulp = require('gulp')
const ts = require('gulp-typescript')
const JSON_FILES = ['src/*.json', 'src/**/*.json']
const OUTPUT_FOLDER = 'dist'

const tsProject = ts.createProject('tsconfig.json')

gulp.task('scripts', () => 
  tsProject
    .src()
    .pipe(tsProject())
    .js
    .pipe(gulp.dest(OUTPUT_FOLDER))
)

gulp.task('watch', ['scripts'], () => {
  gulp.watch('src/**/*.ts', ['scripts'])
})

gulp.task('assets', () => 
  gulp
    .src(JSON_FILES)
    .pipe(gulp.dest(OUTPUT_FOLDER))
)

gulp.task('default', ['watch', 'assets'])