export const copyFavicon = () => {
  return app.gulp
    .src(app.path.src.favicon)
    .pipe(app.gulp.dest(app.path.build.favicon))
}
