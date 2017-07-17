var gulp = require("gulp"),
  watch = require("gulp-watch"),
  postcss = require("gulp-postcss");

gulp.task("default", function() {
  console.log("huuu bravo");
});

gulp.task("html", function() {
  console.log("imagine something useful");
});

gulp.task("styles", function() {
  return gulp
    .src("./app/assets/styles/styles.css")
    .pipe(gulp.dest("./temp/styles"));
});

gulp.task("watch", function() {
  watch("./app/index.html", function() {
    gulp.start("html");
  });

  watch("./app/assets/styles/**/*.css", function() {
    gulp.start("styles");
  });
});
