<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## 学前准备
- vscode 编辑器
- chrome 浏览器
- iterm2 命令行工具
- [postman](https://www.postman.com/) 接口调试工具
- [Sourcetree](https://www.sourcetreeapp.com/) git 可视化工具

## 序言
在这次学习过程中, 您将了解 Nest 的核心基础知识。主要是了解基本的 nest 应用程序构建模块。
### 2020-5-17 更新
代码中15次commit，包含以下模块：
#### 1.初始化项目
#### 2.添加控制器
#### 3.添加swagger文档支持
#### 4.添加日志
#### 5.添加错误处理
#### 6.添加pipe
#### 7.添加权限控制
#### 8.邮件服务
#### 9.config配置
#### 10.监控
#### 11.jwt的token令牌支持以及鉴权
#### 12.基于mysql的讲解
#### 13.任务队列
#### 14.文件上传文件下载

如果有同学学习之后有心得，欢迎提PR书写以上对应模块的心得分享。

## TODO-list
- 微服务
- 消息系统（Kafka）日志系统
- MongoDB + Mongoose
- TCP + redis

## 环境依赖
请确保您的操作系统上安装了 Node.js（> = 6.11.0）。

## 建立
使用Nest CLI 建立项目非常简单。只要确保你已经安装了npm，然后在你的 OS 终端中使用以下命令：
```bash

$ npm i -g @nestjs/cli

$ nest new project

```

project 目录将在 src 目录中包含几个核心文件。
- src
    - app.controller.ts
    - app.module.ts
    - main.ts
    
按照约定，新创建的模块应该有一个专用目录。
|    文件   |       描述    | 
| ------------- |-------------|
| main.ts    | 应用程序入口文件。它使用 NestFactory 用来创建 Nest 应用实例。 | 
| app.module.ts     | 定义 AppModule 应用程序的根模块。      |   
| app.controller.ts | 带有单个路由的基本控制器示例。      |   

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
 
## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## QQ交流群
787585478
