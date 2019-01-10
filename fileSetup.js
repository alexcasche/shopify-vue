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

folders.forEach(folder => {
  if (folder === "templates") {
    copyfiles(
      [`src/${folder}/**`, `dist/${folder}`],
      { up: true, exclude: `src/${folder}/customers/*` },
      () => console.log(`copied ${folder}`)
    );
    copyfiles(
      [`src/${folder}/customers/*`, `dist/${folder}/customers`],
      { up: true },
      () => console.log(`copied ${folder}/customers`)
    );
  } else {
    copyfiles([`src/${folder}/**`, `dist/${folder}`], { up: true }, () =>
      console.log(`copied ${folder}`)
    );
  }
});
