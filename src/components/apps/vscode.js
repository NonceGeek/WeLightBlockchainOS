import {urls} from '../../apps.config'

export default function VsCode() {
    const vscode = urls.appUrl.vscode

    return (
        <iframe src={vscode} frameBorder="0" title="VsCode" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayVsCode = () => {
    <VsCode> </VsCode>
}
