
// Require libraries ===========================================================

var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var gutil        = require('gulp-util');
var minimist     = require('minimist');
var size         = require('gulp-size');
var sass         = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var uglify       = require('gulp-uglify');
var concat       = require('gulp-concat');
var bower        = require('gulp-bower');
var chalk        = require('chalk');
// var drush        = require('drush-node');

// var exec         = require('child_process').exec;
// Command line arguments ======================================================
//
// Use "gulp --env production" if you want to complie a production ready version
// of the code.
//

var knownOptions = {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'development' }
};

var options = minimist(process.argv.slice(2), knownOptions);


// Tasks =======================================================================

  // SCSS ----------------------------------------------------------------------

  gulp.task('scss', function() {

    return gulp.src('./styles/**/*.scss')
    .pipe(sass.sync({
      includePaths: require('node-normalize-scss').includePaths,
      outputStyle: 'expanded'
    }))
    .pipe(gulpif(options.env === 'production',
      sass({
        outputStyle: 'compressed'
      })
    ))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(size({
      title: "Stylesheets - "
    }))
    .pipe(gulp.dest('./css'));
  });

  // Assets --------------------------------------------------------------------

  gulp.task('bower', function() {
    return bower()
      .pipe(gulp.dest('./bower_components'))
  });

  gulp.task('dependencies', function(){
    var prod = [
      './bower_components/jquery-formatcurrency/jquery.formatCurrency-1.4.0.min.js',
      './bower_components/jquery.browser/dist/jquery.browser.min.js',
      './bower_components/jquery.eye/dist/jquery.eye.min.js',
      './bower_components/chosen/chosen.jquery.min.js',
      './bower_components/jquery.limit/index.js'
    ];
    var dev = [
      './bower_components/js-cookie/src/js.cookie.js'
    ];

    return gulp.src(options.env === 'production' ? prod : prod.concat(dev))
    .pipe(concat('dependencies.js'))
    .pipe(gulpif(options.env === 'production', uglify()))
    .pipe(size({
      title: "Dependencies - "
    }))
    .pipe(gulp.dest('./js'));

  });

  // JS ------------------------------------------------------------------------

  gulp.task('js', function() {
    return gulp.src(options.env === 'production' ? ['./scripts/scripts.js'] : ['./scripts/scripts.js', './scripts/test-data.js' ])
    .pipe(concat('commerce.forms.js'))
    .pipe(gulpif(options.env === 'production', uglify()))
    .pipe(size({
      title: "Javascript - "
    }))
    .pipe(gulp.dest('./js'));
  });


  // Drush ---------------------------------------------------------------------
  // gulp.task('drush', function (cb) {

    // Can't get this one to work correctly - reverting to a simple shell version
    // drush.init().then(
    //   function() {
    //     drush.exec('cc all').then (
    //       function (res) {
    //         console.log(res);
    //       }
    //     );
    //   }
    // );

  //   exec('drush cc all', function (err, stdout, stderr) {
  //     gutil.log(stderr);
  //     cb(err);
  //   });
  // });

// Run Task [default] ==========================================================

  // Default -------------------------------------------------------------------

  gulp.task('default', ['bower', 'dependencies', 'scss', 'js'], function() {
    gutil.log(chalk.black.bgGreen.bold(' F I N I S H E D '));
  });

  gulp.task('development', function() {
    gulp.watch('./styles/**/*.scss',  ['scss']);
    gulp.watch('./scripts/**/*.js', ['js']);
  });



