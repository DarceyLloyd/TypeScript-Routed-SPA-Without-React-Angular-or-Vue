const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    optimization: {
        usedExports: true,
    },
    devServer: {
        contentBase: './dist',
    }
});


// module.exports = merge(common, {
//     mode: 'development',
//     devtool: 'inline-source-map',
//     optimization: {
//         usedExports: true,
//     },
//     devServer: {
//         contentBase: './dist',
//     }
// });