const path = require("path");
const mix = require("laravel-mix");

// mix.sass('src/scss/app.scss', 'dist/css');
mix.options({
  processCssUrls: false,
});
mix.alias({
  "@public": path.join(__dirname, "public"),
});
mix.js("src/js/app.js", "public/js");
mix.postCss("src/css/input.css", "public/css/output.css", [
  require("tailwindcss"),
]);

mix.browserSync({
  files: ["./**/*"],
  server: {
    baseDir: "public",
    index: "index.html",
  },
});

mix.disableSuccessNotifications();
