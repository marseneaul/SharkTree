const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = (env) => {
  // Determine which entry to use based on environment
  const entry = env?.entry || 'both';
  
  const entryConfig = {
    shark: path.resolve(__dirname, "src/sharkTreeComponent.js"),
    fossil: path.resolve(__dirname, "src/fossilTreeComponent.js"),
  };

  // If specific entry is requested, only include that one
  const selectedEntry = entry === 'both' ? entryConfig : { [entry]: entryConfig[entry] };

  return {
    mode: "development",
    entry: selectedEntry,
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
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 8000,
    open: false, // Disable auto-opening browser
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
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
  plugins: [
    new HtmlWebpackPlugin({
      title: "Shark Tree",
      filename: "index.html", // Default page (opens first)
      template: "src/template_shark.html",
      chunks: ["shark"], // Only include shark bundle
    }),
    new HtmlWebpackPlugin({
      title: "Fossil Tree",
      filename: "fossil.html",
      template: "src/template_fossil.html",
      chunks: ["fossil"], // Only include fossil bundle
    }),
    // BundleAnalyzerPlugin disabled for development - use npm run analyze to enable
    // new BundleAnalyzerPlugin(),
  ],
  };
};