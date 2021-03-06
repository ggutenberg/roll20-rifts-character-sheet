const gulp = require("gulp");
const replace = require("gulp-replace");
const del = require("del");
const tap = require("gulp-tap");
const inject = require("gulp-inject");

const paths = {
  html: {
    src: "src/**/*.html",
    dest: "dist/",
  },
  styles: {
    src: "src/**/*.css",
    dest: "dist/",
  },
  js: {
    src: "src/**/*.js",
    dest: "dist/",
  },
};

const clean = () => {
  return del(["dist"]);
};

const buildStyles = () => {
  return gulp.src(paths.styles.src).pipe(gulp.dest(paths.styles.dest));
};

const buildHtml = () => {
  return gulp
    .src("src/sheet.html")
    .pipe(
      inject(gulp.src(["src/partials/*.html"]), {
        starttag: "<!-- inject:{{path}} -->",
        relative: true,
        transform: function (filepath, file) {
          return file.contents.toString("utf8");
        },
      })
    )
    .pipe(
      inject(gulp.src(["src/js/*.js"]), {
        starttag: "/* inject:{{path}} */",
        relative: true,
        endtag: "/* endinject */",
        transform: function (filepath, file) {
          return file.contents.toString("utf8");
        },
      })
    )
    .pipe(replace(/text\/javascript/g, "text/worker"))
    .pipe(gulp.dest(paths.html.dest));
};

const build = gulp.series(clean, buildHtml, buildStyles);

const watch = () => {
  gulp.watch(paths.html.src, build);
  gulp.watch(paths.styles.src, build);
  gulp.watch(paths.js.src, build);
};

exports.watch = watch;
exports.build = build;
exports.default = build;
