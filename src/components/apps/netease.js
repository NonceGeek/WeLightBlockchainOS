import local from '../../config/local'

export default function Netease() {
    const musicHome = local.appUrl.musicHome
    const musicPlayer = local.appUrl.musicPlayer

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
