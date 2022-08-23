// Generated using webpack-cli https://github.com/webpack/webpack-cli

module.exports = {
    entry: './app/app.ts',
    // devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
    },

    resolve: {
        extensions: ['.tsx', '.ts', '.js',],
    },
    output: {
        filename: 'bundle.js'
    },
    devServer: {
        inline: true
    },
};


