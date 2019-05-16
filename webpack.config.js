/*
    Native NodeJS Dependencies
*/
const path = require('path');

/*
    NPM Dependencies
*/
// https://webpack.js.org/concepts/
const webpack = require('webpack');
// https://github.com/jantimon/html-webpack-plugin
const HtmlWebpackPlugin = require('html-webpack-plugin');
// https://github.com/johnagan/clean-webpack-plugin
const CleanWebpackPlugin = require('clean-webpack-plugin');

/*
    Local Dependencies
*/


/*
    publicPathAbs - Full path to public directory
    publicJsPathAbs - Full path to the public/js directory
*/
const publicPathAbs = path.resolve(__dirname, "public");
const publicJsPathAbs = path.resolve(__dirname, "public", "js");

/*
    You can pass env variables into webpack.
    For instance, to set the mode to production: npx webpack --env.mode production
    {String} mode - development or production
*/
module.exports = ({ mode } = { mode: "production" }) => {
    return {
        /*
            Which "mode" to run this build in (production/development)
        */
        mode,
        /*
            The entry points of the build
            One entry point per page (in a multi page architecture)
            Reference it via "chunks[]" in HtmlWebpackPlugin
        */
        entry: {
            // The Primary Javascript File
            main: "./src/js/entrypoint.js"
        },
        /*
            Where to send the generated JS files and what to name them
        */
        output: {
            path: publicPathAbs,
            filename: "js/[name].js",
            // Without the hash, cleanwebpackplugin will delete all files each increment
            // The hash forces them to be remade on each save (for dev purposes)
            // But it also is anti caching for clients
            chunkFilename: 'js/[name].[hash].lazy-chunk.js',
            // Use / for absolute paths in the generated html files
            publicPath: '/'
        },
        /*
            Rather than bundle these modules within the main javascript file,
            here I told Webpack to not bundle them at all, and instead, map
            the npm module name (left) to the global scope variable (right)
            In code, you'll still say `import React from 'react'`
            But instead, you'll use <script> tags to include the javascript files.
        */
        externals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        },
        /*
            Which Loaders to use (babel)
        */
        module: {
            rules: [
                /*
                    Rules for JS and JSX Files (Babel)
                */
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                /*
                    Fix EJS files having tags that have undefined variables
                    (Just make HtmlWebpackPlugin allow you to work with ejs)
                */
                {
                    test: /\.(html|ejs)$/i,
                    use: 'raw-loader'
                }
            ]
        },
        /*
            Which Plugins To Use
        */
        plugins: [
            // See more detailed output in the console
            new webpack.ProgressPlugin(),
            // Delete all .map and .js files from the public/js folder
            new CleanWebpackPlugin([
                path.resolve(publicJsPathAbs, '*.map'),
                path.resolve(publicJsPathAbs, '*.js')
            ], {
                // Simulate the removal of files
                dry: false,
                // Write logs to console
                verbose: true,
                watch: true
            }),
            // Automatically import React in every file
            new webpack.ProvidePlugin({
                'React': 'react'
            }),
            // Create one of these for each HTML page that should be generated
            new HtmlWebpackPlugin({
                filename: path.join('./', 'index.html'),
                template: 'src/index.html',
                hash: true, // Each script will have a hash appended for cache busting
                chunks: ['main'] // Each chunk will be a script tag
            })
        ]
    };
};