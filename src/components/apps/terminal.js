import {urls} from '../../apps.config'

export default function Terminal() {
    const terminal = urls.appUrl.terminal

    return (
        <iframe src={terminal} frameBorder="0" title="Terminal" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayTerminal = () => {
    return <Terminal></Terminal>
}
