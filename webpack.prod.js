const path = require('path');
module.exports = {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname),
        publicPath: '/',
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: [path.resolve(__dirname, 'src')],
                exclude: [path.resolve(__dirname, 'node_modules')],
                loader: 'babel-loader',
                query: {
                    presets: [
                        '@babel/preset-react',
                        [
                            '@babel/env',
                            {
                                modules: 'commonjs',
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
    resolve: {
        extensions: ['.json', '.js', '.jsx']
    },
    devtool: 'source-map'
};
