import {urls} from '../../apps.config'

export default function Remix() {
    const remix = urls.appUrl.remix

    return (
        <iframe src={remix} frameBorder="0" title="Terminal" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayRemix = () => {
    return <Remix></Remix>
}
