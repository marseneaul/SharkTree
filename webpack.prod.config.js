const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  const plugins = [
    new HtmlWebpackPlugin({
      title: "Shark Tree",
      filename: "index.html", // Default page (opens first)
      template: "src/template_shark.html",
      chunks: ["shark"], // Only include shark bundle
      favicon: "src/images/shark-fin.png",
    }),
    new HtmlWebpackPlugin({
      title: "Fossil Tree",
      filename: "fossil.html",
      template: "src/template_fossil.html",
      chunks: ["fossil"], // Only include fossil bundle
      favicon: "src/images/shark-fin.png",
    }),
  ];

  // Add BundleAnalyzerPlugin if analyze flag is set
  if (env?.analyze) {
    plugins.push(new BundleAnalyzerPlugin());
  }

  return {
  mode: "production",
  entry: {
    shark: path.resolve(__dirname, "src/sharkTreeComponent.js"), // Entry for SharkTreeComponent (default page)
    fossil: path.resolve(__dirname, "src/fossilTreeComponent.js"), // Entry for FossilTreeComponent
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[contenthash].js",
    clean: true,
    assetModuleFilename: "[name][ext]",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
    plugins,
  };
};
