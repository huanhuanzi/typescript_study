# 1、安装typescript
- 命令：npm install -g typescript
- 编译ts文件，执行tsc main.ts
- 用node执行js文件，node main.js

# 2、typescript工作流
- 使用npm init 生成package.json来管理项目依赖，配置文件
- npm install --save-dev lite-server 用于开发环境的轻量级服务器 
- 配置环境依赖，一是在package.json中的devDependencies不会打包到生产，只是在开发环境使用，dependencies的依赖是会打包到生产的。

# 3、变量声明
-  javascript三种声明变量；var、let、const,typescript避免使用var，可以使用let、const

# 4、typescript类型
- boolean string（""、''、``(反引号es6引入，可以创建一个字符串模板)，三种与javascript一致） number（整数、正负数、浮点数）
- array tuple(元组) enum(枚举)
- null undefined object 
- void  never any
- 高级类型 union（组合类型） Nullable(可空类型) Literal预定于文件类型