const path = require("path");
const mix = require("laravel-mix");

mix.options({
  processCssUrls: false,
});

mix.alias({
  "@public": path.join(__dirname, "public"),
});

mix.js("src/js/app.js", "public/js");

mix.sass("src/scss/app.scss", "public/css/").options({
  processCssUrls: false,
  postCss: [require("tailwindcss")],
});

mix.copyDirectory("./public/css/", "../www/f/dist/css/");
mix.copyDirectory("./public/fonts/", "../www/f/dist/fonts/");
mix.copyDirectory("./public/images/", "../www/f/dist/images/");
mix.copyDirectory("./public/js/", "../www/f/dist/js/");

mix.browserSync({
  files: ["./**/*"],
  server: {
    baseDir: "public",
    index: "index.html",
  },
});

mix.disableSuccessNotifications();
