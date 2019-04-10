var path = require('path');

//在内存中,根据指定的模板页面,生成一份内存中的首页,同时把打包好的bundle.js注入到页面底部
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.join(__dirname,'./src/main.js'),
    output: {
        path: path.join(__dirname,'./dist'),
        filename: "bundle.js"
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname,'./src/index.html'),
            filename: "index.html"
        }),
    ],
    module: {
        rules: [
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.jpg|png|gif|bmp|jpeg$/,use:'url-loader?limit=13538&name=[name].[ext]'},
            {test:/\.ttf|eot|svg|woff|woff2$/,use:'url-loader'},
            {test:/\.js$/,use:'babel-loader', exclude:/node_modules/},
            {test:/\.vue$/,use:'vue-loader'},
        ]
    },
    resolve:{
        alias: {//这是修改vue的包的导入时的路径
            // 'vue$':"vue/dist/vue.js"
        }
    }
};