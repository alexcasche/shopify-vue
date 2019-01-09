const watch = require("node-watch");
const copyfiles = require("copyfiles");

watch("src", { recursive: true }, function(evt, name) {
  let file = name.substr(name.lastIndexOf("/") + 1);
  let folder = name.substr(
    name.lastIndexOf("src/") + 4,
    name.lastIndexOf(file) - 5
  );
  if (folder !== "vue") {
    copyfiles([name, `dist/${folder}`], { up: true }, () =>
      console.log(`copied ${name}`)
    );
  }
});
