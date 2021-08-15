import {urls} from '../../apps.config'

export default function Todoist() {
    const todoist = urls.appUrl.todoist
    return (
        <iframe src={todoist} frameBorder="0" title="Todoist" className="h-full w-full"></iframe>
    )
}

export const displayTodoist = () => {
    <Todoist> </Todoist>
}
