import {urls} from '../../apps.config'

export default function Netease() {
    const musicHome = urls.appUrl.musicHome
    const musicPlayer = urls.appUrl.musicPlayer

    return (
        <>
            <iframe src={musicPlayer} className='fixed right-0 bottom-12' title='netease' frameborder="no" border="0" marginwidth="0" marginheight="0"></iframe>
            <iframe src={musicHome} frameBorder="0" title="Spotify" className="h-full w-full bg-ub-cool-grey"></iframe>
        </>
    )
}

export const displayNetease = () => {
    <Netease> </Netease>
}
