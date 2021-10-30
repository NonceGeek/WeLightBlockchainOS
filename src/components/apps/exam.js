import { urls } from '../../apps.config'

export default function Exam() {
    const examUrl = urls.appUrl.exam

    return (
        <iframe src={examUrl} frameBorder="0" title="Exam" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayExam = () => {
    <Exam></Exam>
}
