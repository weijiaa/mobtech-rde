## 如何编写组件文档

组件文件夹名以组件名命名
目录结构:
  ``` 
  ├── Button                // 组件文件夹
  │   ├── demo             // 展示demo
  │   │   ├── Default.js  // 第一个demo         
  │   │   ├── Default.md  // 第一个demo文档         
  │   │   ├── Primary.js  // 第二个demo          
  │   │   ├── Primary.md  // 第二个demo文档        
  │   │   └── ...
  │   │   └── ...
  │   ├── index.md        // 组件必要介绍
  │   ├── Button.js       // 组件源代码
  │   ├── index.js       
  │   ├── ...
  │   └── ...
  ```

## 文档配置

项目根目录创建文件`.docrc.js`

```
module.exports = {
  components: './src/components'  // 组件文件夹
}

```
