import { urls } from '../../apps.config'

export default function SolidityShell() {
    const solidityShellUrl = urls.appUrl.solidityShellUrl

    return (
        <iframe src={solidityShellUrl} frameBorder="0" title="SolidityShell" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displaySolidityShell = () => {
    <SolidityShell/>
}
