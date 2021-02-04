const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const inline = require("gulp-inline-fonts");
const sourcemaps = require("gulp-sourcemaps");
const rename = require("gulp-rename");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("default", function() {
  return gulp
    .src(["dist/*"])
    .pipe(inline({ name: "remote-icon" }))
    .pipe(sourcemaps.init())
    .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(
        autoprefixer("last 2 version", "> 1%", {
          cascade: true,
        })
      )
      .pipe(sourcemaps.write())

      .pipe(
        rename(function (path) {
          path.extname = ".min.css";
        })
      )
    .pipe(gulp.dest("dist/"));
});


