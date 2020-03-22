## 使用

#### 安装依赖
```
yarn
# OR
npm install
```
#### 启动项目 
```
yarn run dev         // 以开发环境启用项目
yarn run dev-test    // 以测试环境启用项目
yarn run dev-prod    // 以生产环境启用项目
# OR
npm run dev
npm run dev-test
npm run dev-prod
```

#### 项目打包
```
yarn run build       // 以开发环境打包代码 打包后文件目录 dist-dev
yarn run build-test  // 以测试环境打包代码 打包后文件目录 dist-test
yarn run build-prod  // 以生产环境打包代码 打包后文件目录 dist-prod
# OR
npm run dev
npm run dev-test
npm run dev-prod
```

#### 打包第三方库
```
// 项目中有添加新的项目依赖包 执行一次这个命令，可以提高热更新和打包速度
yarn run dll
# OR
npm run dll
```

## 目录结构
```
├── config   // 配置文件夹
│   ├── webpack.build.js      // webpack 打包配置
│   ├── webpack.common.js     // webpack 公共配置
│   ├── webpack.dev.js        // webpack 开发环境配置
│   ├── webpack.dev.server.js // webpack-dev-server 配置
│   └── webpack.dll.js        // webpack 打包dll配置
├── dll     // 动态链接库
│   ├── ...
│   ├── ...
│   └── ...
├── public  // 静态公共资源文件夹
│   ├── ...
│   └── ...
├── scripts // 脚本文件夹
│   ├── ...
│   ├── ...
│   └── ...
├── src     // 业务源代码文件夹
│   ├── ...
│   ├── ...
│   └── ...
├── .babelrc.js      // babel配置文件
├── .browserslistrc  // 指定css兼容浏览器配置文件
├── .gitignore       // git过滤文件
├── postcss.config.js   // css预处理插件postcss配置文件
├── ...
├── ...
└── ...
```

## 项目依赖描述
|依赖包|描述|
|--|--|
|@babel/core|babel核心API包|
|@babel/plugin-proposal-decorators|解释装饰器|
|@babel/plugin-transform-runtime|不需要在文件开头import相关polyfill|
|@babel/preset-env|babel插件预设，会加载从es2015开始的所有preset|
|@babel/preset-react|所有React插件的Babel预设|
|@babel/runtime-corejs2|提供polyfill|
|assets-webpack-plugin|根据资源路径发出json|
|autoprefixer|自动管理浏览器前缀的插件|
|babel-loader|JavaScript解释器|
|chalk|终端输出颜色插件|
|clean-webpack-plugin|清理插件，清除上次打包的文件|
|copy-webpack-plugin|打包前copy文件|
|cross-env|设置process.env的变量|
|css-loader|处理css的依赖，解析import和url等引用外部文件的声明|
|file-loader|文件处理|
|friendly-errors-webpack-plugin|更好在终端看到webapck运行的警告和错误|
|html-webpack-plugin|创建html文件, 使用script标签引入构建好的js文件|
|less|less语法解析|
|less-loader|处理less文件转换成css代码|
|mini-css-extract-plugin|抽离css|
|optimize-css-assets-webpack-plugin|压缩css|
|ora|终端交互插件|
|portfinder|端口自增插件|
|postcss-loader|css预处理工具|
|style-loader|将css-loader解析的结果转换成JS代码，动态插入style标签|
|webpack|webpack|
|webpack-cli|webpack-cli|
|webpack-dev-server|webpack-dev-server|
|webpack-merge|webpack配置merge工具|
