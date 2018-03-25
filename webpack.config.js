/* 导出webpack配置对象，用commonjs的语法(nodejs的语法 )*/ 
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path");

module.exports={
	entry:"./src/app.js",
	output:{
		filename:"main.js",
	     path: path.resolve(__dirname, 'dist')

	},
	plugins:[  
	new HtmlWebpackPlugin({
            filename: 'aac.html',
            template: 'src/index.html'
        })
	],
    module: {
        /*运行的时候loader从后后往前处理*/
         /*处理顺序  css-loader-style-loader 字体到js*/
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['react']
                        }
                    }
                ]
            },
            // 处理 css文件中出现的 url, 会自动帮你引入里面要引入的模块
            // '[path]-[name]-[local]-[hash:base64:6]'
            {
                test: /\.css$/,
                use: [
                    'style-loader' ,
                    {
                        loader: 'css-loader',
                        options: {
                            module: true                        }
                    }
                ],
                //除了一下两个文件，其他匹配到的css都会开启模块化
               exclude: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            // file-loader:
            //     1. 把你的资源移动到输出目录
            //     2. 返回最终引入资源的 url
            //全局的包
              {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ],
                include: [
                    path.resolve(__dirname, 'node_modules'),
                    path.resolve(__dirname, 'src/common')
                ]
            },
            {
                test: /\.(jpg|png|gif|jpeg)$/,
                use: [ {
                    loader: 'url-loader',
                    options: {
                        limit: 10000
                    }
                } ]
            },
            {
                test: /\.(ttf|eot|woff|woff2|svg)$/,
                use: [ 'file-loader' ]
            }
        ]
    },

}
