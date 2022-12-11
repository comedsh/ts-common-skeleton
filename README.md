# 说明

这是一个基础脚手架，只是用来做 Functional 模块设计的，作为基础脚手架可作为基础组件同时应用到前端和后端。其中集成了 Mocha 以及 Istanbul，也安装了 VSCode mocha 的插件，以便在 VSCode 中直接启动 Mocha 测试用例，如何安装的详情参考《Typescript - 搭建开发环境.md》；下面记录一下要点，

Mocha Test Explorer 插件要配置如下内容到 .vscode/settings.json
```json
{
  "mochaExplorer.require": "ts-node/register",
  "mochaExplorer.files": "tests/**/*.ts",
}
```
