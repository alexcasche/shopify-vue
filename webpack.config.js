const path = require("path");
const glob = require("glob");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

function getEntries(pattern) {
  const entries = {};
  glob.sync(pattern).forEach(file => {
    const ext = file.substr(file.lastIndexOf("."));
    const name = file.substr(file.lastIndexOf("/") + 1);
    const output = name.replace(ext, "");
    entries[output] = path.join(__dirname, file);
  });
  return entries;
}

const webpackJS = {
  mode: "production",
  resolve: {
    alias: {
      "@scripts": path.resolve(__dirname, "src/vue"),
      "@vue": path.resolve(__dirname, "src/vue")
    }
  },
  entry: getEntries("src/scripts/*.js"),
  output: {
    path: path.join(__dirname, "src/assets"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader"
        },
        exclude: /node_modules/
      },
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader", options: { importLoaders: 1 } },
          {
            loader: "postcss-loader",
            options: {
              config: { path: path.resolve(__dirname, "postcss.config.js") }
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      name: "[name].css"
    }),
    new VueLoaderPlugin()
  ]
};

module.exports = [{ ...webpackJS }];
