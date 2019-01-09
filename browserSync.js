const browserSync = require("browser-sync");
const BASE_URL = "https://dev-alex.myshopify.com";
const PREVIEW_QUERY = "?preview_theme_id=39247085666";

browserSync({
  proxy: `${BASE_URL}${PREVIEW_QUERY}`,
  files: "browserUpdate.js"
});
