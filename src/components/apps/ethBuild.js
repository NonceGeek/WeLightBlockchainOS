import {urls} from '../../apps.config'

export default function EthBuild() {
    const ethBuildUrl = urls.appUrl.ethBuild
    
    return (
        <iframe src={ethBuildUrl} frameBorder="0" title="EthBuild" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayEthBuild = () => {
    <EthBuild> </EthBuild>
}
