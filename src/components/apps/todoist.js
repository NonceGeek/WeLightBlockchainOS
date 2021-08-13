import local from '../../config/local'

export default function Todoist() {
    const todoist = local.appUrl.todoist
    return (
        <iframe src={todoist} frameBorder="0" title="Todoist" className="h-full w-full"></iframe>
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}
