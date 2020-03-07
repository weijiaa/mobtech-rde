## 项目依赖
|依赖包|描述|
|--|--|
|webpack|webpack|
|webpack-cli|webpack-cli|
|webpack-dev-server|webpack-dev-server|
|webpack-merge|webpack配置merge工具|
|clean-webpack-plugin|清理插件，清除上次打包的文件|
|html-webpack-plugin|创建html文件, 使用`script`标签引入构建好的js文件|
|style-loader|将css-loader解析的结果转换成JS代码，动态插入style标签|
|css-loader|处理css的依赖，解析import和url等引用外部文件的声明|
|less|less语法解析|
|less-loader|处理less文件转换成css代码|
|file-loader|文件处理|
|babel-loader|JavaScript解释器|
|@babel/core|babel核心API包|
|@babel/preset-env|babel插件预设，会加载从es2015开始的所有preset|
|@babel/runtime-corejs2|提供polyfill|
|@babel/plugin-transform-runtime|不需要在文件开头import相关polyfill|
|@babel/plugin-proposal-decorators|解释装饰器|
|@babel/preset-react|所有React插件的Babel预设|
|assets-webpack-plugin|根据资源路径发出json|
|copy-webpack-plugin|打包前copy文件|
|ora|终端交互插件|
|chalk|终端输出颜色插件|
|portfinder|端口自增插件|
