import local from '../../config/local'

export default function VsCode() {
    const vscode = local.appUrl.vscode

    return (
        <iframe src={vscode} frameBorder="0" title="VsCode" className="h-full w-full bg-ub-cool-grey"></iframe>
        // this is not my work, but it's amazing!
        // Here is the link to the original repo: https://github.com/conwnet/github1s
    )
}

export const displayVsCode = () => {
    <VsCode> </VsCode>
}
