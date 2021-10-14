import displayNetease from './components/apps/netease';
import displayTiktok from './components/apps/tiktok';
import displayRemix from './components/apps/remix';
import displayVsCode from './components/apps/vscode';
import displayWeFront from './components/apps/webaseFront';
import displayEthBuild from './components/apps/ethBuild';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "remix",
        title: "Remix",
        icon: './themes/Yaru/apps/remix.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayRemix,
    },
    {
        id: "wefront",
        title: "WeFront",
        icon: './themes/Yaru/apps/webasefront.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayWeFront,
    },
    {
        id: "netease",
        title: "Netease",
        icon: './themes/Yaru/apps/netease.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayNetease, // 嘉然小姐😅
    },
    {
        id: "ethbuild",
        title: "EthBuild",
        icon: './themes/Yaru/apps/ethBuild.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayEthBuild, // 嘉然小姐😅
    },
    {
        id: "tiktok",
        title: "Tiktok",
        icon: './themes/Yaru/apps/tiktok.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTiktok, // 嘉然小姐😅
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Send a Message",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGedit,
    },
]

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
        // vscode url
        // vscode: 'https://github1s.com/WeLightProject/WeLightBlockchainOS', (only viewable)
        // powered by stackblitz (edit, preview, console)
        vscode: 'https://stackblitz.com/edit/react-wlitvd',
        // terminal url
        terminal: 'http://182.92.219.88:100/',
        // tiktok url
        tiktok: 'https://www.douyin.com/recommend',
        // remix url
        remix: 'https://remix.ethereum.org/',
        // eth.build url
        ethBuild: 'https://sandbox.eth.build/',
    },
    staticUrl: {
        repo: 'https://github.com/WeLightProject/WeLightBlockchainOS',
    }
}

export default apps;
export {urls};
