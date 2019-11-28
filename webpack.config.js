const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: path.join(__dirname, 'client', 'main.js'),
    output: {
        path: path.join(__dirname, 'client-dist'),
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [path.resolve(__dirname, 'src'), path.resolve(__dirname, 'client')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-react',
                        [
                            '@babel/env',
                            {
                                targets: {
                                    browsers: 'last 2 versions, not ie 10'
                                }
                            }
                        ]
                    ]
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('client', 'index.html')
        })
    ],
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    devtool: 'source-map',
    devServer: {
        contentBase: path.join(__dirname, '/dist'),
        inline: true,
        host: 'localhost',
        port: 8080
    }
};
