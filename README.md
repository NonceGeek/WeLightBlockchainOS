# WeLightBlockchainOS
微芒虚拟区块链操作系统

## 启动项目
---

下载依赖

```
npm i
```

运行项目

```
npm start
```

## 开发简介
---

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

在`apps.config.js`中添加新的对象. 注意对象中要包含一个`display{App}`函数.

```
export const displayChrome = () => {
    return <Chrome> </Chrome>;
}
```