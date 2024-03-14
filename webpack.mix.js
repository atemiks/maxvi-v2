const path = require("path");
const mix = require("laravel-mix");

mix.options({
  processCssUrls: false,
});

mix.alias({
  "@public": path.join(__dirname, "public"),
});

mix.js("src/js/app.js", "public/js");

mix.postCss("src/css/tailwind.css", "public/css/tailwind.css", [
  require("tailwindcss"),
]);

mix.sass("src/scss/bootstrap.scss", "public/css/");

mix.combine("public/css/**/*.css", "public/css/app.css");

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
