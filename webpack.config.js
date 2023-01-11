const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
// const CopyPlugin = require("copy-webpack-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const mode = process.env.NODE_ENV || "development";
const devMode = mode === "development";
const target = devMode ? "web" : "browserslist";
const devtool = devMode ? "source-map" : undefined;

const multipage = require("./multipage.config");
const htmlPlugin = multipage.pages.map((page) => {
  return new HtmlWebpackPlugin({
    inject: "body",
    favicon: "./src/static/favicon.svg",
    template: page.template,
    filename: page.page,
    chunks: [...page.chunks],
  });
});

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    port: 3000,
    open: true,
    // hot: true,
  },
  entry: {
    ...multipage.entry,
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "assets/js/[name].[contenthash].js",
    // publicPath: "./",
    assetModuleFilename: "assets/img/[name].[hash][ext][query]",
    clean: true,
  },
  plugins: [
    ...htmlPlugin,
    new FaviconsWebpackPlugin({
      // logo: "./src/static/favicon.png", // svg works too!
      logo: "./src/static/favicon.svg", // svg works too!
      mode: "webapp", // optional can be 'webapp', 'light' or 'auto' - 'auto' by default
      devMode: "webapp", // optional can be 'webapp' or 'light' - 'light' by default
      prefix: "assets/favicons/",
      manifest: "./src/manifest.json",
      cache: true,
      inject: (htmlPlugin) => {
        return true;
        // return basename(htmlPlugin.options.filename) === 'pages/articles.html'
      },
      favicons: {
        background: "#fff",
        theme_color: "#fff",
        start_url: "../../",
        appleStatusBarStyle: "default",
        icons: {
          android: [
            "android-chrome-144x144.png",
            "android-chrome-192x192.png",
            "android-chrome-256x256.png",
            "android-chrome-36x36.png",
            "android-chrome-384x384.png",
            "android-chrome-48x48.png",
            "android-chrome-512x512.png",
            "android-chrome-72x72.png",
            "android-chrome-96x96.png",
          ],
          appleIcon: [
            //"apple-touch-icon-1024x1024.png",
            //"apple-touch-icon-114x114.png",
            //"apple-touch-icon-120x120.png",
            // "apple-touch-icon-144x144.png",
            // "apple-touch-icon-152x152.png",
            // "apple-touch-icon-167x167.png",
            "apple-touch-icon-180x180.png",
            // "apple-touch-icon-57x57.png",
            // "apple-touch-icon-60x60.png",
            // "apple-touch-icon-72x72.png",
            // "apple-touch-icon-76x76.png",
            "apple-touch-icon-precomposed.png",
            "apple-touch-icon.png",
          ],
          appleStartup: false, //[
          //   "apple-touch-startup-image-1125x2436.png",
          //   "apple-touch-startup-image-1136x640.png",
          //   "apple-touch-startup-image-1242x2208.png",
          //   "apple-touch-startup-image-1242x2688.png",
          //   "apple-touch-startup-image-1334x750.png",
          //   "apple-touch-startup-image-1536x2048.png",
          //   "apple-touch-startup-image-1620x2160.png",
          //   "apple-touch-startup-image-1668x2224.png",
          //   "apple-touch-startup-image-1668x2388.png",
          //   "apple-touch-startup-image-1792x828.png",
          //   "apple-touch-startup-image-2048x1536.png",
          //   "apple-touch-startup-image-2048x2732.png",
          //   "apple-touch-startup-image-2160x1620.png",
          //   "apple-touch-startup-image-2208x1242.png",
          //   "apple-touch-startup-image-2224x1668.png",
          //   "apple-touch-startup-image-2388x1668.png",
          //   "apple-touch-startup-image-2436x1125.png",
          //   "apple-touch-startup-image-2688x1242.png",
          //   "apple-touch-startup-image-2732x2048.png",
          //   "apple-touch-startup-image-640x1136.png",
          //   "apple-touch-startup-image-750x1334.png",
          //   "apple-touch-startup-image-828x1792.png"
          //],
          favicons: [
            // "favicon-16x16.png",
            // "favicon-32x32.png",
            // "favicon-48x48.png",
            "favicon.ico",
          ],
          windows: false, //[
          // "mstile-144x144.png",
          // "mstile-150x150.png",
          // "mstile-310x150.png",
          // "mstile-310x310.png",
          // "mstile-70x70.png"
          //],
          yandex: false, //[
          //   "yandex-browser-50x50.png"
          // ],
          coast: false,
          firefox: false,
        },
      },
    }),
    new MiniCssExtractPlugin({
      filename: "assets/css/[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.pug$/i,
        exclude: /(node_modules|bower_components)/,
        use: [{ loader: "pug-loader", options: { pretty: devMode } }],
      },
      {
        test: /\.(css|scss)$/i,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          { loader: "css-loader", options: { sourceMap: true } },
          { loader: "postcss-loader", options: { sourceMap: true } },
          { loader: "resolve-url-loader", options: {} },
          { loader: "sass-loader", options: { sourceMap: true } },
        ],
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        exclude: [/img/],
        type: "asset/resource",
        generator: {
          filename: "assets/fonts/[name][ext]",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        exclude: [/fonts/],
        type: "asset/resource",
        use: [
          {
            loader: "image-webpack-loader",
            options: {
              mozjpeg: {
                progressive: devMode,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
        generator: {
          filename: "assets/img/[name].[hash][ext][query]",
        },
      },
    ],
  },
  optimization: {
    minimize: !devMode,
    minimizer: [
      new CssMinimizerPlugin({
        minimizerOptions: {
          preset: [
            "default",
            {
              discardComments: { removeAll: true },
            },
          ],
        },
      }),
    ],
    splitChunks: {
      chunks: "all",
    },
  },
};
