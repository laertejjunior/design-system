const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
                loader: 'file-loader',
                options: {
                  name: 'public/images/[name].[ext]'
                }
            }
          ],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'pmv-design-system.js',
    },
};