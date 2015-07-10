/*eslint no-var: 0 */
"use strict";

var path = require("path"),
    webpack = require("webpack");


var generateConfig = function(address, isDevelopment) {
    var url = "http://" + address.host + ":" + address.port;

    return {
        generateConfig: generateConfig, // not part of webpack (for server.js)

        devtool: "eval",
        entry: isDevelopment ? [
            "webpack-dev-server/client?" + url,
            "webpack/hot/only-dev-server",
            "./src/index"
        ] : [
            "./src/components/index"
        ],
        output: {
            path: path.join(__dirname, "dist"),
            filename: "app.min.js",
            publicPath: "/src/"
        },
        plugins: isDevelopment ? [
            new webpack.HotModuleReplacementPlugin()
        ] : [
            new webpack.NoErrorsPlugin(),
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                output: {
                    "comments": false
                },
                compress: {
                    "warnings": false
                }
            })
        ],
        resolve: {
            extensions: ["", ".js", ".jsx", ".json"]
        },
        module: {
            loaders: [
                {
                    test: /\.(js|jsx)?$/,
                    loaders: isDevelopment ? [
                        "react-hot",
                        "babel?stage=1"
                    ] : [
                        "babel?stage=1"
                    ],
                    include: path.join(__dirname, "src")
                },
                {
                    test: /\.json?$/,
                    loader: "json-loader"
                },
                {
                    test: /\.(js|jsx)$/,
                    loader: "eslint-loader",
                    exclude: /node_modules/
                }
            ]
        }
    };
};


module.exports = generateConfig({
    host: "localhost",
    port: 3000
}, false);
