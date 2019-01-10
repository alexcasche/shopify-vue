const watch = require("node-watch");
const copyfiles = require("copyfiles");
const folders = [
  "assets",
  "config",
  "layout",
  "locales",
  "sections",
  "snippets",
  "templates"
];

watch("src", { recursive: true }, function(evt, name) {
  let path = name.replace("src/", "");
  let folder = path.substr(0, path.indexOf("/"));
  if (folders.indexOf(folder) >= 0) {
    if (path.indexOf("templates/customers") >= 0) {
      copyfiles([name, `dist/${folder}/customers`], { up: true }, () =>
        console.log(`copied ${folder}/customers`)
      );
    } else {
      copyfiles([name, `dist/${folder}`], { up: true }, () =>
        console.log(`copied ${name}`)
      );
    }
  }
});
