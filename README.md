# webPack-
## 1，用webPack来进行模块化开发
### 浏览器不支持模块化开发

## 2，配置webPack.config.js(node默认跑这个)
###  1. $ npm init -y(初始化配置)
###  2. $ npm i -D webPack ,
###  3. 更改package.json中的main字段 "main": "webpack.config.js",
###  4. 在 package.json d的scripts 字段里做一些命令行的配置("m "webpack.config.js)
##3，webpack插件的应用（html-webpack-plugin）
###   1，安装相应的插件，修改webpack.config.js相应配置

## 4，loader
###   1，浏览器不认识jsx的语句，所以需要相应loader来进行相应的处理
###  2，$ npm install react react-dom
###  3, $ npm install -D babel-loader bable-core(bable-loader会把jsx语句转换成javascript来使浏览器认识))
###  4，$ npm install -D babel-preset-react(告诉babel-loader当你看到js文件时启用)预设去处理）

## 4，引入css，图片，字体()
###   1，安装相应的loader(loader用来预处理模块的）
###   2 ，引入字体
#### 1，下载到本地
#### 2，引入第三方包   $npm install -S fontawesome（$mport 'font-awesome/css/font-awesome.css'）；
## 5，css模块化
#### 1，在rules里进行模块化配置，导出的模块赋值给一个变量