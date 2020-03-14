const path = require('path');


module.exports = {
    // devtool: "source-map",
    entry: {
        // app: 'src/index.ts'
        app: path.resolve(__dirname, 'src/index.ts')
    },

    module: {
        rules: [
            {
                // test: /\.tsx?$/,
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
        ]
        // rules: [
        //     {
        //         test: /\.(ts|tsx)$/,
        //         exclude: /node_modules/,
        //         // loader: "ts-loader"
        //         use: {
        //             loader: "ts-loader",
        //             // options: {
        //             //     presets: ["@babel/preset-env"]
        //             // }
        //         }
        //     }
        // ]
    },

    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },

    output: {
        // use path.resolve(__dirname,"path"); if you want to go from project root
        // path: path.resolve(__dirname, 'dist/includes/js'),
        // publicPath: '/',
        // path: path.resolve(__dirname,"./"),
        // filename: '[name]-[hash].bundle.js'
        // filename: '[name].bundle.js'
        path: path.resolve(__dirname, './dist/includes/js'),
        // filename: 'app.js'
        filename: '[name].bundle.js'
    },

    stats: {
        warnings: false
    },

    watch: true
};