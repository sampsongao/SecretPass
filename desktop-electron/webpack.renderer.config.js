const rules = require("./webpack.rules");
const plugins = require("./webpack.plugins");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }]
});
// added to load static image files
rules.push({
  test: /\.(png|jpg|svg|jpeg|gif)$/i,
  use: [
    {
      loader: "file-loader",
      options: {}
    }
  ]
});

module.exports = {
  module: {
    rules
  },
  plugins: plugins,
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
  }
};
