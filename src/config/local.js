// config urls here
const urls = {
    // urls for APPs
    appUrl: {
        // webasefront urls
        weid: 'http://192.168.80.142:6021',
        webaseFront: 'http://124.251.110.210:5002/WeBASE-Front/#/contract',
        // netease urls
        musicPlayer: '//music.163.com/outchain/player?type=4&id=959370203&auto=1&height=430', // 通过网易云音乐网页版电台外链生成.
        musicHome: 'https://music.163.com/#/playlist?id=2469085999', // 由于同源限制, 无法正常播放网易云音乐网页版.
        // todolist url
        todoist: 'https://todoist.com/showProject?id=220474322',
        // vscode url (add '1s' after github in repo link)
        vscode: 'https://github1s.com/WeLightProject/WeLightBlockchainOS',
    },
    staticUrl: {
        repo: 'https://github.com/WeLightProject/WeLightBlockchainOS',
    }
}

export default urls