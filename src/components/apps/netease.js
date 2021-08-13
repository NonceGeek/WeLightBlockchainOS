export default function Netease() {
    return (
        <>
            <iframe className='fixed right-0 bottom-12' title='netease' frameborder="no" border="0" marginwidth="0" marginheight="0" src="//music.163.com/outchain/player?type=4&id=959370203&auto=1&height=430"></iframe>
            <iframe src="https://music.163.com/#/playlist?id=2469085999" frameBorder="0" title="Spotify" className="h-full w-full bg-ub-cool-grey"></iframe>
        </>
    )
}

export const displayNetease = () => {
    <Netease> </Netease>
}
