# WeLightBlockchainOS
微芒虚拟区块链操作系统

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
