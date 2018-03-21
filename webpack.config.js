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
	module:{
		rules:[{
			test:/\.js$/,
			use:[{
				loder:"babel-loader",
				options:{
					
				}
			}]
		}]
	}

}
