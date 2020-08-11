## Button 按钮
---
一套根据项目设计定制的按钮组件  
一共提供了三种按钮样式
- 主按钮：一些常用操作，如表单提交、表格查询等。
- 链接按钮：用于外连接跳转，路由跳转等

以及三种状态属性  
- 默认：取消/返回等最次级的行为
- 常用：查询/下一步/添加等常用行为
- 谨慎操作：删除/修改等需要二次确认的危险操


## API
通过设置 Button 的属性来产生不同的按钮样式，推荐顺序为：`type` -> `size` -> `disabled`。

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| disabled | 按钮失效状态 | boolean | false |  |
| type | 设置按钮类型 | `default` \| `primary` \| `danger` \| `link`  | `default` |
| size | 设置按钮大小 | `default` \| `large` \| `small` | `default` |
| onClick | 点击按钮时的回调 | (event) => void | - |  |

