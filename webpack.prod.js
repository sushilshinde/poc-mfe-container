const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const { dependencies } = require('./package.json')

module.exports = {
  entry: path.join(__dirname, "src", "index.js"),
  output: {
    filename: "main.js",
    path:path.resolve(__dirname, "build"),
  },
  module: {
    rules: [
      {
        test: /\.?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', ['@babel/preset-react', {"runtime": "automatic"}]]
          }
        }
      },
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src", "index.html"),
      favicon: "./src/assets/images/logo.gif"
    }),
    new MiniCssExtractPlugin(),
    // MODULE FEDERATION
    new ModuleFederationPlugin({
        name: "Host",
        filename: "moduleEntry.js",
        remotes: {
          HeaderAndFooter: `HeaderAndFooter@https://poc-mfe-header-footer.onrender.com/moduleEntry.js`,
          TopRepos: `TopRepos@https://poc-mfe-top-repos.onrender.com/moduleEntry.js`,
          Activities: `Activities@https://poc-mfe-activities.onrender.com/moduleEntry.js`,
          PublicEvents: `PublicEvents@https://poc-mfe-events.onrender.com/remoteEntry.js`
        },
        shared: {
            ...dependencies,
            react: {
                singleton: true,
                requiredVersion: dependencies['react']
            },
            "react-dom": {
                singleton: true,
                requiredVersion: dependencies['react-dom']
            }
        }
    })
  ],
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  devServer: {
    static: {
        directory: path.join(__dirname, "build")
    },
    port: 3000
  }
}
