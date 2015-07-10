/*eslint no-var: 0 */
"use strict";

var webpack = require("webpack"),
    WebpackDevServer = require("webpack-dev-server"),
    generateConfig = require("./webpack.config").generateConfig;

var address = {
    host: "localhost",
    port: 3000
};

// var isDevelopment = process.env.NODE_ENV !== "production";

var config = generateConfig(address, true);

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(address.port, address.host, function (err/*, result*/) {
    if (err) {
        console.log(err);
    }
    console.log("Listening at " + address.host + ":" + address.port);
});
