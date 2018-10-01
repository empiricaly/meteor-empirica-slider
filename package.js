Package.describe({
  name: "empirica:slider",
  version: "0.0.1",
  summary: "A configurable slider suitable for running Empirica experiments.",
  git: "https://github.com/empiricaly/meteor-empirica-slider.git",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom("1.7.0.5");
  api.use(["less", "ecmascript"]);
  api.addFiles("slider.less", "client");
  api.mainModule("slider.js");
});

Npm.depends({
  "@blueprintjs/core": "3.6.1",
  react: "16.5.2",
  "react-dom": "16.5.2"
});

Package.onTest(function(api) {
  api.use("ecmascript");
  api.use("tinytest");
  api.use("empirica:slider");
  api.mainModule("slider-tests.js");
});
