const browserSync = require("browser-sync");
const BASE_URL = "https://dev-pawsforacause.myshopify.com";
const PREVIEW_QUERY = "?preview_theme_id=58496254016";

browserSync({
  proxy: `${BASE_URL}${PREVIEW_QUERY}`,
  files: "browserUpdate.js"
});
