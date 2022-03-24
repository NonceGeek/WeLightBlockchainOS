import displayNetease from './components/apps/netease';
import displayTiktok from './components/apps/tiktok';
import displayRemix from './components/apps/remix';
import displayVsCode from './components/apps/vscode';
import displayWeFront from './components/apps/webaseFront';
import displayEthBuild from './components/apps/ethBuild';
import displayExam from './components/apps/exam';
import displayMapGenerator from './components/apps/mapGenerator';
import displaySolidityShell from './components/apps/solidityShell';
import displayWeLight from './components/apps/welight';
import displaySupplyChain from './components/apps/supplyChain';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayGedit } from './components/apps/gedit';
import { displayConsole } from './components/apps/fiscoBcosConsole';

const appCategory = {
    browser: 'Browser',
    console: 'Console',
    ide: 'IDE',
    app: 'APP',
    doc: 'Document',
    entertainment: 'Entertainment',
    misc: 'Misc',
}

const apps = [
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        category: appCategory.browser,
        desktop_shortcut: true,
        screen: displayChrome,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        category: appCategory.console,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "fiscoBcosConsole",
        title: "FiscoBcosConsole",
        icon: './themes/Yaru/apps/console.png',
        disabled: false,
        favourite: true,
        category: appCategory.console,
        desktop_shortcut: false,
        screen: displayConsole,
    },
    {
        id: "solidityShell",
        title: "SolidityShell",
        icon: './themes/Yaru/apps/solidity_shell.png',
        disabled: false,
        favourite: true,
        category: appCategory.console,
        desktop_shortcut: false,
        screen: displaySolidityShell,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        category: appCategory.ide,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "remix",
        title: "Remix",
        icon: './themes/Yaru/apps/remix.png',
        disabled: false,
        favourite: true,
        category: appCategory.ide,
        desktop_shortcut: false,
        screen: displayRemix,
    },
    {
        id: "wefront",
        title: "WeFront",
        icon: './themes/Yaru/apps/webasefront.png',
        disabled: false,
        favourite: true,
        category: appCategory.ide,
        desktop_shortcut: false,
        screen: displayWeFront,
    },
    {
        id: "ethbuild",
        title: "EthBuild",
        icon: './themes/Yaru/apps/ethBuild.png',
        disabled: false,
        favourite: true,
        category: appCategory.app,
        desktop_shortcut: false,
        screen: displayEthBuild,
    },
    {
        id: "exam",
        title: "Exam",
        icon: './themes/Yaru/apps/exam.png',
        disabled: false,
        favourite: true,
        category: appCategory.app,
        desktop_shortcut: false,
        screen: displayExam,
    },
    {
        id: "mapGenerator",
        title: "MapGenerator",
        icon: './themes/Yaru/apps/mapGenerator.png',
        disabled: false,
        favourite: true,
        category: appCategory.app,
        desktop_shortcut: false,
        screen: displayMapGenerator,
    },
    {
        id: "welight",
        title: "WeLight",
        icon: './themes/Yaru/apps/welight.png',
        disabled: false,
        favourite: true,
        category: appCategory.doc,
        desktop_shortcut: false,
        screen: displayWeLight,
    },
    {
        id: "supplyChain",
        title: "supplyChain",
        icon: './themes/Yaru/apps/supplyChain.png',
        disabled: false,
        favourite: true,
        category: appCategory.app,
        desktop_shortcut: false,
        screen: displaySupplyChain,
    },
    {
        id: "netease",
        title: "Netease",
        icon: './themes/Yaru/apps/netease.png',
        disabled: false,
        favourite: true,
        category: appCategory.entertainment,
        desktop_shortcut: false,
        screen: displayNetease, // 嘉然小姐😅
    },
    {
        id: "tiktok",
        title: "Tiktok",
        icon: './themes/Yaru/apps/tiktok.png',
        disabled: false,
        favourite: true,
        category: appCategory.entertainment,
        desktop_shortcut: false,
        screen: displayTiktok,
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        category: appCategory.misc,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        category: appCategory.misc,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "gedit",
        title: "Send a Message",
        icon: './themes/Yaru/apps/gedit.png',
        disabled: false,
        favourite: false,
        category: appCategory.app,
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
        terminal: 'http://47.103.85.132:501/',
        // fisco bcos console url
        fiscoBcosConsoleUrl: 'http://47.103.85.132:100/',
        // solidity shell url
        solidityShellUrl: 'http://124.251.110.210:4003/',
        // tiktok url
        tiktok: 'https://www.douyin.com/recommend',
        // remix url
        remix: 'https://remix.ethereum.org/',
        // eth.build url
        ethBuild: 'https://sandbox.eth.build/',
        // exam url
        exam: 'http://lab.cyberemd.com/#/public/exam/list',
        // welight url
        welight: 'https://r8jmm3f9xe.feishu.cn/docs/doccnofLLkqPWZssHdo3u2wbD7c?from=from_copylink',
        // supplyChain url
        supplyChain: 'http://supplychain.cyberemd.com/',
        // taishang-world-generator url
        mapGenerator: 'https://welightproject.github.io/tai_shang_world_generator/'
    },
    staticUrl: {
        repo: 'https://github.com/WeLightProject/WeLightBlockchainOS',
    }
}

export default apps;
export {
    urls,
    appCategory,
};
