import {urls} from '../../apps.config'

export default function WeFront() {
    const webaseFrontUrl = urls.appUrl.webaseFront
    
    return (
        <iframe src={webaseFrontUrl} frameBorder="0" title="WeFront" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayWeFront = () => {
    <WeFront> </WeFront>
}
