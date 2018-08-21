// var path = require("path");

// module.exports = {
//     context: __dirname,
//     entry: "./frontend/CADGallery.jsx",
//     output: {
//         path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
//         filename: "bundle.js"
//     },
//     module: {
//         rules: [
//             {
//                 test: [/\.jsx?$/, /\.js?$/],
//                 exclude: /node_modules/,
//                 loader: 'babel-loader',
//                 query: {
//                     presets: ['env', 'react']
//                 }
//             }
//         ]
//     },
//     devtool: 'source-map',
//     resolve: {
//         extensions: [".js", ".jsx", "*"]
//     }
// };   





// webpack.config.js
var path = require("path");
var webpack = require("webpack");

var plugins = []; // if using any plugins for both dev and production
var devPlugins = []; // if using any plugins for development

// var prodPlugins = [
//     new webpack.DefinePlugin({
//         'process.env': {
//             'NODE_ENV': JSON.stringify('production')
//         }
//     }),
//     new config.optimization.minimize({
//         compress: {
//             warnings: true
//         }
//     })
// ];

// plugins = plugins.concat(
//     process.env.NODE_ENV === 'production' ? prodPlugins : devPlugins
// )

// include plugins config
module.exports = {
    context: __dirname,
    entry: "./frontend/CADGallery.jsx",
    output: {
        path: path.resolve(__dirname, "app", "assets", "javascripts"),
        filename: "bundle.js"
    },
    // plugins: plugins,
    module: {
        rules: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env']
            }
        }]
    },
    devtool: 'source-map',
    resolve: {
        extensions: [".js", ".jsx", "*"]
    }
};
