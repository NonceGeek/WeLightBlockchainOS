import {urls} from '../../apps.config'

export default function Console() {
    const fiscoBcosConsole = urls.appUrl.fiscoBcosConsoleUrl

    return (
        <iframe src={fiscoBcosConsole} frameBorder="0" title="fiscoBcosConsole" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayConsole = () => {
    return <Console></Console>
}
