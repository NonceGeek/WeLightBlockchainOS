import {urls} from '../../apps.config'

export default function Tiktok() {
    const tiktok = urls.appUrl.tiktok

    return (
        <iframe src={tiktok} frameBorder="0" title="Tiktok" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayTiktok = () => {
    <Tiktok> </Tiktok>
}
