import { urls } from '../../apps.config'

export default function MapGenerator() {
    const mapGenerator = urls.appUrl.mapGenerator

    return (
        <iframe src={mapGenerator} frameBorder="0" title="Exam" className="h-full w-full bg-ub-cool-grey"></iframe>
    )
}

export const displayMapGenerator = () => {
    <MapGenerator></MapGenerator>
}
