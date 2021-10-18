# WeLightBlockchainOS 微芒虚拟区块链操作系统

> Demo: http://os.doge.university

## 功能与架构

目前区块链开发工具多且复杂、环境配置存在一定难度，对个人而言需要上手门槛低、开箱即用的「区块链开发学习工作台」；对团队而言需要团队共用、远程共享的「最佳区块链开发环境」；对区块链生态组织而言，需要一个「全家桶」式的集成开发环境以吸引更多开发者。

在这种需求下，本团队研发了本系统。本系统可从浏览器进行云端访问，同时为前端模拟系统，因此资源占用低。该系统由链管理、智能合约、区块链应用、学习工具集、知识库、IDE、基础设施、接口管理、权限控制、应用组件管理等多个功能模块组成，希望最终达到帮助开发者与开发团队高效学习掌握区块链知识、搭建区块链知识库、进行智能合约与区块链应用的开发维护、管理已有链等目的。

<div style="display: flex; justify-content: space-between">
    <img src="./docs/img/architect.png" alt="architect" style="width: 49%">
    <img src="./docs/img/features.png" alt="features" style="width: 49%">
</div>

## 启动项目

下载依赖

```
npm i
```

运行项目

```
npm start
```

## 开发简介

### 修改App

App的主体是`iframe`. 通过修改`iframe`的url可以让App显示不同的内容. 存储url的文件位于`src/apps.config.js`. 如要修改网易云音乐App显示的内容, 则可以进行如下修改:

```
// src/apps.config.js

const urls = {
    appUrl: {
        - musicPlayer: '//music.163.com/outchain/player?type=4&id=959370203&auto=1&height=430',
        + musicPlayer: '新url'
    ...
```


### 添加App

在`apps`中添加一个App组件, 并在`apps.config.js`中添加App配置与App所用的url. 注意对象中要包含一个`displaySomeApp`函数.

```
// src/components/apps/someapp.js

import {urls} from '../../apps.config'

export default function SomeApp() {
    const someapp = urls.appUrl.someapp

    return (
        <iframe src={someapp}></iframe>
    )
}

export const displaySomeApp = () => {
    return <SomeApp></SomeApp>;
}
```

```
// src/apps.config.js

import { displaySomeApp } from './components/apps/someapp';

const apps = [
    {
        id: "someapp",
        title: "SomeApp",
        icon: './themes/Yaru/apps/someapp.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displaySomeApp,
    },
    ...

const urls = {
    appUrl: {
        someapp: 'http://...',
        ...
```
