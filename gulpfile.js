const gulp = require('gulp')
const ts = require('gulp-typescript')
const mocha = require('gulp-mocha')
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

function testTask (options) {
  return () => 
    gulp
      .src('tests/**/*.test.ts')
      .pipe(mocha(options))
      .once('error', () => process.exit(1))
      .once('end', () => process.exit())
}

gulp.task('test', testTask({ 
  compilers: 'ts:ts-node/register'
}))

gulp.task('test-watch', testTask({
  watch: 'tests/**/*.test.ts',  
  compilers: 'ts:ts-node/register'
}))

gulp.task('watch', ['scripts', 'test-watch'], () => {
  gulp.watch('src/**/*.ts', ['scripts'])
})

gulp.task('assets', () => 
  gulp
    .src(JSON_FILES)
    .pipe(gulp.dest(OUTPUT_FOLDER))
)

gulp.task('default', ['watch', 'assets'])